/*-------------Show Menu----------*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu('nav__toggle', 'nav__menu');

/*--------remove menu mobile-------*/

const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*------SCROLL SECtion Active LINK-----*/

const section = document.querySelectorAll('section[id]');
function scrollActive(){
  const scrollY = window.pageYOffset
  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + '] ').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + '] ').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*----------------Change  Background Header----------------*/

// function scrollHeader(){
//   const header = document.getElementById('header')
//   if (this.scrollY >= 200)
//     header.classList.add('scroll-header'); else header.classList.remove('scroll-header');

// }
// window.addEventListener('scroll', scrollHeader);

/*----------------Show Scroll Top----------------*/

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 560)
    scrollTop.classList.add('show-scroll');

  else
    scrollTop.classList.remove('show-scroll');

}
window.addEventListener('scroll', scrollTop)

// -----------MIXITUP Filter- ---------------//
const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});

/*--------------Link active Portfolio------------------*/

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
  if(linkAction){
    linkPortfolio.forEach(l => 1 .classList.remove('active-portfolio') )
    this.classList.add('active-portfolio')
  }
}
linkPortfolio.forEach(l =>1 .addEventListener('click', activePortfolio) )


// -----------Swiper ----------//



/*===========GSAP JS+++++++++++++*/

