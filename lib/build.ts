import react from '@vitejs/plugin-react'
import { build as viteBuild } from 'vite'
import { ssgPlugin } from './ssgPlugin.ts'

const build = async () => {
  console.log('Building the project...')
  const output = await viteBuild({
    plugins: [ssgPlugin(), react()],
  })
}

build()
