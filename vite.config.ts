import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { noscriptPlugin } from './lib/noscriptPlugin.ts'
import { ssgPlugin } from './lib/ssgPlugin.ts'

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
