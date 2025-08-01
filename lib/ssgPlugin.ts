import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Plugin, ViteDevServer } from 'vite'
import type { Render } from './entry-server'

export const ssgPlugin: () => Plugin = () => {
  return {
    name: 'ssg-plugin',

    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          try {
            const url = req.originalUrl ?? ''
            const indexPath = resolve(__dirname, '../index.html')
            const entryPath = resolve(__dirname, './entry-server.ts')

            const template = await readFile(indexPath, 'utf-8')
            const transformed = await server.transformIndexHtml(url, template)
            const { render } = (await server.ssrLoadModule(entryPath)) as { render: Render }
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
