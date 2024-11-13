const swiper = new Swiper('.header__swiper', {

    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const burgerCell = document.querySelector('.burger__cell')
const burgerControll = document.querySelector('.burger__control')
const burger = document.querySelector('.burger__menu')
const wrapper = document.querySelector('.wrapper')
const body = document.querySelector('.body')
burgerCell.addEventListener('click', () => {
    burger.classList.toggle('burger__menu--active')
    body.classList.toggle('body--dont-scrolling')
    wrapper.classList.toggle('body--dont-scrolling')
    burgerControll.classList.toggle('burger__control--active')
})
const swiperAbout = new Swiper(".about-swiper", {
    effect: "cards",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination-about",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-about",
        prevEl: ".swiper-button-prev-about",
    },
});

const accordion = document.querySelector('.accordion')
    accordion.addEventListener('click', accordionContentShow)
function accordionContentShow(event) {
    const accordionControl = event.target.closest('.accordion__cell')
    const accordionButton = document.querySelectorAll('.accordion__button__link')
    for (i = 0; i < accordionButton.length; i++) {
        console.log(accordionButton[i])
        /*accordionButton[i].preventDefault()*/
    }
    const accordionContent = accordionControl.children[1]
    console.log(accordionContent)
    if (!accordionControl) return
    accordionControl.classList.toggle('accordion__cell--focus')
    accordionContent.classList.toggle('accordion__content--active')
    if (accordionContent.classList.contains('accordion__content--active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
    } else {
        accordionContent.style.maxHeight = null
    }
}