export const Link = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="border-b border-gray-350 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-200 transition"
    >
      {children}
    </a>
  )
}
