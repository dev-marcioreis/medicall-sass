const navbar = document.getElementById('nav__items')
const openBtm = document.querySelector('#open__nav-btn')
const closeBtn = document.querySelector('#close__nav-btn')

openBtm.addEventListener('click', () => {
    navbar.style.display = 'flex'
    openBtm.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeNav = () => {
    navbar.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtm.style.display = 'inline-block'
}

closeBtn.addEventListener('click', closeNav)

if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navbar => {
        navbar.addEventListener('click', () => {
            closeNav()
        })
    })
}

