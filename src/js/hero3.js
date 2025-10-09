import HeroSlider from './slider';

const doc = document.querySelector(".hero3__img-text1");
const docview = document.querySelector(".hero3__view-img")
const docviewBtnClose = document.querySelector(".hero3__btn-close")
const backblur = document.querySelector(".backblur1");
const body = document.querySelector("body");

function visibleDocView(){
        docview.classList.toggle("active");
        docviewBtnClose.classList.toggle("active");
        backblur.classList.toggle("active");
        body.classList.toggle("no_scroll")
    }

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

    doc.addEventListener('click', visibleDocView);
    docviewBtnClose.addEventListener('click', visibleDocView);
});




