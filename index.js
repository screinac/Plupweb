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

//Set date on footer
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()

const navbar = document.querySelector('header')

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-header')
  } else {
    navbar.classList.remove('fixed-header')
  }
})

const navLinks = document.querySelectorAll('.nav-link:not(.home)')

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(2)
    const element = document.getElementById(id)

    const navHeight = navbar.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-header')
    let position = element.offsetTop - navHeight

    if (!fixedNav) position = position - navHeight

    window.scrollTo({
      left: 0,
      top: position,
    })
  })
})
