
const menu = document.querySelector('#menu-icon') // targetting the entire icon
const menuLinks = document.querySelector('.nav__menu')
const navTitle = document.querySelector('#nav__title')


// function to display mobile menu
// we want to trigger .active and is-active in CSS
const menuOptions = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', menuOptions);

// show active menu when scrolling (underline in the navbar)
// target all of the menu
const highlightMenu = () => {
const elem = document.querySelector('.scroll')
const homeMenu = document.querySelector('#home-page')
const aboutMenu = document.querySelector('#about-page')
const projectsMenu = document.querySelector('#projects-page')

// scroll position that shows where we are actually positioned at
let scrollPos = window.scrollY

// add the scroll class to menu items
if (window.innerWidth > 960 && scrollPos < 550) {
    homeMenu.classList.add('scroll') 
    aboutMenu.classList.remove('scroll') 
    return 
} else if (window.innerWidth > 960 && scrollPos < 1200) {
    aboutMenu.classList.add('scroll')
    homeMenu.classList.remove('scroll')
    projectsMenu.classList.remove('scroll')
    return
} else if (window.innerWidth > 960 && scrollPos < 2400) {
aboutMenu.classList.remove('scroll')
projectsMenu.classList.add('scroll')
return
}

if ((elem && window.innerWidth < 960 && scrollPos < 550) || elem) {
    elem.classList.remove('scroll');
}
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// remove the drop down menu as soon as an option
const hideDropDown = () => {
    const menuOptions = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuOptions) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideDropDown)
navTitle.addEventListener('click', hideDropDown)