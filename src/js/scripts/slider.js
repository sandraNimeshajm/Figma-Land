import Swiper from 'swiper/bundle';

const slider = () => {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    loopFillGroupWithBlank: true,
    slidesPerGroupSkip: 1,
    autoplay: { delay: 1, disableOnInteraction: false },
    speed: 7000,
  });
};

export default slider;
