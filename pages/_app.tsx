import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import type { AppProps } from 'next/app'

library.add(fab)

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
