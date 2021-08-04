
// const next = document.getElementById('btn-right');
// const prev = document.getElementById('btn-left');
// const cards = document.querySelectorAll('.js__cards');

// let index = 0; 


// const nextSlide = () => {
//     if(index == cards.length - 1) {
//         index = 0;
//     }else {
//         index++;
//     }
// }

// const prevSlide = () => {
//     if (index == cards.length - 1) {
//         index = 0;
//     }else {
//         index++;
//     }
//     console.log('нажал');
// };

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);


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



    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd); 
};
dragAndDrop();
