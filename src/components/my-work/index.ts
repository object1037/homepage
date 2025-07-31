import { render } from '../../utils/render'
import html from './index.html?raw'
import css from './style.css?inline'

export class MyWork extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    render({ shadow: this.shadowRoot, html, css })

    const href = this.getAttribute('href') ?? ''
    const fallbackImgUrl = `/images/${this.getAttribute('img') ?? ''}`
    const imgUrl = fallbackImgUrl.replace(/\.[^\.]+$/, '.webp')
    const width = this.getAttribute('w') ?? ''
    const height = this.getAttribute('h') ?? ''

    const anchor = shadow.querySelector('a')
    const source = shadow.querySelector('source')
    const img = shadow.querySelector('img')

    anchor?.setAttribute('href', href)
    source?.setAttribute('srcset', imgUrl)
    img?.setAttribute('src', fallbackImgUrl)
    img?.setAttribute('width', width)
    img?.setAttribute('height', height)
  }
}
