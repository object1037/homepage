const setRandomPosition = (
  container: HTMLElement,
  el: SVGSVGElement,
  obstacle: HTMLElement,
) => {
  const containerRect = container.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  const obstacleRect = obstacle.getBoundingClientRect()

  const topRange = containerRect.height - elRect.height
  const leftRange = containerRect.width - elRect.width

  let top = Math.random() * topRange
  let left = Math.random() * leftRange
  const topOffset = containerRect.top
  const leftOffset = containerRect.left
  let i = 0

  while (
    top + topOffset < obstacleRect.bottom &&
    top + elRect.height + topOffset > obstacleRect.top &&
    left + leftOffset < obstacleRect.right &&
    left + elRect.width + leftOffset > obstacleRect.left &&
    i++ < 5
  ) {
    top = Math.random() * topRange
    left = Math.random() * leftRange
    i++
  }

  el.style.top = `${top}px`
  el.style.left = `${left}px`
  el.style.transitionDelay = '0s'
  el.style.pointerEvents = 'auto'
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
