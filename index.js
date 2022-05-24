
// let menu = document.querySelector('.headeer-nav');
// let menulinks = menu.querySelectorAll('.header-link');

// burger.addEventListener('click',

// function() {
//     burger.classList.toggle('burger--active');
//     menu.classList.toggle('header-nav--active');
//     document.body.classList.toggle('stop-scroll');
    
// })

// menulinks.forEach(function(el){
//     el.addEventListener('click', function() {
//         burger.classList.remove('burger--active');
//         menu.classList.remove('header-nav--active');
//         document.body.classList.remove('stop-scroll')
//     })
// })

const burgermenu = document.querySelector('.burger');
const menuIsActive = () => {
    burgermenu.classList.toggle('active');

};
burgermenu.addEventListener('click', menuIsActive )