
export const showBurger = () => {
    const burger = document.querySelector('.burger');
    const burgerBtn = document.querySelector('.header__burger');

    burgerBtn.addEventListener('click', () => {
        burger.classList.add('open__burger');
    });
};

export const closeBurger = () => {
    const burger = document.querySelector('.burger');
    const closeBtn = document.querySelector('.header__close-btn');

    closeBtn.addEventListener('click', () => {
        burger.classList.remove('open__burger');
    });
};