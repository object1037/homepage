import clsx from 'clsx'
import Icon from './icon'
import { useEffect, useState } from 'react'

export default function Header() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  const headerStyle = [
    'px-6',
    'sm:px-12',
    'py-4',
    'border-b',
    'border-gray-100',
    'dark:border-gray-800',
    'sticky',
    'top-0',
    'bg-white',
    'dark:bg-gray-900',
    'bg-opacity-60',
    'dark:bg-opacity-60',
    'backdrop-filter',
    'backdrop-blur-md'
  ]
  return (
    <header className={clsx(headerStyle)}>
      <div className="sticky top-0 max-w-5xl mx-auto flex flex-row justify-start items-center space-x-4">
        <div className={clsx(loaded && 'bg-[#fff5f6]', 'w-[4.8rem] h-[4.8rem] rounded-full transition duration-1000 delay-300')}>
          <Icon className={clsx(loaded && 'fill-[#ffbac1] stroke-black', "w-16 h-16 m-[0.4rem] fill-transparent transition duration-1000 delay-300")}/>
        </div>
        <h1 className="font-semibold text-2xl m-2">object1037</h1>
      </div>
    </header>
  )
}