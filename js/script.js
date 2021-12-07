const button = document.querySelector('.menu-icon')
const nav = document.querySelector('.header__nav-menu')

button.addEventListener('click', presentation)

function presentation() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    } else {
        nav.classList.add('active')
    }
    if (nav.classList.contains('active')) {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }}
    
    