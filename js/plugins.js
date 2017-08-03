// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$( document ).ready(function() {
    $(".banner-btn").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });
    $('.loop').owlCarousel({
      center: true,
      items:2,
      loop:true,
      margin:10,
      responsive:{
          600:{
              items:4
          }
      }
    });
    $(".nav-slider-right").click(function(){
      owl.trigger('next.owl.carousel');
    });
    $(".nav-slider-left").click(function(){
      owl.trigger('prev.owl.carousel');
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items:1,
      margin:10,
      nav:false,
      autoHeight:true
    });
    $(".next").click(function(){
      owl.trigger('next.owl.carousel');
    });
    $(".prev").click(function(){
      owl.trigger('prev.owl.carousel');
    });
  });
