import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

$(function() {
    $.ready.then(function() {

        var defaultParams =  {
            cursorcolor: 'rgba(255, 255, 255, 0.1)',
            cursorwidth: '3px',
            background: 'rgba(255, 255, 255, 0.1)',
            cursorborder: 'none',
            autohidemode: false,
            cursorborderradius: '3px',
            railoffset: { top: 10, left: -4 },
            nativeparentscrolling: true,
            railpadding: { top: 0, right: 0, left: 0, bottom: 25 },
        };
        var _this = this;



        $('.history-scroll').niceScroll(
            $.extend(defaultParams, {
                railoffset: {  left: 10, right: 10, bottom: 0 },
                railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            })
        ).resize();
        $('.profile-scroll').niceScroll(
            $.extend(defaultParams, {
                railoffset: {  left: 10, right: 10, bottom: 0 },
                railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            })
        ).resize();




        if ($(window).width() <= 1024) {
            $('.scrolling').getNiceScroll().remove();
            $('.fair-game-scroll').getNiceScroll().remove();
            $('.history-scroll').getNiceScroll().remove();
            $('.profile-scroll').getNiceScroll().remove();
        }else{
            $('.scrolling').getNiceScroll().resize();
            $('.fair-game-scroll').getNiceScroll().resize();
            $('.history-scroll').getNiceScroll().resize();
            $('.profile-scroll').getNiceScroll().resize();
        }

        $(window).on('resize', function(){

            if ($(window).width() <= 1024) {
                $('.scrolling').getNiceScroll().remove();
                $('.fair-game-scroll').getNiceScroll().remove();
                $('.history-scroll').getNiceScroll().remove();
                $('.profile-scroll').getNiceScroll().remove();
            }else{
                $('.scrolling').getNiceScroll().resize();
                $('.fair-game-scroll').getNiceScroll().resize();
                $('.history-scroll').getNiceScroll().resize();
                $('.profile-scroll').getNiceScroll().resize();
            }
        });
    });});
