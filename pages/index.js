import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>object_1037</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="justify-center object-none flex-shrink flex items-center mb-2 mt-4">
        <div className="flex justify-center content-center rounded-full border-solid border-2 border-gray-300">
          <Image priority src="/images/profile.jpg" alt="my profile picture" width="200" height="200" className="rounded-full" /> 
        </div>
      </div>
      <h1 className="font-sans font-bold text-center text-4xl m-2">object_1037</h1>
    </div>
  )
}