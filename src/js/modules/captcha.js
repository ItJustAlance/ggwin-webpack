//////////
// Captcha
//////////
(function($, APP) {
  APP.Plugins.Captcha = {
    init: function() {
      $(".js-captcha").each(function(index, elem) {
        var $elem = $(elem);
        var $image = $elem.find('img.js-captcha-image');
        var $keyInput = $elem.find('input[name=captcha_0]');
        var $userInput = $elem.find('input[name=captcha_1]');
        var reload = function() {
          $.get('/rc/').done(function(data) {
            $image.attr('src', data.url);
            $keyInput.val(data.key);
          });
        }
        $elem.find('.js-captcha-reload').click(reload);
        reload();
      });
    },
  };
})(jQuery, window.APP);
