
const buttonMenu = document.querySelector('.header__menu')
const navMobile = document.querySelector('.navbar-mobile')
const navMobileList = document.querySelector('.navbar-mobile__list')


const openMenu = () => {
    navMobile.classList.toggle('navbar-mobile_open')
    navMobileList.classList.toggle('navbar-mobile__list_open')
    buttonMenu.classList.toggle('header__menu_active')
}


buttonMenu.addEventListener('click',openMenu )

