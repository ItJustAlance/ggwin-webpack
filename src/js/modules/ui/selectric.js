////////////////////
// SELECTRIC PLUGIN
////////////////////
(function($, APP) {
  APP.Plugins.Selectric = {
    init: function() {
      var $select = $('.js-select');
      if ($select.length === 0) return;

      $select.selectric({
        maxHeight: 300,
        disableOnMobile: false,
        nativeOnMobile: true,
        arrowButtonMarkup:
          '<b class="button"><svg class="ico ico-select-down" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6L10 0H0L5 6Z" fill="#8D8D8D"/></svg></b>',

        onInit: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($elm.attr('placeholder'));
        },
        onBeforeOpen: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper
            .find('.label')
            .data('value', $wrapper.find('.label').html())
            .html($elm.attr('placeholder'));
        },
        onBeforeClose: function(element, data) {
          var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

          $wrapper.find('.label').html($wrapper.find('.label').data('value'));
        },
      });
    },
  };
})(jQuery, window.APP);
