import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import localFont from '@next/font/local'
import { useEffect } from 'react'

const JetBrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-var.woff2',
  variable: '--font-jetbrainsmono',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  useEffect(() => {
    // scroll to top on refresh
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={JetBrainsMono.className}>
      <Component {...pageProps} />
    </div>
  )
}
