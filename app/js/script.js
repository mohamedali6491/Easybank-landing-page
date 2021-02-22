const btn_menu = document.querySelector("#btn_menu");
const body=document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btn_menu.addEventListener("click", function () {
    if (header.classList.contains('open')) {// close the menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElems.forEach(function (elment) {
            elment.classList.remove('fade-in');
            elment.classList.add('fade-out');
        });

    }
    else { // open the menu
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElems.forEach(function (elment) {
            elment.classList.remove('fade-out');
            elment.classList.add('fade-in');
            
        });

    }
});