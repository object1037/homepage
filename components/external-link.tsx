import clsx from 'clsx'

export default function ELink({
  children,
  url,
  bold
}: {
  children: string,
  url: string,
  bold?: boolean,
}) {
  const linkStyle = [
    'text-center',
    'text-ppink',
    'hover:underline'
  ]
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className={clsx(linkStyle, bold ? 'font-bold' : 'font-medium')}>
      {children}
    </a>
  )
}