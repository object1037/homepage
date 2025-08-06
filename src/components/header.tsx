import Icon from './icon'

export default function Header({ heading }: { heading: string }) {
  return (
    <header>
      <div className="container">
        <a className="icon" href="/">
          <Icon />
        </a>
        <h1>{heading}</h1>
      </div>
    </header>
  )
}
