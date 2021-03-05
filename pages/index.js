import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Head>
        <title>object_1037</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="justify-center object-none flex-shrink flex items-center mb-2 mt-8">
        <div className="flex justify-center content-center rounded-full shadow-xl">
          <Image priority src="/images/profile.jpg" alt="my profile picture" width="150" height="150" className="rounded-full" /> 
        </div>
      </div>
      <h1 className="font-sans font-bold text-center text-4xl m-2">object_1037</h1>
    </div>
    <footer className="absolute bottom-0 inset-x-0 flex flex-row items-center bg-gray-600 h-20">
      <Link href="https://twitter.com/object_1037">
         <a className="w-10 h-10 mx-6 text-white hover:text-twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      </Link>
      <Link href="https://github.com/object1037">
        <a className="w-10 h-10 mx-6 text-white hover:text-gray-300"><FontAwesomeIcon icon={['fab', 'github']} /></a>
      </Link>
    </footer>
    </>
  )
}