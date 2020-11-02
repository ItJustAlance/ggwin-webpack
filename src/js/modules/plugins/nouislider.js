(function($, APP) {
  APP.Plugins.Nouislider = {
    init: function() {
      var $rangesliders = $('.page')
        .last()
        .find('.nouislider');

      if ($rangesliders.length === 0) return;

      $rangesliders.each(function(i, slider) {
        // build params
        var $slider = $(slider);
        var dataType = $slider.data('type');
        var dataId = $slider.data('rangeslider-id');
        var dataStartFrom = parseInt($slider.data('start-from'));
        var dataStartTo = parseInt($slider.data('start-to'));
        var dataRangeMin = parseInt($slider.data('range-min'));
        var dataRangeMax = parseInt($slider.data('range-max'));
        var dataStep = parseInt($slider.data('step')) || 10;

        // conditional params
        var startArr = [dataStartFrom];
        if (dataStartTo) {
          startArr.push(dataStartTo);
        }

        // create nouislider instance
        noUiSlider.create(slider, {
          start: startArr,
          connect: true,
          step: dataStep,
          range: {
            min: dataRangeMin,
            max: dataRangeMax,
          },
        });

        if (dataType === 'filter') {
          var inputFrom = $(this)
            .parents('.filter__slider')
            .find('.filter__slider-input--from')[0];
          var inputTo = $(this)
            .parents('.filter__slider')
            .find('.filter__slider-input--to')[0];

          slider.noUiSlider.on('update', function(values, handle) {
            inputFrom.value = Math.round(values[0]);
            inputTo.value = Math.round(values[1]);
          });

          inputFrom.addEventListener('change', function() {
            slider.noUiSlider.set([this.value, null]);
          });

          inputTo.addEventListener('change', function() {
            slider.noUiSlider.set([null, this.value]);
          });
        } else if (dataType === 'bonus') {
          var $linkedInput = $('[data-set-rangeslider-value="' + dataId + '"]');

          slider.noUiSlider.on('update', function(values, handle) {
            var value = Math.round(values[1]);
            $linkedInput.text(value);
          });

          $linkedInput.on('blur', function(e) {
            var newVal = startArr;
            newVal[1] = $(this).text();
            slider.noUiSlider.set(newVal);
          });

          $linkedInput.keydown(function(e) {
            // trap the return key being pressed
            var key = e.charCode || e.keyCode || 0;

            if (key === 13) {
              $(this).blur();
              return false;
            }

            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
              key === 8 ||
              key === 9 ||
              key === 13 ||
              key === 46 ||
              key === 110 ||
              key === 190 ||
              (key >= 35 && key <= 40) ||
              (key >= 48 && key <= 57) ||
              (key >= 96 && key <= 105)
            );
          });
        }
      });
    },
  };
})(jQuery, window.APP);
