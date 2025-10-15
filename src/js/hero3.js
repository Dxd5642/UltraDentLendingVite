import HeroSlider from './slider';

const body = document.querySelector("body");


document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(max-width: 360px)").matches){
        new HeroSlider(
            document.querySelector(".hero3__diploma-mblock"),
            document.querySelector(".hero3__diploma-block"),
            document.querySelectorAll(".hero3__diploma_eff"),
            document.querySelector(".hero3__btn-slider_left"),
            document.querySelector(".hero3__btn-slider_right"),
            33.9,
            false,
            false,
            2,
        );
    }

    else if (window.matchMedia("(max-width: 390px)").matches){
        new HeroSlider(
            document.querySelector(".hero3__diploma-mblock"),
            document.querySelector(".hero3__diploma-block"),
            document.querySelectorAll(".hero3__diploma_eff"),
            document.querySelector(".hero3__btn-slider_left"),
            document.querySelector(".hero3__btn-slider_right"),
            33.7,
            false,
            false,
            2,
        );
    }

    else if (window.matchMedia("(max-width: 1150px)").matches){
        new HeroSlider(
            document.querySelector(".hero3__diploma-mblock"),
            document.querySelector(".hero3__diploma-block"),
            document.querySelectorAll(".hero3__diploma_eff"),
            document.querySelector(".hero3__btn-slider_left"),
            document.querySelector(".hero3__btn-slider_right"),
            34,
            false,
            false,
            2,
        );
    }

    else if (window.matchMedia("(max-width: 1380px)").matches){
        new HeroSlider(
            document.querySelector(".hero3__diploma-mblock"),
            document.querySelector(".hero3__diploma-block"),
            document.querySelectorAll(".hero3__diploma_eff"),
            document.querySelector(".hero3__btn-slider_left"),
            document.querySelector(".hero3__btn-slider_right"),
            25,
            false,
            false,
            1,
        );
    }
});


//------------------

const backblur5 = document.querySelector(".backblur5");
const diplomasItems = document.querySelectorAll(".hero3__diploma-img-slid");
const diplomBtnClose = document.querySelector('.modal__btn-close');
const diplomWidget = document.querySelector('.modal__view-document');
const diplomOpenBtnNext = document.querySelector('.modal__btn-slider_right');
const diplomOpenBtnBack = document.querySelector('.modal__btn-slider_left');
const diplomView = document.querySelector('.modal__document');
const diplomImages = [
    "./src/assets/images/docView.png",
    "./src/assets/images/diploms/img1.png",
    "./src/assets/images/diploms/img2.png",
    "./src/assets/images/diploms/img3.png",
    "./src/assets/images/diploms/img4.png",
    "./src/assets/images/diploms/img5.png",
]
let diplomViewIndex = 0;

diplomasItems.forEach( (item, index) => {

    item.addEventListener('click', () => {
        
        diplomViewIndex = index;
        backblur5.classList.toggle("active");
        body.classList.toggle("no_scroll");
        diplomView.style = `background-image: url(${diplomImages[diplomViewIndex]})`;
        diplomWidget.classList.toggle("active");
        
    })
    
});

diplomBtnClose.addEventListener('click', () => {

    diplomWidget.classList.toggle("active");
    backblur5.classList.toggle("active");
    body.classList.toggle("no_scroll");
})

diplomOpenBtnNext.addEventListener ('click', () => {
    if(diplomViewIndex >= 0 && diplomViewIndex < diplomImages.length - 1) {
        diplomViewIndex++;
        diplomView.style = `background-image: url(${diplomImages[diplomViewIndex]})`
        
        
    }
})

diplomOpenBtnBack.addEventListener ('click', () => {
    if(diplomViewIndex >= 1 && diplomViewIndex < diplomImages.length) {
        diplomViewIndex--;
        diplomView.style = `background-image: url(${diplomImages[diplomViewIndex]})`
        
        
    }
})