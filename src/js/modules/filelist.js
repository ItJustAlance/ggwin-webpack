//////////
// File list
//////////
(function($, APP) {
  APP.Plugins.FileList = {
    init: function() {
      $(".js-file-list").each(function(index, elem) {
        var $elem = $(elem);
        var inputName = $elem.attr('data-name');
        var wrapInput = function($input) {
          $input.off('change');
          $input.hide();

          var $wrapper = $('<div class="list-item"></div>');
          $wrapper.append($input);

          var $deleteControl = $('<img class="list-item-delete" src="/static/img/red-x.png">');
          $deleteControl.click(function() {
            $wrapper.remove();
          });
          $wrapper.append($deleteControl);

          var $fileNameSpan = $('<spann class="list-item-name"></spann>');
          var fileName = $input.val().split(/[\\\/]/).pop();
          $fileNameSpan.text(fileName);
          $wrapper.append($fileNameSpan);

          $elem.append($wrapper);
        }

        var counter = 0;

        var addInput = function() {
          var $input = $('<input class="file-input" type="file" name="' + inputName + '_' + counter + '">');
          ++counter;
          $input.change(function() {
            wrapInput($input);
            addInput();
          });
          $elem.append($input);
        }
        addInput();
      });
    },
  };
})(jQuery, window.APP);
