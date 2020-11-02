//////////
// File list
//////////
(function($, APP) {
  APP.Plugins.InputFilter = {
    init: function() {
      function setInputFilter(textbox, inputFilter) {
        ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(function(event) {
          textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            }
            else if (this.hasOwnProperty('oldValue')) {
              this.value = this.oldValue;
              this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
          });
        });
      }
      $('[data-filter]').each(function(index, input) {
        var re = new RegExp(input.getAttribute('data-filter'));
        setInputFilter(input, function(text){
          return re.test(text);
        });
      });
    },
  };
})(jQuery, window.APP);
