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
      className="border-b border-[#c3c3c8] hover:border-gray-800 transition"
    >
      {children}
    </a>
  )
}
