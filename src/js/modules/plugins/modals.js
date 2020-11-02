(function($, APP) {
  APP.Plugins.Popup = {
    /* в этом методе this - это НЕ APP.Plugins.Popup */
    init: function () {
      window.popupCloseAll = function() {
        $('.popup').fadeOut(300);
        $('body').removeClass('bhidden');
      }
      $(".js-popup-close").on('click', function() {
        popupCloseAll();
        return false;
      });
      window.popupOpen = function (popup) {
        $(popup).fadeIn(300);
        $('body').addClass('bhidden');
      }
      $('.js-popup').on('click', function() {
        var popName = $(this).attr('data-popup');
        popupOpen('.' + popName);
        return false;
      });
      window.popupAlert = function(text) {
        var $popupAlert = $('.popup--alert');
        $popupAlert.find('#popup_alert_text').html(text);
        popupOpen($popupAlert);
      }
    }
  };
})(jQuery, window.APP);
