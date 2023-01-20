const navbar = document.getElementById('nav__items')
const openBtm = document.querySelector('#open__nav-btn')
const closeBtn = document.querySelector('#close__nav-btn')

openBtm.addEventListener('click', () => {
    navbar.style.display = 'flex'
    openBtm.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', () => {
    navbar.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtm.style.display = 'inline-block'
})

navbar.addEventListener('click', () => {
    navbar.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtm.style.display = 'block'
})