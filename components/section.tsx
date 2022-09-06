import clsx from 'clsx'

export default function Section({
  title,
  children,
}: {
  title: string | JSX.Element
  children?: React.ReactNode
}) {
  const sectionStyle = ['px-6', 'sm:px-12', 'py-12', 'sm:py-16']
  const wrapperStyle = [
    'max-w-4xl',
    'mx-auto',
    'flex',
    'flex-col',
    'space-y-10',
  ]

  return (
    <section className={clsx(sectionStyle)}>
      <div className={clsx(wrapperStyle)}>
        <h2 className="text-4xl font-bold">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
