import { readFile } from 'node:fs/promises'
import react from '@vitejs/plugin-react'
import type { Plugin, ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'
import type { Render } from './entry-server'

const devPlugin: () => Plugin = () => {
  return {
    name: 'develop',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          try {
            const url = req.originalUrl ?? ''
            const template = await readFile('./index.html', 'utf-8')
            const transformed = await server.transformIndexHtml(url, template)
            const { render } = (await server.ssrLoadModule(
              './lib/entry-server.ts',
            )) as { render: Render }
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

const createServer = async () => {
  const vite = await createViteServer({
    appType: 'custom',
    plugins: [devPlugin(), react()],
  })

  await vite.listen()

  vite.printUrls()
  vite.bindCLIShortcuts({ print: true })
}

createServer()
