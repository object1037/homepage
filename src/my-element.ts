import html from './components/my-element.html?raw'
import css from './styles/my-element.css?inline'
import { render } from './utils/render'

class MyElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    render({ shadow: this.shadowRoot, html, css })
  }
}

customElements.define('my-element', MyElement)
