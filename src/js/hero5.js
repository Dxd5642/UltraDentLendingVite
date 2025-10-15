
const block2 = document.querySelector(".hero5__block2");
const blockQwiz = block2.querySelector(".hero5__qwiz");
const blockQuestions = block2.querySelector(".hero5__qwiz-block");
const qwizQuestions = block2.querySelectorAll(".hero5__qwiz-question");
const btnBack = block2.querySelector(".hero5__btn-back");
const btnNext = block2.querySelector(".hero5__btn-next");
const btns = block2.querySelector(".hero5__btns");

const visibleStiks = block2.querySelectorAll(".hero5__load-bar-value");
const btnQuestions = block2.querySelectorAll(".hero5__qwiz-variant")

const hero5RequestInputNum = block2.querySelector(".hero5__request-input-num");

const btnRequestAgree = block2.querySelector(".hero5__request-agree-btn");

const requestName = block2.querySelector(".hero5__request-input-name");
const requestNum = block2.querySelector(".hero5__request-input-num");
const requestCheckArgee = block2.querySelector(".hero5__request-agree-btn");

const requestNameGE = block2.getElementsByClassName("hero5__request-input-name")[0];
const requestNumGE = block2.getElementsByClassName("hero5__request-input-num")[0];

const btnSendRequest = block2.querySelector(".hero5__request-btn");


document.addEventListener("DOMContentLoaded", () => {
        new hero7Qwiz(
            blockQwiz,
            blockQuestions,
            qwizQuestions,
            btnBack,
            btnNext,
            100,
            4,
            visibleStiks,
            btnQuestions,
        );
        btnRequestAgree.addEventListener("click", ()=>{
            btnRequestAgree.classList.toggle("active");
            btnSendRequest.classList.toggle("disabled")
        });


        requestName.addEventListener("input", ()=>{requestName.classList.remove("unapprecial");
            requestNameGE.placeholder = 'Ваше имя';

        });
        requestNum.addEventListener("input", ()=>{requestNum.classList.remove("unapprecial");
            requestNumGE.placeholder = '+7 (___) - ___ - __ - __';

        });
});

class hero7Qwiz {
    constructor(slider, track, slides, prevBtn, nextBtn, width, num_available_scrolling = Infinity, visibleStiks, btnQuestions) {
        this.slider = slider;
        this.track = track;
        this.slides = slides;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.width = width
        this.currentIndex = 0;
        
        this.startX = 0;
        this.currentX = 0;
        this.num_available_scrolling = num_available_scrolling;
        this.num_scrolling = 0

        this.visibleStiks = visibleStiks
        this.btnQuestions = btnQuestions
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        btnQuestions.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const groupIndex = Math.floor(index / 3);
                
                for(let i = groupIndex * 3; i < (groupIndex * 3) + 3; i++){
                    if(btnQuestions[i]) {
                        btnQuestions[i].classList.remove("active");
                    }
                }
                
                this.visibleNextButton();
                btn.classList.add("active");
            });
        });
        
        this.updateSlider();
    }

    requestPage(){
        this.slides[4].style = "height: auto; min-height: 422px;";
        this.slider.style = "margin-top: auto;";
        btns.classList.add("hide");
        block2.style = "gap: 0px;"
        
    }

    changeVisibleStick(){
        this.visibleStiks.forEach(stick => stick.classList.remove("active"))
        for (let i = 0; i < this.visibleStiks.length; i++){
            if (i - 1 == this.currentIndex){
                break
            }
            this.visibleStiks[i].classList.add("active")
        }
    }

    checkChoice(){
        const startIndex = this.currentIndex * 3;
        const endIndex = startIndex + 3;
        
        for (let i = startIndex; i < endIndex; i++){
            if (this.btnQuestions[i].classList.contains("active")){
                this.visibleNextButton();
                return true;
            }
        }
        this.unvisibleNextButton();
        return false;
    }

    unvisibleNextButton() {
        this.nextBtn.classList.add('disabled');
    }

    visibleNextButton() {
        this.nextBtn.classList.remove('disabled');
    }
    
    nextSlide() {
        if(!this.checkChoice()){return}
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

        this.prevBtn.classList.toggle('disabled', this.currentIndex === 0);
        this.nextBtn.classList.toggle('disabled', (this.currentIndex === this.slides.length - 1 || this.num_scrolling == this.num_available_scrolling));
        this.unvisibleNextButton();
        this.changeVisibleStick();
        if (this.currentIndex == 4){this.requestPage()};
    }
}

btnSendRequest.addEventListener("click", createRequest);


function getActiveButtonIndex(questionSelector) {
    const questionElement = document.querySelector(questionSelector);
    if (!questionElement) return 0;
    
    const buttons = questionElement.querySelectorAll('.hero5__qwiz-variant');
    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
            return i + 1;
        }
    }
    
}

import {openFeedback} from './hero1';

function createRequest(){
    let hasError = false;
    if (requestName.value == ""){
        requestName.classList.add("unapprecial");
        requestNameGE.placeholder = 'Поле не заполнено'
        hasError = true
    }
    if (requestNum.value == ""){
        requestNum.classList.add("unapprecial");
        requestNumGE.placeholder = 'Поле не заполнено'
        hasError = true
    }
    if (!(requestCheckArgee.classList.contains("active"))){
        requestCheckArgee.classList.add("unapprecial");
        hasError = true
    }

    if(!hasError){
        const requestqwiz = {
            name: requestName.value.trim(),
            phone: requestNum.value.replace(/\D/g, ''),
            question1: getActiveButtonIndex('.hero5__qwiz-question1'),
            question2: getActiveButtonIndex('.hero5__qwiz-question2'),
            question3: getActiveButtonIndex('.hero5__qwiz-question3'),
            question4: getActiveButtonIndex('.hero5__qwiz-question4'),
        }
        console.log(requestqwiz);
        requestName.value = "";
        requestNum.value = "";
        openFeedback();
        
    }

    return
}
