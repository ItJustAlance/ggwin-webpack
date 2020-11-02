// PRE-initialization
var APP = window.APP || {};
APP.Dev = APP.Dev || {};
APP.Browser = APP.Browser || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

// force scroll to top on initial load
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// shorthand operators
var _window = $(window);
var _document = $(document);
var easingSwing = [0.02, 0.01, 0.47, 1]; // default jQuery easing

(function($, APP) {
  APP.Initilizer = function() {
    var app = {};

    app.init = function() {
      app.initGlobalPlugins();
      app.initPlugins();
      app.initComponents();
    };

    app.onLoadTrigger = function() {
      // APP.Plugins.Preloader.loaded();
    };

    app.refresh = function() {
      //APP.Plugins.Sharer.refresh();
      APP.Plugins.Sliders.reinit();
      app.initPlugins(true);
      app.initComponents(true);
    };

    app.destroy = function() {};

    // pjax triggers
    app.newPageReady = function() {
      app.refresh();
    };

    app.transitionCompleted = function() {
      APP.Plugins.AOS.refresh();
      app.onLoadTrigger();
    };

    // Global plugins which must be initialized once
    app.initGlobalPlugins = function() {
    //  APP.Dev.Credentials.logCredentials();
      APP.Dev.Breakpoint.listenResize();
      APP.Browser().methods.setBodyTags();
      //APP.Plugins.LegacySupport.init();
      APP.Plugins.ScrollBlock.listenScroll();
      APP.Plugins.Clicks.init();
      APP.Plugins.AOS.init();
   //   APP.Plugins.Barba.init();

    };

    // Plugins which depends on DOM and page content
    app.initPlugins = function(fromPjax) {

      APP.Plugins.Teleport.init();
      APP.Plugins.Sliders.init(fromPjax);
      APP.Plugins.Popup.init();
      APP.Plugins.Masks.init();
      APP.Plugins.Selectric.init();
      APP.Plugins.LazyLoadImages.init();
      APP.Plugins.TextareaAutoExpand.init();
      APP.Plugins.Validations.init();
      APP.Plugins.Tooltip.init();
      APP.Plugins.Fancybox.init();
      APP.Plugins.AjaxForm.init();
      APP.Plugins.Captcha.init();
      APP.Plugins.FileList.init();
      APP.Plugins.InputFilter.init();

      //APP.Plugins.LegacySupport.fixImages();

      // APP.Plugins.ScrollReveal.init();
      // APP.Plugins.Ymaps.init();
      // APP.Plugins.Countdown.init();
      // APP.Plugins.FooterReveal.init();
      // APP.Plugins.ScalerDesktop.init(fromPjax);

      // plugins
      // APP.Plugins.Sticky.init(fromPjax);
      // APP.Plugins.Photoswipe.init(fromPjax);
      // APP.Plugins.DatePicker.init(fromPjax);

      // ui
      // APP.Plugins.Clipboard.init();
      // APP.Plugins.InputFocuses.init();
    };

    // All components from `src/componenets`
    app.initComponents = function(fromPjax) {
      APP.Components.Header.init(fromPjax);
      APP.Components.Slider.init();
      APP.Components.SliderItem.init(fromPjax);
      APP.Components.leftTabs.init();
      APP.Components.jsFilter.init();
      APP.Components.jsDoc.init();
      APP.Components.jsFaq.init();
      APP.Components.AvaliabilityFilter.init();
      APP.Components.SliderFilter.init();
      APP.Components.ProductSorting.init();
      APP.Components.ToggleContent.init();
      APP.Components.PaginationForm.init();
      APP.Components.Basket.init();
    };

    return app;
  };

  // a.k.a. ready
  $(function() {
    APP.Initilizer().init();
  });

  $(function() {
    $.ready.then(function() {
      APP.Initilizer().onLoadTrigger();
    });
  });
})(jQuery, window.APP);
