const menuBtn = document.querySelector('.menu-btn')
const navMenu = document.querySelector('.nav-menu')

menuBtn.addEventListener('click', () => {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none'
  } else navMenu.style.display = 'block'
})

document.addEventListener('mouseup', (event) => {
  if (navMenu.style.display === 'block') {
    if (!menuBtn.contains(event.target)) navMenu.style.display = 'none'
  }
})
