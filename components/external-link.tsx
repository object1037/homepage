import clsx from 'clsx'

export default function ELink({
  children,
  url,
  className,
}: {
  children: string,
  url: string,
  className?: string,
}) {
  const linkStyle = [
    'text-center',
    'mx-auto',
    'text-blue-500',
    'dark:text-blue-300',
    'hover:underline'
  ]
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className={clsx(linkStyle, [className])}>
      {children}
    </a>
  )
}