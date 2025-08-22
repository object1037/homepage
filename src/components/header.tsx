import Icon from './icon'

export default function Header({ heading }: { heading: string }) {
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: component will be rendered one time
    <header id="transition">
      <div className="container">
        <a className="icon" href="/">
          <Icon />
        </a>
        <h1>{heading}</h1>
      </div>
    </header>
  )
}
