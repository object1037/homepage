const setRandomPosition = (
  container: HTMLElement,
  el: SVGSVGElement,
  obstacle: HTMLElement,
) => {
  const bodyPad = 32

  const containerRect = container.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  const obstacleRect = obstacle.getBoundingClientRect()

  const topRange = containerRect.height - elRect.height
  const leftRange = containerRect.width - elRect.width

  let top = Math.random() * topRange
  let left = Math.random() * leftRange
  let i = 0

  while (
    top + bodyPad < obstacleRect.bottom &&
    top + elRect.height + bodyPad > obstacleRect.top &&
    left + bodyPad < obstacleRect.right &&
    left + elRect.width + bodyPad > obstacleRect.left &&
    i++ < 5
  ) {
    top = Math.random() * topRange
    left = Math.random() * leftRange
    i++
  }

  el.style.top = `${top}px`
  el.style.left = `${left}px`
  el.style.transitionDelay = '0s'
}

export const randomPosition = (
  container: HTMLElement | null,
  el: SVGSVGElement | null,
  obstacle: HTMLElement | null,
) => {
  if (!el || !container || !obstacle) return

  let timeoutID: NodeJS.Timeout

  window.addEventListener('resize', () => {
    setRandomPosition(container, el, obstacle)
  })
  el.addEventListener('mouseenter', () => {
    clearTimeout(timeoutID)
  })
  el.addEventListener('mouseleave', () => {
    timeoutID = setTimeout(() => {
      setRandomPosition(container, el, obstacle)
    }, 2000)
  })
  setRandomPosition(container, el, obstacle)
}
