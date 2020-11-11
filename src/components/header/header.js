//////////
// HEADER
//////////

(function ($, APP) {
  APP.Components.Header = {
    init: function () {
      $(".chat-close").on('click', function() {
        $('body').addClass('chat-hide');
        $('body').removeClass('float-chat__open');
      });
      $(".chat-open").on('click', function() {
        $('body').removeClass('chat-hide');
      });
      $(".js-open-market").on('click', function() {
        $('body').toggleClass('market-show');
      });
      $(".inventar-market--close").on('click', function() {
        $('body').toggleClass('market-show');
      });
      $(".chat-free__arrow").on('click', function() {
        $('body').toggleClass('free-skin__open');
      });
      $(".free-skin-close").on('click', function() {
        $('body').removeClass('free-skin__open');
      });
      $(".float-btn-chat").on('click', function() {
        $('body').addClass('float-chat__open');
        $('body').removeClass('chat-hide');
      });
      $(".chat-close-close").on('click', function() {
        $('body').removeClass('float-chat__open');
      });
      $("#hamburger-icon").on('click', function() {
        $('body').addClass('active_m');
      });
      $(".header-toggle__close").on('click', function() {
        $('body').removeClass('active_m');
      });


    }, // end init
  };
})(jQuery, window.APP);
