import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.header__logo-img', { duration: 1, opacity: 0, stagger: 0.5 });
  gsap.from('.nav__list-link', {
    duration: 0.3,
    opacity: 0,
    delay: 1,
    stagger: 0.1,
  });

  gsap.from('.page-title', {
    duration: 1,
    opacity: 0,
    ease: 'bounce',
    y: -500,
  });

  const texts = document.querySelectorAll('.js-fade-up');

  texts.forEach((text) => {
    gsap.from(text, {
      y: 100,
      opacity: 0,
      scrollTrigger: text,
    });
  });
  function animateFrom(elem, direction) {
    direction = direction | 1;

    let x = 0,
      y = direction * 100;
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  });
};

export default animation;
