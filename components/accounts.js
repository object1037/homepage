import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Account ({ account, link, hover }) {
  let accountLow = account.toLowerCase();
  return (
    <Link href={link}>
      <a className={'flex flex-row justify-center space-x-4 md:space-x-0 text-white' + ' ' + hover}>
        <div className="w-8 h-8"><FontAwesomeIcon icon={['fab', accountLow]} /></div>
        <div className="md:my-0 my-auto font-light text-xl md:text-xs md:invisible">{account}</div>
      </a>
    </Link>
  )
}