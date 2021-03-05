import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Account ({ account, link, hover }) {
  let accountLow = account.toLowerCase();
  return (
    <Link href={link}>
      <a className={'flex flex-row justify-center space-x-6 text-white' + ' ' + hover}>
        <div className="w-10 h-10"><FontAwesomeIcon icon={['fab', accountLow]} /></div>
        <div className="my-auto text-2xl">{account}</div>
      </a>
    </Link>
  )
}