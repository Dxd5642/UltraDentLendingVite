const btn_open_navbar = document.querySelector(".header__menu-mobile");
const header_mobile = document.querySelector('.head2');
const span_btn = document.querySelectorAll(".header_span")
const head = document.querySelector(".head")


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


export default toggleNavbar;