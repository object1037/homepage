import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { noscriptPlugin } from './lib/noscriptPlugin.ts'
import { ssgPlugin } from './lib/ssgPlugin.ts'

export default defineConfig({
  appType: 'custom',
  plugins: [noscriptPlugin(), ssgPlugin(), react()],
  environments: {
    server: {},
  },
  css: {
    transformer: 'lightningcss',
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
})
