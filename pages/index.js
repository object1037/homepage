import Head from 'next/head'
import Image from 'next/image'
import Account from '../components/accounts'
import Row from '../components/tablerow'
import Skill from '../components/skills'

export default function Home() {
  return (
    <>
    <Head>
      <title>object_1037</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@object_1037" />
    </Head>
    <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 dark:bg-gray-800 py-8">
      <div className="flex rounded-full shadow-xl">
        <Image priority src="/images/profile.jpg" alt="my profile picture" width="200" height="200" className="rounded-full" /> 
      </div>
      <h1 className="font-sans font-bold text-4xl m-2 text-gray-900 dark:text-gray-100 min-h-full">object_1037</h1>
    </section>
    <section className="flex flex-col py-12">
      <h1 className="font-sans text-3xl text-center text-gray-900 dark:text-gray-100">Profile</h1>
      <table className="table-fixed mx-auto border-collapse mt-8 text-base">
        <thead>
          <tr>
            <th className="w-1/4" />
            <th className="w-1/4" />
          </tr>
        </thead>
        <tbody>
          <Row name="誕生日" value="2002年4月9日" />
          <Row name="好きなもの" value="VTuber" />
          <Row name="居住地" value="大阪" />
        </tbody>
      </table>
    </section>
    <section className="flex flex-col">
      <h1 className="font-sans text-3xl text-center text-gray-900 dark:text-gray-100 mb-12">Skills</h1>
      <div className="flex flex-row flex-wrap justify-center">
        <Skill name="JavaScript" description="できません" icon="js" />
        <Skill name="HTML" description="できません" icon="html5" />
        <Skill name="CSS" description="できません" icon="css3-alt" />
        <Skill name="React" description="できません" icon="react" />
        <Skill name="Git" description="できません" icon="git-alt" />
      </div>
    </section>
    <footer className="flex flex-row items-center pl-4 bg-gray-600 h-20 relative w-screen mt-20">
        <Account account="twitter" link="https://twitter.com/object_1037" hover="hover:text-twitter" />
        <Account account="github" link="https://github.com/object1037" hover="hover:text-gray-300" />
      <div className="absolute right-8 text-gray-400 font-light text-xs">&copy; 2021 object_1037</div>
    </footer>
    </>
  )
}