let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// menu. = ()=>{
//     menu.classList.toogle('bx-x');
//     navlist.classList.toogle('open');
// };

menu.onclick = function(){
    menu.classList.toogle('bx-x');
    navlist.classList.toogle('open');
};
//debugged2!

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:true
});
sr.reveal('.hero-text',{delay:200,origin:'left'});
sr.reveal('.hero-img',{delay:450,origin:'right'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});
