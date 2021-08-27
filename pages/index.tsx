import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import ELink from '../components/external-link'
import List from '../components/list'

const likes = [
  "フロントエンド",
  <ELink key="ぽこピー" url="https://www.youtube.com/channel/UC1EB8moGYdkoZQfWHjh7Ivw">ぽこピー</ELink>,
]
const affiliations = [
  "東京大学理科一類(B1)",
  <ELink key="TSG" url="https://tsg.ne.jp/">東京大学コンピュータ系サークル TSG</ELink>,
]

export default function Home() {
  return (
    <>
      <Head>
        <title>object1037</title>
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
      <main className="pt-10 flex flex-col pb-20">
        <Section title="Profile">
          <div className="grid grid-cols-2 dark:divide-gray-300 divide-gray-800 divide-x">
            <div>
              <div className="text-right p-4">誕生日</div>
              <div className="text-right p-4">居住地</div>
            </div>
            <div>
              <div className="text-left p-4">2002/4/9</div>
              <div className="text-left p-4">東京</div>
            </div>
          </div>
        </Section>
        <Section title="Likes">
          <List listArr={likes} />
        </Section>
        <Section title="Affiliation">
          <List listArr={affiliations} />
        </Section>
        <ELink url="https://blog.object1037.dev" className="text-3xl">Blog</ELink>
      </main>
      <Footer />
    </>
  )
}