import Head from 'next/head'
import Image from 'next/image'
import Account from '../components/accounts'
import Row from '../components/tablerow'
import Skill from '../components/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Contact from '../components/contactrow'

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
      <meta property="og:url" content="https://object1037.vercel.app/" />
      <meta property="og:title" content="object1037" />
      <meta property="og:description" content="object1037's homepage" />
      <meta property="og:image" content="https://object1037.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=640&q=75" />
      <meta name="google-site-verification" content="NE6TDGJcUUnRDHmhTZdMo8rFYwP97C3w8rYSXMI3wyo" />
    </Head>
    <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 dark:bg-gray-800 py-8">
      <div className="flex rounded-full shadow-xl">
        <Image priority src="/images/profile.jpg" alt="my profile picture" width={200} height={200} className="rounded-full" /> 
      </div>
      <h1 className="font-sans font-bold text-4xl m-2 text-gray-900 dark:text-gray-100 min-h-full">object1037</h1>
    </section>
    <section className="flex flex-col my-12">
      <h1 className="font-sans text-3xl text-center text-gray-900 dark:text-gray-100 mb-10">Profile</h1>
      <table className="table-fixed mx-auto border-collapse text-base">
        <thead>
          <tr>
            <th className="w-1/4" />
            <th className="w-1/4" />
          </tr>
        </thead>
        <tbody>
          <Row name="誕生日" value="2002年4月9日" />
          <Row name="好きなもの" value="ぽこピー" />
          <Row name="居住地" value="東京" />
        </tbody>
      </table>
    </section>
    <section className="flex flex-col my-12">
      <h1 className="font-sans text-3xl text-center text-gray-900 dark:text-gray-100 mb-10">Affiliation</h1>
      <ul className="list-inside list-disc mx-auto text-gray-900 dark:text-gray-100">
        <li className="mb-6">東京大学理科一類(B1)</li>
        <li><a href="https://tsg.ne.jp/" target="_blank" rel="noopener" className="text-Blue-500 dark:text-Blue-400 hover:underline">東京大学コンピュータ系サークル TSG</a></li>
      </ul>
    </section>
    <section className="flex flex-col my-12">
      <h1 className="font-sans text-3xl text-center text-gray-900 dark:text-gray-100 mb-10">Skills</h1>
      <div className="flex flex-row flex-wrap justify-center">
        <Skill name="JavaScript" description="勉強中" icon="js" />
        <Skill name="HTML" description="ちょっとできる" icon="html5" />
        <Skill name="CSS" description="ちょっとできる" icon="css3-alt" />
        <Skill name="React" description="勉強中" icon="react" />
        <Skill name="Git" description="ちょっとできる" icon="git-alt" />
      </div>
    </section>
    <section className="flex flex-col my-12">
      <h1 className="font-sans text-3xl text-center mb-10 text-gray-900 dark:text-gray-100">Contact</h1>
      <table className="table-fixed mx-auto border-collapse text-base">
        <thead>
          <tr>
            <th className="" />
            <th className="" />
          </tr>
        </thead>
        <tbody>
          <Contact name="Twitter" value="@object1037" url="https://twitter.com/object1037" />
          <Contact name="GitHub" value="@object1037" url="https://github.com/object1037" />
        </tbody>
      </table>
    </section>
    <section className="flex flex-col my-12">
    <h1 className="font-sans text-3xl text-center text-Blue-500 dark:text-Blue-400"><a className="hover:underline" href="https://blog1037.vercel.app" target="_blank" rel="noopener">Blog</a></h1>
    </section>
    <footer className="flex flex-row items-center pl-4 bg-gray-600 h-20 relative w-screen mt-16">
        <Account icon="twitter" link="https://twitter.com/object1037" hover="hover:text-twitter" />
        <Account icon="github" link="https://github.com/object1037" hover="hover:text-gray-300" />
      <div className="absolute right-8 text-gray-200 font-light text-xs">&copy; 2021 object1037</div>
    </footer>
    </>
  )
}