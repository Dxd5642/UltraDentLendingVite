const btn_open_navbar = document.querySelector(".header__menu-mobile");
const header_mobile = document.querySelector('.head2');
const span_btn = document.querySelectorAll(".header_span");
const head = document.querySelector(".head");
const body = document.querySelector("body");


document.addEventListener('DOMContentLoaded', function() {
    btn_open_navbar.addEventListener('click', toggleNavbar);
});


function toggleNavbar() {
    if (window.innerWidth <= 1068) {
        header_mobile.classList.toggle('active');
        span_btn.forEach(i => {i.classList.toggle("active")});
        btn_open_navbar.classList.toggle('active');
        body.classList.toggle('open-navbar');
    }
}

if (window.matchMedia("(max-width: 768px)").matches && ('ontouchstart' in window || navigator.maxTouchPoints > 0)){
    window.addEventListener("scroll", () => {setTimeout(() => {head.classList.add("scroll")}, 200)})
    window.addEventListener("scrollend", () => {setTimeout(() => {head.classList.remove("scroll")}, 200)})
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (targetElement.getAttribute("id") == "hero1"){
                smoothScrollTo(targetElement, 1500, 0);
            }
            else{
                smoothScrollTo(targetElement, 1500, 100);
            }
        }
    });
});

function smoothScrollTo(target, duration = 1500, offset = 100) {
    const targetPosition = target.offsetTop - offset; 
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


const btnDepartment = document.querySelector(".frag1__main-div__departments");

if (window.matchMedia("(min-width: 1080px)").matches){
    window.addEventListener("scroll", () => {setTimeout(() => {btnDepartment.classList.add("scroll")}, 200)})
    window.addEventListener("scrollend", () => {setTimeout(() => {btnDepartment.classList.remove("scroll")}, 200)})
}

export default toggleNavbar;

const mobileHeaderBtns = header_mobile.querySelectorAll(".header__div2__btn");
mobileHeaderBtns.forEach(btn => {
    btn.addEventListener('click', toggleNavbar)
});