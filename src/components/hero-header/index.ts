import { render } from '../../utils/render'
import html from './index.html?raw'
import css from './style.css?inline'

export class HeroHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    render({ shadow: this.shadowRoot, html, css })
    if (this.hasAttribute('notransition')) {
      return
    }
    setTimeout(
      () => {
        this.classList.add('ready')
      },
      Number.parseInt(this.getAttribute('delay') ?? '0'),
    )
  }
}
