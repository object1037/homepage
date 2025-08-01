import react from '@vitejs/plugin-react'
import { createServer as createViteServer } from 'vite'
import { ssgPlugin } from './ssgPlugin.ts'

const createServer = async () => {
  const vite = await createViteServer({
    appType: 'custom',
    plugins: [ssgPlugin(), react()],
  })

  await vite.listen()

  vite.printUrls()
  vite.bindCLIShortcuts({ print: true })
}

createServer()
