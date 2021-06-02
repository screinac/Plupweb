const exitBtn = document.querySelector('.exit-btn')
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
  nav.style.transform = 'translateX(0)'
})

exitBtn.addEventListener('click', () => {
  nav.style.transform = 'translateX(100%)'
})

var d = new Date()
page.currentYear = d.getFullYear()
