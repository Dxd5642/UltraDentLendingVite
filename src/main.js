import './scss/index.scss';

const body = document.querySelector("body")
const head = document.querySelector(".head")
const preloader = document.getElementById('preloader');


body.classList.remove('loaded');
head.classList.remove('loaded')


window.addEventListener('load', function() {
    requestAnimationFrame(() => {
        setTimeout(() => {
            body.classList.add('loaded');
            head.classList.add('loaded');
            preloader.classList.add('hidden');
            
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1500); 
    });
});




const menu_icon = document.querySelector(".header__menu-mobile-img");
const btn_open_navbar = document.querySelector(".header__menu-mobile");
const header_mobile = document.querySelector('.head2');
const span_btn = document.querySelectorAll(".header_span")

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

const btn_departments = document.querySelector(".frag1__main-div__departments");
const btn_departments_gen = document.querySelector('.depart-gen')
const map_departments__btn_close = document.querySelector(".map-departments__btn-close")
const backblur = document.querySelector(".backblur");
const map_departments = document.querySelector(".map-departments");

const map_departments__map = document.querySelector(".map-departments__map")
const map_departments__title = document.querySelector(".map-departments__title")
const map_departments__time = document.querySelector(".map-departments__time")
const map_departments__btn = document.querySelectorAll(".map-departments__btn")


document.addEventListener('DOMContentLoaded', function() {
    btn_departments.addEventListener('click', open_map_departments);
});

document.addEventListener('DOMContentLoaded', function() {
    btn_departments_gen.addEventListener('click', open_map_departments);
});

document.addEventListener('DOMContentLoaded', function() {
    btn_departments_gen.addEventListener('click', toggleNavbar);
});

document.addEventListener('DOMContentLoaded', function() {
    map_departments__btn_close.addEventListener('click', open_map_departments);
});

function open_map_departments(){
    backblur.classList.toggle("active");
    map_departments.classList.toggle("active");

    map_departments__map.classList.toggle("active")
    map_departments__title.classList.toggle("active")
    map_departments__time.classList.toggle("active")
    map_departments__btn.forEach(i => {i.classList.toggle('active')})
    map_departments__btn_record.classList.remove("active")
    map_departments__btn_record_txt.classList.remove("active")

    body.classList.toggle("no_scroll")
}

const map_departments__btn1 = document.querySelector(".map-departments__btn-1")
const map_departments__btn2 = document.querySelector(".map-departments__btn-2")
const map_departments__btn3 = document.querySelector(".map-departments__btn-3")
const map_departments__btn_record = document.querySelector(".map-departments__btn-record")
const map_departments__btn_record_txt = document.querySelector(".map-departments__btn-record-txt")

document.addEventListener('DOMContentLoaded', function() {
    map_departments__btn1.addEventListener('click', () => choise_department(1));
});

document.addEventListener('DOMContentLoaded', function() {
    map_departments__btn2.addEventListener('click', () => choise_department(2));
});

document.addEventListener('DOMContentLoaded', function() {
    map_departments__btn3.addEventListener('click', () => choise_department(3));
});


function choise_department(num){
    let txt = ''
    switch(num){
        case 1: txt = 'Широтную'; break;
        case 2: txt = 'Челюскинцев'; break;
        case 3: txt = 'Республике'; break;
        default: break;
    }
    map_departments__btn_record_txt.classList.add("active")
    map_departments__btn_record.classList.add("active")
    map_departments__btn_record_txt.innerHTML = `Записаться на прием на ${txt}`
}


class HeroSlider {
    constructor(slider, track, slides, prevBtn, nextBtn, width, isDragable = true, slider2 = null, num_available_scrolling = Infinity) {
        this.slider = slider;
        this.track = track;
        this.slides = slides;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.width = width
        this.currentIndex = 0;
        this.isDragable = isDragable;
        this.slider2 = slider2
        
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        this.num_available_scrolling = num_available_scrolling;
        this.num_scrolling = 0
        
        this.init();
    }
    
    init() {
        
        if (this.slider2) {
        this.slider2.forEach((frame, index) => {
            frame.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
    }
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        if(this.isDragable){
            
            this.slider.addEventListener('mousedown', this.startDrag.bind(this));
            document.addEventListener('mousemove', this.drag.bind(this));
            document.addEventListener('mouseup', this.endDrag.bind(this));
            
            this.slider.addEventListener('touchstart', this.startDrag.bind(this));
            this.slider.addEventListener('touchmove', this.drag.bind(this));
            this.slider.addEventListener('touchend', this.endDrag.bind(this));
            
            this.slider.addEventListener('dragstart', (e) => e.preventDefault());
        }
        
        this.updateSlider();
    }

    changeCurrentX(newValue){
        this.currentX = newValue;
    }
    
    startDrag(e) {
        if (!this.isDragable) return;
        this.isDragging = true;
        this.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        this.track.style.transition = 'none';
    }
    
    drag(e) {
        if (!this.isDragging || !this.isDragable) return;
        
        this.currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const diff = this.currentX - this.startX;
        
        let resistance = 1;
        
        if (this.currentIndex === 0 && diff > 0) {
            resistance = 0.3;
        }
        if (this.currentIndex === this.slides.length - 1 && diff < 0) {
            resistance = 0.3; 
        }
        
        const limitedDiff = diff * resistance;
        this.track.style.transform = `translateX(calc(-${this.currentIndex * this.width}% + ${limitedDiff}px))`;
    }
    
    endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const diff = this.currentX - this.startX;
        this.track.style.transition = 'transform 0.4s ease';
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.prevSlide();
            } else {
                this.nextSlide();
            }
        } else {
            this.goToSlide(this.currentIndex);
        }
    }
    
    nextSlide() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
            this.num_scrolling++;
            this.goToSlide(this.currentIndex);
        } else {
            this.goToSlide(this.currentIndex);
        }
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.num_scrolling--;
            this.goToSlide(this.currentIndex);
        } else {
            this.goToSlide(this.currentIndex);
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }
    
    updateSlider() {
        this.track.style.transform = `translateX(-${this.currentIndex * this.width}%)`;
        
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.slides.length - 1;

        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[this.currentIndex].classList.add('active');

        if(this.slider2){
            this.slider2.forEach(frame => frame.classList.remove("active"));
            this.slider2[this.currentIndex].classList.add("active")
            changeTransformBlockDoctors(this.currentIndex)
        }

        this.prevBtn.classList.toggle('disabled', this.currentIndex === 0);
        this.nextBtn.classList.toggle('disabled', (this.currentIndex === this.slides.length - 1 || this.num_scrolling == this.num_available_scrolling));
    }
}


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

if (window.matchMedia("(max-width: 768px)").matches && ('ontouchstart' in window || navigator.maxTouchPoints > 0)){
    window.addEventListener("scroll", () => {setTimeout(() => {head.classList.add("scroll")}, 200)})
    window.addEventListener("scrollend", () => {setTimeout(() => {head.classList.remove("scroll")}, 200)})
}

const block_with_doctors = document.querySelector(".hero2__doctors");

function changeTransformBlockDoctors(index){
    if ((window.matchMedia("(max-width: 586px)").matches))
        {
        switch (index){
            case 0: block_with_doctors.style="align-self: start;"; break;
            case 1: block_with_doctors.style="align-self: center;"; break;
            case 2: block_with_doctors.style="align-self: end;"; break;
        }
    }
}


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