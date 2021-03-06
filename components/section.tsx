import SectionTitle from './section-title'

export default function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col pt-2">
      <SectionTitle title={title} />
      <div className="py-10 flex flex-col justify-center">{children}</div>
    </section>
  )
}