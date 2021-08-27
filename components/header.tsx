import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 dark:bg-gray-800 py-8">
      <div className="rounded-full shadow-2xl w-48 h-48">
        <Image priority src={profilePic} alt="my profile picture" className="rounded-full" /> 
      </div>
      <h1 className="font-bold text-4xl m-2">object1037</h1>
    </header>
  )
}