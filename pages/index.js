import Head from 'next/head'
import Image from 'next/image'
import Account from '../components/accounts'
import Row from '../components/tablerow'

export default function Home() {
  return (
    <>
    <Head>
      <title>object_1037</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@object_1037" />
    </Head>
    <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
      <div className="mt-8 flex rounded-full shadow-xl">
        <Image priority src="/images/profile.jpg" alt="my profile picture" width="150" height="150" className="rounded-full" /> 
      </div>
      <h1 className="font-sans font-bold text-4xl m-2">object_1037</h1>
    </section>
    <section className="flex flex-col mt-12">
      <h1 className="font-sans text-3xl text-center">Profile</h1>
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
        </tbody>
      </table>
    </section>
    <footer className="absolute bottom-0 inset-x-0 bg-gray-600 h-20">
      <div className="flex flex-row items-center space-y-0 pl-4">
        <Account account="twitter" link="https://twitter.com/object_1037" hover="hover:text-twitter" />
        <Account account="github" link="https://github.com/object1037" hover="hover:text-gray-300" />
      </div>
      <span className="text-gray-400 font-light text-xs absolute bottom-8 md:bottom-4 inset-x-0 text-right md:text-center mr-8 md:mr-0">&copy; 2021 object_1037</span>
    </footer>
    </>
  )
}