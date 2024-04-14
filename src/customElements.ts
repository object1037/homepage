import { HeroHeader } from './components/hero-header'
import { MyFooter } from './components/my-footer'

// Test FOUC
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// await sleep(2000)

customElements.define('hero-header', HeroHeader)
customElements.define('my-footer', MyFooter)

Promise.all([
  customElements.whenDefined('hero-header'),
  customElements.whenDefined('my-footer'),
]).then(() => {
  document.body.classList.add('ready')
  setTimeout(() => {
    document.querySelector('hero-header')?.classList.add('ready')
  }, 1000)
})
