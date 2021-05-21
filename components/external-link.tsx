import clsx from 'clsx'

export default function ELink({
  children,
  url,
  className
}: {
  children: string,
  url: string,
  className: string
}) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className={clsx(
      'text-center',
      'mx-auto',
      'text-Blue-500',
      'dark:text-Blue-300',
      'hover:underline',
      [className]
    )}>{children}</a>
  )
}