//////////
// Ajax form
//////////
(function($, APP) {
  APP.Plugins.AjaxForm = {
    init: function() {
     $("form.ajax-form").on("submit", function(e) {
        e.preventDefault();
        var $form = $(this);
        $form.find(".form-group").removeClass("error");
        $form.find(".field-error").text("");
        $form.find(".form-error").text("");
        var action = $form.attr("action");
        var method = $form.attr("method");
        var data;
        if (method && method.toUpperCase() == 'POST') {
          data = new FormData($form[0]);
        }
        else {
          data = $form.serialize();
        }
        var successAction = $form.attr("data-success");
        $.ajax({
          url: action,
          method: method,
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
            if (data.success) {
              document.location.href = successAction;
              $form.find('input[type=text]').val('');
              $form.find('textarea').val('');
            }
            else {
              var fields = Object.keys(data.errors);
              for (var i = 0; i < fields.length; i++) {
                var fieldName = fields[i];
                var fieldErrors = data.errors[fieldName];
                if (fieldName != "__all__") {
                  var $formGroup = $form.find("[name=" + fieldName + "]").closest(".form-group");
                  $formGroup.addClass("error");
                  $formGroup.find(".field-error").text(fieldErrors[0]);
                }
                else {
                  $form.find(".form-error").text(fieldErrors[0]);
                }
              }
            }
          },
          error: function() {
          }
        });
     });
    },
  };
})(jQuery, window.APP);
