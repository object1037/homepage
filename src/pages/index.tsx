import Head from 'next/head'
import { HeroHeader } from '../components/HeroHeader'
import clsx from 'clsx'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>object1037</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="object1037's homepage" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object1037" />
        <meta property="og:url" content="https://object1037.dev" />
        <meta property="og:title" content="object1037" />
        <meta property="og:description" content="object1037's homepage" />
        <meta property="og:image" content="https://icon.object1037.dev/png" />
        <link rel="canonical" href="https://object1037.dev" />
      </Head>
      <HeroHeader />
      <main className="min-h-screenWithoutHeader px-8 py-24">
        <p>
          I&apos;m object1037, a student at the University of Tokyo(B2), Web
          enthusiast, Pokopea aficionado. Born on the 9th April 2002.
        </p>
      </main>
    </>
  )
}

export default IndexPage
