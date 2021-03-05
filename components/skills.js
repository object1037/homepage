import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skill({ name, description, icon}) {
  return (
    <div className="flex flex-col flex-shrink-0 space-y-4 w-44 p-3 m-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="w-8 h-8 mx-auto text-gray-900 dark:text-gray-100"><FontAwesomeIcon icon={['fab', icon]} /></div>
      <h2 className="mx-auto text-lg text-gray-900 dark:text-gray-100">{name}</h2>
      <span className="mx-auto text-base text-gray-900 dark:text-gray-100">{description}</span>
    </div>
  )
}