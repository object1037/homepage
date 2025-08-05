import type { Plugin } from 'vite'

export const noscriptPlugin: () => Plugin = () => {
  return {
    name: 'noscript-plugin',

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
            children: link ?? '',
            injectTo: 'head',
          },
        ],
      }
    },
  }
}
