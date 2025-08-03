const colorScheme = window.matchMedia('(prefers-color-scheme: light)')
const setColors = () => {
  document.documentElement.style.setProperty('--bg', '#fff5f6')
  document.documentElement.style.setProperty('--hair', '#ffbac1')
}
const removeColors = () => {
  document.documentElement.style.removeProperty('--bg')
  document.documentElement.style.removeProperty('--hair')
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

const header = document.querySelector('header')
if (header) {
  // header.addEventListener('click', () => {
  //   header.classList.toggle('end')
  // })
  setTimeout(() => {
    header.classList.add('end')
  }, 1000)
}
