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
      className="border-b"
    >
      {children}
    </a>
  )
}
