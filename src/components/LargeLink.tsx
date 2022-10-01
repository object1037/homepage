export const LargeLink = ({
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
      className="text-3xl p-3 sm:p-4 hover:text-gray-400 transition"
    >
      {children}
    </a>
  )
}
