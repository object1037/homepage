import { render } from '../../utils/render'
import html from './index.html?raw'
import css from './style.css?inline'

export class MyFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    render({ shadow: this.shadowRoot, html, css })
  }
}
