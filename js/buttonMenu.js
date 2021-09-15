const buttonMenu = document.querySelector(".header__button")
const menu = document.querySelector(".header__nav")

menu.classList.remove('visible')
const hideShow = ()=>(
    menu.classList.toggle('visible')
)
buttonMenu.addEventListener("click", hideShow)