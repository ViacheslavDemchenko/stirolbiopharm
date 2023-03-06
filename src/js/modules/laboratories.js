import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function laboratories() {
  if(document.querySelector('.production-laboratories__logos')) {
    const swiper = new Swiper('.production-laboratories__logos', {
      spaceBetween: 0,
      loopedSlides: 1,
      slidesPerView: 1,
      autoHeight: true,
      centeredSlides: true,
      loop: true,
      effect: 'flip',
      grabCursor: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
    });
  }
}