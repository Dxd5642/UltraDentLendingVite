
const blockQwiz = document.querySelector(".hero5__qwiz");
const blockQuestions = document.querySelector(".hero5__qwiz-block");
const qwizQuestions = document.querySelectorAll(".hero5__qwiz-question");
const btnBack = document.querySelector(".hero5__btn-back");
const btnNext = document.querySelector(".hero5__btn-next");
const btns = document.querySelector(".hero5__btns");
const hero5Block2 = document.querySelector(".hero5__block2");

const visibleStiks = document.querySelectorAll(".hero5__load-bar-value");
const btnQuestions = document.querySelectorAll(".hero5__qwiz-variant")

const hero5RequestInputNum = document.querySelector(".hero5__request-input-num");

const btnRequestAgree = document.querySelector(".hero5__request-agree-btn");

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
        btnRequestAgree.addEventListener("click", ()=>{btnRequestAgree.classList.toggle("active")});

        hero5RequestInputNum.addEventListener('input', function(e) {
            let input = e.target;
            let value = input.value.replace(/\D/g, '');
            
            if (value.startsWith('7') || value.startsWith('8')) {
                value = value.substring(1);
            }
            
            let formattedValue = '+7 (';
            
            if (value.length > 0) {
                formattedValue += value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ') - ' + value.substring(3, 6);
            }
            if (value.length > 6) {
                formattedValue += ' - ' + value.substring(6, 8);
            }
            if (value.length > 8) {
                formattedValue += ' - ' + value.substring(8, 10);
            }
            
            input.value = formattedValue;
        });

        hero5RequestInputNum.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                let input = e.target;
                let cursorPosition = input.selectionStart;
                
                if (cursorPosition <= 4 || cursorPosition === 9 || cursorPosition === 14 || cursorPosition === 19) {
                    e.preventDefault();
                }
            }
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

    createRequest(){
        this.slides[4].style = "height: auto; min-height: 422px;";
        this.slider.style = "margin-top: auto;";
        btns.classList.add("hide");
        hero5Block2.style = "gap: 0px;"
        
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
        if (this.currentIndex == 4){this.createRequest()};
    }
}

