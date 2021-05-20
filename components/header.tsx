import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 dark:bg-gray-800 py-8">
      <div className="flex rounded-full shadow-xl">
        <Image priority src="/images/profile.jpg" alt="my profile picture" width={200} height={200} className="rounded-full" /> 
      </div>
      <h1 className="font-sans font-bold text-4xl m-2 text-gray-900 dark:text-gray-100 min-h-full">object1037</h1>
    </header>
  )
}