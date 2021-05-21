import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import SkillCard from '../components/skill-card'
import ELink from '../components/external-link'
import List from '../components/list'

const likes = [
  "フロントエンド",
  "ぽこピー",
]

const affiliations = [
  "東京大学理科一類(B1)",
  "東京大学コンピュータ系サークル TSG",
]

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
      <main className="pt-10 flex flex-col pb-20">
        <Section title="Profile">
          <div className="grid grid-cols-2 divide-gray-900 divide-x">
            <div>
              <div className="text-right p-4">誕生日</div>
              <div className="text-right p-4">居住地</div>
            </div>
            <div>
              <div className="text-left p-4">2002年4月9日</div>
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
        <Section title="Skills">
          <div className="flex flex-row justify-center flex-wrap">
            <SkillCard name="JavaScript" description="勉強中" icon="js" />
            <SkillCard name="HTML" description="ちょっとできる" icon="html5" />
            <SkillCard name="CSS" description="ちょっとできる" icon="css3-alt" />
            <SkillCard name="React" description="勉強中" icon="react" />
            <SkillCard name="Git" description="ちょっとできる" icon="git-alt" />
          </div>
        </Section>
        <Section title="Contact">
          <div className="grid grid-cols-7 divide-gray-900 divide-x mx-auto">
            <div className="col-span-2">
              <div className="text-right p-4">Mail</div>
              <div className="text-right p-4">Twitter</div>
              <div className="text-right p-4">GitHub</div>
            </div>
            <div className="col-span-5">
              <div className="text-left p-4">contact@object1037.dev</div>
              <div className="text-left p-4">@object1037</div>
              <div className="text-left p-4">@object1037</div>
            </div>
          </div>
        </Section>
        <ELink displayName="Blog" url="https://blog.object1037.dev" />
      </main>
      <Footer />
    </>
  )
}