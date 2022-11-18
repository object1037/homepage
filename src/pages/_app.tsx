import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { JetBrains_Mono } from '@next/font/google'
import { useEffect } from 'react'

const jetbrainsmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsmono',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  useEffect(() => {
    // scroll to top on refresh
    window.scrollTo(0, 0)
    window.history.scrollRestoration = 'manual'
  }, [pathname])

  return (
    <div className={`${jetbrainsmono.variable} font-mono`}>
      <Component {...pageProps} />
    </div>
  )
}
