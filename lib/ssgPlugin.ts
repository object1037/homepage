import { readdir, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import {
  isRunnableDevEnvironment,
  type ModuleNode,
  type Plugin,
  runnerImport,
  type ViteDevServer,
} from 'vite'
import type { Render } from './entry-server'

export const ssgPlugin: () => Plugin = () => {
  const indexPath = resolve(__dirname, '../index.html')
  const entryPath = resolve(__dirname, './entry-server.ts')

  return {
    name: 'ssg-plugin',

    handleHotUpdate({ server, modules, timestamp }) {
      const invalidatedModules = new Set<ModuleNode>()
      for (const mod of modules) {
        server.moduleGraph.invalidateModule(
          mod,
          invalidatedModules,
          timestamp,
          true,
        )
      }
      server.ws.send({ type: 'full-reload' })
      return []
    },

    generateBundle: {
      order: 'post',
      async handler(_options, bundle) {
        const filesToPrerender = await readdir('./src/pages')
        const templateBundle = bundle['index.html']
        if (!templateBundle || templateBundle.type !== 'asset') {
          throw new Error('index.html asset not found in bundle')
        }
        const template = templateBundle.source
        if (typeof template !== 'string') {
          throw new Error('index.html source is not a string')
        }

        const {
          module: { render },
        } = await runnerImport<{ render: Render }>(entryPath, {
          plugins: [react()],
        })

        for (const fileName of filesToPrerender) {
          const htmlFileName = fileName.replace(/\.tsx$/, '.html')
          const bundleForFile = bundle[htmlFileName]
          console.log(`Pre-rendering: ${htmlFileName}`)

          const { appHtml } = await render(`/${fileName}`)
          const html = template.replace(`<!--outlet-->`, appHtml)

          if (bundleForFile && bundleForFile.type === 'asset') {
            bundleForFile.source = html
          } else {
            this.emitFile({
              type: 'asset',
              fileName: htmlFileName,
              source: html,
            })
          }
        }
      },
    },

    configureServer(server: ViteDevServer) {
      const serverEnv = server.environments.server
      const JSON_ENDP = '/.well-known/appspecific/com.chrome.devtools.json'

      return () => {
        server.middlewares.use(JSON_ENDP, (_req, res) => {
          res.statusCode = 404
          res.end()
        })

        server.middlewares.use(async (req, res, next) => {
          try {
            if (serverEnv === undefined) {
              throw new Error('Server environment is not defined')
            }
            if (!isRunnableDevEnvironment(serverEnv)) {
              throw new Error('Env is not runnable')
            }

            const url = req.originalUrl ?? ''
            const fileName = url === '/' ? '/index.tsx' : `${url}.tsx`
            const template = await readFile(indexPath, 'utf-8')
            const transformed = await server.transformIndexHtml(url, template)
            const { render } = (await serverEnv.runner.import(entryPath)) as {
              render: Render
            }
            const { appHtml, status } = await render(fileName)
            const html = transformed.replace('<!--outlet-->', appHtml)

            res.statusCode = status
            res.setHeader('Content-Type', 'text/html')
            res.end(html)
          } catch (e) {
            if (e instanceof Error) {
              server.ssrFixStacktrace(e)
              next(e)
            }
          }
        })
      }
    },
  }
}
