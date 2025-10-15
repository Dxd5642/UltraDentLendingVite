const reviews = document.querySelector(".hero9__reviews-container");
const diplomasItems = reviews.querySelectorAll('.review');
const diplomasBtnNext = document.querySelector('.hero9__btn-slider_right');
const diplomasBtnBack = document.querySelector('.hero9__btn-slider_left');
const diplomasContainer = reviews.querySelector('.hero9__reviews-items');

let currentIndex = 0;
const itemWidth = diplomasItems[0].offsetWidth + 32;

function nextDiplom() {
    const maxIndex = diplomasItems.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        diplomasContainer.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
}

function backDiplom() {
    if (currentIndex > 0) {
        currentIndex--;
        diplomasContainer.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
}

diplomasBtnNext.addEventListener('click', nextDiplom);
diplomasBtnBack.addEventListener('click', backDiplom);