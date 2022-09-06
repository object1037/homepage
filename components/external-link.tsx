import clsx from 'clsx'

export default function ELink({
  children,
  url,
  bold,
}: {
  children: string
  url: string
  bold?: boolean
}) {
  const linkStyle = [
    'text-center',
    'text-ppink-300',
    'dark:text-ppink-200',
    'hover:underline',
  ]
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(linkStyle, bold ? 'font-bold' : 'font-medium')}
    >
      {children}
    </a>
  )
}
