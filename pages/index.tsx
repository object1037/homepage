import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import ELink from '../components/external-link'
import List from '../components/list'
import { FaBirthdayCake } from 'react-icons/fa'
import { FiMapPin, FiHeart } from 'react-icons/fi'
import clsx from 'clsx'

const affiliations = [
  "The University of Tokyo (B1)",
  <ELink key="TSG" url="https://tsg.ne.jp/">TSG</ELink>,
]
const profileIconStyle = [
  'flex',
  'justify-center',
  'items-center',
  'pr-6',
  'pl-3',
  'py-4',
  'text-xl',
  'align-text-bottom',
  'border-r',
  'border-gray-700',
  'dark:border-gray-400'
]
const profileContentStyle = [
  'py-4',
  'pl-6',
  'flex',
  'flex-wrap',
  'items-center',
  'whitespace-pre'
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
      <main className="pt-10 pb-20 px-6 sm:px-12">
        <Section title="Profile">
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="contents">
              <div className={clsx(profileIconStyle)}><FaBirthdayCake /></div>
              <div className={clsx(profileIconStyle)}><FiHeart /></div>
              <div className={clsx(profileIconStyle)}><FiMapPin /></div>
            </div>
            <div className="contents">
              <div className={clsx(profileContentStyle)}>2002/4/9</div>
              <div className={clsx(profileContentStyle)}>
                Front-end, Design, <ELink key="ぽこピー" url="https://www.youtube.com/channel/UC1EB8moGYdkoZQfWHjh7Ivw">ぽこピー</ELink>
              </div>
              <div className={clsx(profileContentStyle)}>Tokyo</div>
            </div>
          </div>
        </Section>
        <Section title="Affiliation">
          <List listArr={affiliations} />
        </Section>
        <Section title={<ELink url="https://blog.object1037.dev">Blog</ELink>} />
      </main>
      <Footer />
    </>
  )
}