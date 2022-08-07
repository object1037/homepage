import clsx from 'clsx'
import Icon from './icon'

export default function Header() {
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
        <Icon className="w-16 h-16" /> 
        <h1 className="font-semibold text-2xl m-2">object1037</h1>
      </div>
    </header>
  )
}