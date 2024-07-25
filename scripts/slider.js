const leftBtn = document.querySelector('.offers__left-btn');
const rightBtn = document.querySelector('.offers__right-btn');
const slides = document.querySelectorAll('.offers__item');
const current = document.querySelector('.offers__current');

let index = 1;


const showSlide = (i) => {
    const size = window.matchMedia('(max-width: 1024px)');

    if (i > slides.length) {
        index = 1;
    }
    if (i < 1) {
        index = slides.length;
    }

    const handleSize = (e) => {
        slides.forEach(item => {
            if (e.matches) {
                item.style.display = 'none';
                slides[index - 1].style.display = '';
            } else {
                item.style.display = '';
            }
        });
    };

    size.addEventListener('change', handleSize);
    handleSize(size);

    if (slides.length < 10) {
        current.textContent = `0${index}`;
    } else {
        current.textContent = index;
    }
};


 export const launchSlide = () => {
     const plusSlide = (i) => {
        showSlide(index += i);
    };

    leftBtn.addEventListener('click', () => {
        plusSlide(-1);
    });

    rightBtn.addEventListener('click', () => {
        plusSlide(1);
    });
};


showSlide(index)







