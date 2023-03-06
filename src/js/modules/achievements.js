import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function achievements() {
  if(document.querySelector('.achievements__slider')) {
    const swiper = new Swiper('.achievements__slider', {
      spaceBetween: 70,
      loopedSlides: 1,
      slidesPerView: 3,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 0,
          loopedSlides: 1,
          slidesPerView: 1,
          autoHeight: true
        },
        700: {
          spaceBetween: 20,
          loopedSlides: 1,
          slidesPerView: 2
        },
        1024: {
          spaceBetween: 30,
          loopedSlides: 1,
          slidesPerView: 3
        },
        1440: {
          spaceBetween: 70,
          loopedSlides: 1,
          slidesPerView: 3
        },
      }
    });
  }
}