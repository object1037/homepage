import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { isRunnableDevEnvironment, type Plugin, type ViteDevServer } from 'vite'
import type { Render } from './entry-server'

export const ssgPlugin: () => Plugin = () => {
  return {
    name: 'ssg-plugin',

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
            const indexPath = resolve(__dirname, '../index.html')
            const entryPath = resolve(__dirname, './entry-server.ts')

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
