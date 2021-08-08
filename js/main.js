let position = 0;
const slidesLength = document.querySelectorAll('.slider-item').length;
const slidesToShow = 4;
const slidesToScroll = 3;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-items');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.arrow__item-left');
const btnNext = document.querySelector('.arrow__item-right');
const items = document.querySelector('.slider-item');


const prevSlide = () => {
    clearInterval(slideInterval);
    
    if (position <= 0) {
        btnPrev.classList.add('disabled');
        return;
    }
    btnNext.classList.remove('disabled');
    

    position--;
    track.style.transform = `translateX(-${position * 299}px)`;
};

const nextSlide = () => {
    clearInterval(slideInterval);

    if (position >= slidesLength - slidesToShow) {
        btnNext.classList.add('disabled');
        return;
    };
    btnPrev.classList.remove('disabled');
    position++;
    
    track.style.transform = `translateX(-${position * 299}px)`;
};

const slideInterval = setInterval(() => {
    nextSlide(); 
}, 2000);



btnPrev.addEventListener('click', prevSlide);

btnNext.addEventListener('click', nextSlide);








const dragAndDrop = () => {
    const card = document.querySelector('.js__card');
    const cards = document.querySelectorAll('.js__cards');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)    
    };
    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (evt) {
        evt.preventDefault();
    };

    const dragEnter = function () {
        this.classList.add('hovered');
    };

    const dragLeave = function () {
        this.classList.remove('hovered');
    };
    const dragDrop = function () {
        this.append(card);
        this.classList.remove('hovered');
    };

    cards.forEach((card) => {
        card.addEventListener('dragover', dragOver);
        card.addEventListener('dragenter', dragEnter);
        card.addEventListener('dragleave', dragLeave);
        card.addEventListener('drop', dragDrop);
    });



    // card.addEventListener('dragstart', dragStart);
    // card.addEventListener('dragend', dragEnd); 
};
dragAndDrop();
