// =========== Show and Hidden List Toggle==============
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show__menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show__menu')
    })
}

// ===== when you click "list nav(home...) off nav__menu" =====
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu =document.getElementById('nav-menu')

    navMenu.classList.remove('show__menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

// ============ CHANGE BACKGROUND HEADER ==============
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll__header');
    else header.classList.remove('scroll__header')
}
window.addEventListener('scroll', scrollHeader)


//Show and Hide Scroll Back Home
function scrollBackHome(){
    const scrollHome = document.getElementById('scroll-up');

    if(this.scrollY >= 500) scrollHome.classList.add('show__scroll');
    else scrollHome.classList.remove('show__scroll');
}
window.addEventListener('scroll', scrollBackHome)

// Scroll Setion active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY> sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active__link');
        }
        else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active__link');

        }
    })
}
window.addEventListener('scroll', scrollActive)

// Reveral Scroll Animation
const sr = ScrollReveal({
    distance: '60px',
    duaration: 2500,
    delay: 400,
    // reset: true 
})

sr.reveal(`.home__header, .section__title` , {delay: 600})
sr.reveal(`.home__footer` , {delay: 700})
sr.reveal(`.home__img` , {delay: 1000, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo` , {delay: 500, origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate, .footer__content` , { origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img` , { origin: 'right'})

sr.reveal(`.case__img` , { origin: 'top'})
sr.reveal(`.case__data , .footer__copy` , { origin: 'bottom'})






