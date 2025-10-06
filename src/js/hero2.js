import HeroSlider from './slider';

document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider(
        document.querySelector('.hero2__slider'), 
        document.querySelector('.hero2__slides'), 
        document.querySelectorAll('.hero2__slide'),
        document.querySelector('.hero2__btn-slider_left'),
        document.querySelector('.hero2__btn-slider_right'),
        100,
        true,
    );
});

document.addEventListener("DOMContentLoaded", () => {
    new HeroSlider(
        document.querySelector(".hero2__choice-doctor"),
        document.querySelector(".hero2__doctor-block"),
        document.querySelectorAll(".doctor"),
        document.querySelector(".hero2__btn-slider_left-d"),
        document.querySelector(".hero2__btn-slider_right-d"),
        33.3,
        false,
        document.querySelectorAll(".hero2__blocks-doctors")
    );
});