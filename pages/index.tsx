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
      <main className="py-10 px-6">
        <Section title="Profile">
          <div className="grid grid-cols-2">
              <div className="text-right border-gray-900 border-r p-4">誕生日</div>
              <div className="text-left p-4">2002年4月9日</div>

              <div className="text-right border-gray-900 border-r p-4">好きなもの</div>
              <div className="text-left p-4">Web, ぽこピー</div>

              <div className="text-right border-gray-900 border-r p-4">居住地</div>
              <div className="text-left p-4">東京</div>
          </div>
        </Section>
        <Section title="Affiliation">
          <ul className="list-inside list-disc mx-auto flex flex-col space-y-6">
            <li>東京大学理科一類(B1)</li>
            <li>東京大学コンピュータ系サークル TSG</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  )
}