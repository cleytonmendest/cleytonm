// MENU MOBILE DISPLAY
const btnMobi = document.querySelector('.btn-mobile');
const nav = document.querySelector('.nav');
const ul = document.querySelector('ul');

const btnToggle = ()=>{
    nav.classList.toggle('active');
}

btnMobi.addEventListener('click', btnToggle);
ul.addEventListener('click', btnToggle);




