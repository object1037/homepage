import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import ELink from '../components/external-link'
import List from '../components/list'

const affiliations = [
  "The University of Tokyo (B1)",
  <ELink key="TSG" url="https://tsg.ne.jp/">TSG</ELink>,
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
      <main className="flex-shrink-0 flex-1 py-8 text-lg">
        <Section title="Profile">
            <div className="leading-loose">
              I like Front-end, Design, and <ELink key="ぽこピー" url="https://www.youtube.com/channel/UC1EB8moGYdkoZQfWHjh7Ivw">Pokopea</ELink>.
              <br/>
              Born on the 9th April 2002.
            </div>
        </Section>
        <Section title="Affiliation">
          <List listArr={affiliations} />
        </Section>
        <Section title={<ELink url="https://blog.object1037.dev" bold>Blog</ELink>} />
      </main>
      <Footer />
    </>
  )
}