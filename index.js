const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.primary-nav')
const hamburger= document.querySelector('.hamburger')

toggle.addEventListener('click', function(e) {
    e.preventDefault()
    nav.classList.toggle('open')
    hamburger.classList.toggle('open')
})
