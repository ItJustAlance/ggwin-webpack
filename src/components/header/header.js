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
      document.querySelector('.chat-free__arrow').onclick = function() {
        document.body.classList.toggle('free-skin__open');
      }


    }, // end init
  };
})(jQuery, window.APP);
