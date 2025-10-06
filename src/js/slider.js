
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

export default HeroSlider;