import { readdir, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import {
  isRunnableDevEnvironment,
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

    generateBundle: {
      order: 'post',
      async handler(_options, bundle) {
        const routesToPrerender = await readdir('./src/pages').then((files) => {
          return files.map((file) => {
            const name = file.replace(/\.tsx?$/, '')
            return name === 'index' ? '/' : `/${name}`
          })
        })
        const template = await readFile(indexPath, 'utf-8')

        const {
          module: { render },
        } = await runnerImport<{ render: Render }>(entryPath, {
          plugins: [react()],
        })

        for (const url of routesToPrerender) {
          console.log(`Pre-rendering: ${url}`)
          const fileName =
            url === '/' ? 'index.html' : `${url.substring(1)}.html`
          const bundleForFile = bundle[fileName]

          const { appHtml } = await render(url)
          const html = template.replace(`<!--outlet-->`, appHtml)

          if (bundleForFile && bundleForFile.type === 'asset') {
            bundleForFile.source = html
          } else {
            this.emitFile({
              type: 'asset',
              fileName: fileName,
              source: html,
            })
          }
        }
      },
    },

    configureServer(server: ViteDevServer) {
      const serverEnv = server.environments.server

      return () => {
        server.middlewares.use(async (req, res, next) => {
          try {
            if (serverEnv === undefined) {
              throw new Error('Server environment is not defined')
            }
            if (!isRunnableDevEnvironment(serverEnv)) {
              throw new Error('Env is not runnable')
            }

            const url = req.originalUrl ?? ''
            const template = await readFile(indexPath, 'utf-8')
            const transformed = await server.transformIndexHtml(url, template)
            const { render } = (await serverEnv.runner.import(entryPath)) as {
              render: Render
            }
            const { appHtml, status } = await render(url)
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
