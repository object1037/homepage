import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  useEffect(() => {
    // scroll to top on refresh
    window.scrollTo(0, 0)
  }, [pathname])

  return <Component {...pageProps} />
}
