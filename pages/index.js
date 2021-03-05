import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Account from '../components/accounts'

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Head>
        <title>object_1037</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@object_1037" />
      </Head>
      <div className="justify-center object-none flex-shrink flex items-center mb-2 mt-8">
        <div className="flex justify-center content-center rounded-full shadow-xl">
          <Image priority src="/images/profile.jpg" alt="my profile picture" width="150" height="150" className="rounded-full" /> 
        </div>
      </div>
      <h1 className="font-sans font-bold text-center text-4xl m-2">object_1037</h1>
    </div>
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