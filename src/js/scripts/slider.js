import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    loopFillGroupWithBlank: true,
    slidesPerGroupSkip: 1,
    autoplay: { delay: 1, disableOnInteraction: false },
    speed: 7000,
    breakpoints: {
      '@0.00': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.50': {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      '@0.75': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });
};

export default slider;
