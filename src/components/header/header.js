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

// //////////// popups
        $(".popup__close").on('click', function() {
            $('body').removeClass();
        });
        $(".js-pop-popolnit").on('click', function() {
            $('body').addClass("popup-show-popolnit");
        });
        $(".js-pop-edit-user").on('click', function() {
            $('body').addClass("pop-edit-user__show");
        });
        $(".js-pop-edit-ava").on('click', function() {
            $('body').addClass("pop-edit-ava__show");
        });
        $(".js-pop-create-ticket").on('click', function() {
            $('body').addClass("pop-create-ticket__show");
        });
        $(".js-pop-inline").on('click', function() {
            $('body').addClass("pop-inline__show");
        });


        $(".j-tab-user-ava").on('click', function() {
            $('.popup-tabs__item').removeClass('active');
            $(this).addClass('active');
            $('#tab__user-ava').show();
            $('#tab__user-nick').hide();
        });
        $(".j-tab-user-nick").on('click', function() {
            $('.popup-tabs__item').removeClass('active');
            $(this).addClass('active');
            $('#tab__user-nick').show();
            $('#tab__user-ava').hide();
        });


    }, // end init
  };
})(jQuery, window.APP);
