import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Account ({ account, link, hover }) {
  return (
    <Link href={link}>
      <a className={'justify-center text-white' + ' ' + hover}>
        <div className="w-8 h-8"><FontAwesomeIcon icon={['fab', account]} /></div>
      </a>
    </Link>
  )
}