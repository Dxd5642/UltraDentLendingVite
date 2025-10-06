const body = document.querySelector("body")
const head = document.querySelector(".head")
const preloader = document.getElementById('preloader');

const hero1DoctorCardImage = document.querySelector('.doctor-card__image');
const hero1DoctorCardContent = document.querySelector(".doctor-card__content");


body.classList.remove('loaded');
head.classList.remove('loaded')


window.addEventListener('load', function() {
    requestAnimationFrame(() => {
        setTimeout(() => {
            body.classList.add('loaded');
            head.classList.add('loaded');

            hero1DoctorCardImage.classList.add("loaded")
            hero1DoctorCardContent.classList.add("loaded")
            preloader.classList.add('hidden');
            
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 500); 
    });
});
