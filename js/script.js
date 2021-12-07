const button = document.querySelector('.menu-icon')
const nav = document.querySelector('.header__nav-menu')
const menu = document.querySelector('.header__nav-list')

button.addEventListener('click', presentation)
menu.addEventListener('click', li)

function presentation() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    } else {
        nav.classList.add('active')
    }
}

function li() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    } else {
        nav.classList.add('active')
    }
}