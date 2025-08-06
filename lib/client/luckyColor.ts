export const setLuckyColor = () => {
  const colorScheme = window.matchMedia('(prefers-color-scheme: light)')
  const setColors = () => {
    document.documentElement.style.setProperty('--bg', '#fff5f6')
    document.documentElement.style.setProperty('--hair-opacity', '1')
  }
  const removeColors = () => {
    document.documentElement.style.removeProperty('--bg')
    document.documentElement.style.removeProperty('--hair-opacity')
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
}
