//////////
// HEADER
//////////

(function ($, APP) {
  APP.Components.Header = {
    init: function () {
      document.querySelector('.chat-close').onclick = function() {
        document.body.classList.add('chat-hide');
      }
      document.querySelector('.chat-open').onclick = function() {
        document.body.classList.remove('chat-hide');
      }
      document.querySelector('.js-open-market').onclick = function() {
        document.body.classList.toggle('market-show');
      }
      document.querySelector('.inventar-market--close').onclick = function() {
        document.body.classList.toggle('market-show');
      }
      document.querySelector('.chat-free__arrow').onclick = function() {
        document.body.classList.toggle('free-skin__open');
      }
      document.querySelector('.float-btn-chat').onclick = function() {
        document.body.classList.add('float-chat__open');
      }
      document.querySelector('.chat-close-close').onclick = function() {
        document.body.classList.remove('float-chat__open');
      }
      document.querySelector('#hamburger-icon').onclick = function() {
        document.body.classList.add('active_m');
      }
      document.querySelector('.header-toggle__close').onclick = function() {
        document.body.classList.remove('active_m');
      }


    }, // end init
  };
})(jQuery, window.APP);
