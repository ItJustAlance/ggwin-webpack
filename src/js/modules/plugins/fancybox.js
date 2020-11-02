(function($, APP) {
  APP.Plugins.Fancybox = {
    init: function() {
      $('[data-fancybox="gallery"]').fancybox({
        backFocus : false,
        infobar: false,
        toolbar: true,
      });
/*
      $('.card__slider-fullscreen').click(function() {
        let imgsList = new Array();

        $(this)
          .parents('.js-slider-card')
          .find('.card__slider-img')
          .each(function() {
            let img = $(this).attr('src');
            imgsList.push({ src: img });
          });

        $.fancybox.open(imgsList, {
          animationEffect: 'zoom-in-out',
          buttons: ['close'],
          transitionEffect: 'slide',
          autoSize: false,
          backFocus:false,
          btnTpl: {
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left swiper-button-prev" title="{{PREV}}">' +
              '<svg viewBox="0 0 83 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.176762 21.9997L21.5042 0.588268L24.3382 3.41113L7.81469 19.9997L82.9996 19.9997L82.9996 23.9997L7.81469 23.9997L24.3382 40.5883L21.5042 43.4111L0.176762 21.9997Z" fill="black"/></svg>' +
              '</button>',

            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right swiper-button-next" title="{{NEXT}}">' +
              '<svg viewBox="0 0 83 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M82.8232 22.0003L61.4958 43.4117L58.6618 40.5889L75.1853 24.0003L0.000356256 24.0003L0.000356653 20.0003L75.1853 20.0003L58.6618 3.41173L61.4958 0.588865L82.8232 22.0003Z" fill="black"/></svg>' +
              '</button>',

            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 36.004L576.521.603 306 270.608 35.478.603 0 36.004l270.522 270.007L0 575.997l35.478 35.4L306 341.411l270.521 269.986 35.479-35.4-270.541-269.986z"/></svg>' +
              '</button>',
          },
          infobar: false,
          protect: true,
        });
        $.fancybox.close( function(instance) {

          // This is index of current fancyBox slide
          console.info( instance.currIndex  );
          console.log('fff');
          // Update position of the slider
          galleryThumbs.slideTo( instance.currIndex, 0 );

        });
      });
*/


    },
  };
})(jQuery, window.APP);
