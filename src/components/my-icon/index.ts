import { render } from '../../utils/render'
import html from './index.html?raw'

export class MyIcon extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    render({ shadow: this.shadowRoot, html })
  }
}
