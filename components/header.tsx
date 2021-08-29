import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'

export default function Header() {
  return (
    <header className="px-6 sm:px-12 border-b border-gray-300 dark:border-gray-600 py-7">
      <div className="max-w-5xl mx-auto flex flex-row justify-center md:justify-start items-center space-x-4 md:space-x-10">
        <div className="rounded-full shadow-xl w-16 h-16 md:w-24 md:h-24 overflow-hidden">
          <Image priority src={profilePic} alt="my profile picture" className="rounded-full" placeholder="blur" /> 
        </div>
        <h1 className="font-bold text-3xl md:text-4xl m-2">object1037</h1>
      </div>
    </header>
  )
}