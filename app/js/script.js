const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header') 
const overlay = document.querySelector('.overlay');
const menuItemsMobile = document.querySelector('.header__menu');

btnHamburger.addEventListener('click',function(){
    body.classList.toggle('no-scroll')
    header.classList.toggle('open')
    overlay.classList.toggle('fade-in')
    overlay.classList.toggle('fade-out',!overlay.classList.contains('fade-in'))
    menuItemsMobile.classList.toggle('fade-in')
    menuItemsMobile.classList.toggle('fade-out',!menuItemsMobile.classList.contains('fade-in'))
    menuItemsMobile.classList.toggle('has-fade',!menuItemsMobile.classList.contains('fade-in'))
}) 