const header = document.querySelector('header')
if (header) {
  // header.addEventListener('click', () => {
  //   header.classList.toggle('end')
  // })
  setTimeout(() => {
    header.classList.add('end')
  }, 1000)
}
