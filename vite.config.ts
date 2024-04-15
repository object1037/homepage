import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const noscriptStylePlugin = () => {
  return {
    name: 'noscript-style',
    transformIndexHtml(html: string) {
      const noscriptRegex = /<noscript>.*?<\/noscript>/s
      const linkRegex = /<link[^>]*?href="[^"]*noscript[^"]*"[^>]*?>/
      const link = html.match(linkRegex)?.[0]
      const newHtml = html.replace(noscriptRegex, '').replace(linkRegex, '')
      return {
        html: newHtml,
        tags: [
          {
            tag: 'noscript',
            children: link,
          },
        ],
      }
    },
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('noscript.css')) {
            return 'noscript'
          }
        },
      },
    },
  },
  plugins: [noscriptStylePlugin()],
})
