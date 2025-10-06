import HeroSlider from './slider';



if (window.matchMedia("(max-width: 360px)").matches){
    document.addEventListener("DOMContentLoaded", () => {
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
    });
}

else if (window.matchMedia("(max-width: 390px)").matches){
    document.addEventListener("DOMContentLoaded", () => {
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
    });
}

else if (window.matchMedia("(max-width: 1150px)").matches){
    document.addEventListener("DOMContentLoaded", () => {
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
    });
}

else if (window.matchMedia("(max-width: 1380px)").matches){
    document.addEventListener("DOMContentLoaded", () => {
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
    });
}