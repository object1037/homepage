import { HeroHeader } from './components/hero-header'
import { MyFooter } from './components/my-footer'
import { MyIcon } from './components/my-icon'
import { MyWork } from './components/my-work'

// Test FOUC
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// await sleep(2000)

customElements.define('hero-header', HeroHeader)
customElements.define('my-footer', MyFooter)
customElements.define('my-icon', MyIcon)
customElements.define('my-work', MyWork)

Promise.all([
  customElements.whenDefined('hero-header'),
  customElements.whenDefined('my-footer'),
  customElements.whenDefined('my-icon'),
  customElements.whenDefined('my-work'),
]).then(() => {
  document.body.classList.add('ready')
})

const colorScheme = window.matchMedia('(prefers-color-scheme: light)')
const setColors = () => {
  document.documentElement.style.setProperty('--bg', '#fff5f6')
  document.documentElement.style.setProperty('--fill', '#ffbac1')
}
const removeColors = () => {
  document.documentElement.style.removeProperty('--bg')
  document.documentElement.style.removeProperty('--fill')
}

if (colorScheme.matches && Math.random() < 0.1) {
  setColors()
  console.log('🍀Lucky!')
  colorScheme.addEventListener('change', (e) => {
    if (!e.matches) {
      removeColors()
    } else {
      setColors()
    }
  })
}
