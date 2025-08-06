import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { noscriptPlugin } from './lib/plugins/noscriptPlugin.ts'
import { ssgPlugin } from './lib/plugins/ssgPlugin.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => {
  const mixins = new Map()
  return {
    appType: 'custom',
    plugins: [noscriptPlugin(), ssgPlugin(), react()],
    environments: {
      server: {},
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        customAtRules: {
          mixin: {
            prelude: '<custom-ident>',
            body: 'style-block',
          },
          apply: {
            prelude: '<custom-ident>',
          },
        },
        visitor: {
          Rule: {
            custom: {
              mixin(rule) {
                mixins.set(rule.prelude.value, rule.body.value)
                return []
              },
              apply(rule) {
                return mixins.get(rule.prelude.value)
              },
            },
          },
        },
      },
    },
    build: {
      cssMinify: 'lightningcss',
      modulePreload: {
        polyfill: false,
      },
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
            return null
          },
        },
      },
    },
  }
})
