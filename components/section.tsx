export default function Section({
  title,
  children
}: {
  title: string | JSX.Element
  children?: React.ReactNode
}) {
  return (
    <section className="flex flex-col pt-2 max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold">{title}</h2>
      {children && <div className="py-10 flex flex-col justify-start">{children}</div>}
    </section>
  )
}