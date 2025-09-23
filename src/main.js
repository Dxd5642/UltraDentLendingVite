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
        case 1: txt = 'Широтную'; console.log(1); break;
        case 2: txt = 'Челюскинцев'; console.log(2); break;
        case 3: txt = 'Республике'; console.log(3); break;
        default: break;
    }
    map_departments__btn_record.classList.add("active")
    map_departments__btn_record_txt.innerHTML = `Записаться на прием на ${txt}`
}


class HeroSlider {
    constructor() {
        this.slider = document.querySelector('.hero2__slider');
        this.track = document.querySelector('.hero2__slides');
        this.slides = document.querySelectorAll('.hero2__slide');
        this.prevBtn = document.querySelector('.hero2__btn-slider_left');
        this.nextBtn = document.querySelector('.hero2__btn-slider_right');
        this.currentIndex = 0;
        
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.slider.addEventListener('mousedown', this.startDrag.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.endDrag.bind(this));
        
        this.slider.addEventListener('touchstart', this.startDrag.bind(this));
        this.slider.addEventListener('touchmove', this.drag.bind(this));
        this.slider.addEventListener('touchend', this.endDrag.bind(this));
        
        this.slider.addEventListener('dragstart', (e) => e.preventDefault());
        
        this.updateSlider();
    }
    
    startDrag(e) {
        this.isDragging = true;
        this.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        this.track.style.transition = 'none';
    }
    
    drag(e) {
        if (!this.isDragging) return;
        
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
        this.track.style.transform = `translateX(calc(-${this.currentIndex * 100}% + ${limitedDiff}px))`;
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
            this.goToSlide(this.currentIndex);
        } else {
            this.goToSlide(this.currentIndex);
        }
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
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
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.slides.length - 1;
        
        this.prevBtn.classList.toggle('disabled', this.currentIndex === 0);
        this.nextBtn.classList.toggle('disabled', this.currentIndex === this.slides.length - 1);
    }
}

const style = document.createElement('style');
style.textContent = `
    .hero2__btn-slider.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});