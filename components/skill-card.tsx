import { IconName } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface skill {
  name: string;
  icon: IconName;
  description: string;
}

export default function SkillCard(skill: skill) {
  return (
    <div className="flex flex-col flex-shrink-0 w-44 p-3 m-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="w-8 h-8 mx-auto"><FontAwesomeIcon icon={['fab', skill.icon]} /></div>
      <h2 className="mx-auto text-lg mt-3 mb-2">{skill.name}</h2>
      <span className="mx-auto text-base">{skill.description}</span>
    </div>
  )
}