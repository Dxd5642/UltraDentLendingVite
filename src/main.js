import './scss/index.scss';

const header_mobile = document.querySelector('.head2');
const btn_open_navbar = document.querySelector(".header__menu-mobile");
const menu_icon = document.querySelector(".header__menu-mobile-img");
const span_btn = document.querySelectorAll(".header_span")

document.addEventListener('DOMContentLoaded', function() {
    btn_open_navbar.addEventListener('click', toggleNavbar);
});

function toggleNavbar() {
    if (window.innerWidth <= 1000) {
        header_mobile.classList.toggle('active');
        span_btn.forEach(i => {i.classList.toggle("active")})
        btn_open_navbar.classList.toggle('active')
    }
}


const call = document.getElementsByClassName("header__div3__img")[0]
console.log(call)
call.addEventListener('click', () => {
  window.open('https://i.pinimg.com/originals/2a/b0/57/2ab057f4c2b62828c0ad110f77d02628.jpg', '_blank');
});
