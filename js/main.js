let position = 0;
const slidesToShow = 4;
const slidesToScroll = 3;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-items');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.arrow__item-left');
const btnNext = document.querySelector('.arrow__item-right');
const items = document.querySelector('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`;
// });

console.log(container);

btnPrev.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
    console.log('btnPrev');
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
    console.log('btnNext');
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();


autoSlider();
let right = 0;
var timer;
function autoSlider () {
    timer = setTimeout(function () {
        let card = document.querySelector('.card__items');
        if (right < -512) {
            right = 0;
        }
        card.style.right = right + 'px';
        autoSlider();
    }, 1000);
}



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
