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
      className="border-b border-gray-300 hover:border-gray-600 transition"
    >
      {children}
    </a>
  )
}
