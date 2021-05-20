import SectionTitle from './section-title'

export default function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col">
      <SectionTitle title={title} />
      <div className="py-10">{children}</div>
    </section>
  )
}