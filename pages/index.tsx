import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'

export default function Home() {
  return (
    <>
      <Head>
        <title>object1037</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/profile.jpg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="object1037のホームページです。" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object1037" />
        <meta property="og:url" content="https://object1037.dev" />
        <meta property="og:title" content="object1037" />
        <meta property="og:description" content="object1037's homepage" />
        <meta property="og:image" content="https://object1037.dev/_next/image?url=%2Fimages%2Fprofile.jpg&w=640&q=75" />
      </Head>
      <Header />
      <main>
        <Section title="Profile">
          <div></div>
        </Section>
      </main>
      <Footer />
    </>
  )
}