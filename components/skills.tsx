import { IconName } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface skill {
  name: string;
  icon: IconName;
  description: string;
}

export default function Skill(skill: skill) {
  return (
    <div className="flex flex-col flex-shrink-0 space-y-4 w-44 p-3 m-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="w-8 h-8 mx-auto text-gray-900 dark:text-gray-100"><FontAwesomeIcon icon={['fab', skill.icon]} /></div>
      <h2 className="mx-auto text-lg text-gray-900 dark:text-gray-100">{skill.name}</h2>
      <span className="mx-auto text-base text-gray-900 dark:text-gray-100">{skill.description}</span>
    </div>
  )
}