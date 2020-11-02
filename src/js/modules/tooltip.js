//////////
// Tooltip
//////////
(function($, APP) {
  APP.Plugins.Tooltip = {
    init: function() {
      $(".js-info i").on("click", function(e) {
        e.stopPropagation();
        $(".js-info").removeClass("show-tool");
        $(this).parent().addClass("show-tool")
      });
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".js-info"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // если клик был не по нашему блоку и не по его дочерним элементам
          div.removeClass("show-tool"); // скрываем его
        }
      });
      $('.b-tooltip').mouseleave(function(){
        $(".js-info").removeClass("show-tool"); 
      });
      
      window.initTooltip = function(container) {
        if (typeof($.tooltipster) !== 'undefined') {
          container.find('.tooltip').tooltipster({
            animation: 'fade',
            delay: [100,500],
            interactive: true,
            theme: 'tooltipster-light',
          });
          container.find('.tooltip-html').tooltipster({
            animation: 'fade',
            contentAsHTML: true,
            delay: [100,500],
            interactive: true,
            theme: 'tooltipster-light',
          });
          container.find('.tooltip-ajax').tooltipster({
            animation: 'fade',
            delay: [100,500],
            interactive: true,
            theme: 'tooltipster-light',
            content: 'Загрузка...',
            functionBefore: function(instance, helper) {
              var $origin = $(helper.origin);
              if ($origin.data('ajax') !== 'cached') {
                var url = $origin.attr('data-href');
                $.ajax({
                  url: url,
                  success: function(data) {
                    instance.content($(data));
                    $origin.data('ajax', 'cached');
                  },
                  error: function(e) {
                    instance.content('Ошибка получения данных');
                  }
                });
                $origin.data('ajax', 'cached');
              }
            }
          });
        }
      }
      initTooltip($('body'));
    }, // end
  };
})(jQuery, window.APP);
