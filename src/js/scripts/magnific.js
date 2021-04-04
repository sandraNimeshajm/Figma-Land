import $ from 'jquery';
import 'magnific-popup';

const magnific = () => {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },

    mainClass: 'mfp-with-zoom',

    zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {
        return openerElement.is('img')
          ? openerElement
          : openerElement.find('img');
      },
    },
  });

  console.log('testr');
};

export default magnific;
