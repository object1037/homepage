export const setTransition = (ms: number) => {
  const header = document.getElementById('transition')
  if (header) {
    setTimeout(() => {
      header.classList.add('end')
    }, ms)
  }
}
