import css from './my-element.css?inline'
import { styledHtml } from './utils/html'

class MyElement extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.render()
  }
  render() {
    if (!this.shadowRoot) return
    this.shadowRoot.innerHTML = styledHtml(css, `
    <p>Hello,Vanilla</p>
    <slot></slot>
    `)
  }
}

customElements.define('my-element', MyElement)
