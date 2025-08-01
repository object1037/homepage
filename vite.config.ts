import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ssgPlugin } from './lib/ssgPlugin.ts'

export default defineConfig({
  appType: 'custom',
  plugins: [ssgPlugin(), react()],
  environments: {
    server: {},
  },
})
