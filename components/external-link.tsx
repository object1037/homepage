import clsx from 'clsx'

export default function ELink({
  children,
  url,
  className
}: {
  children: string,
  url: string,
  className?: string
}) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className={clsx(
      'text-center',
      'mx-auto',
      'text-blue-500',
      'dark:text-blue-300',
      'hover:underline',
      [className]
    )}>{children}</a>
  )
}