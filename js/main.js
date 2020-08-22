(function ($) {
    "use strict";
    
    /*----------------------------
     jQuery Slickmenu
    ------------------------------ */
    $('#menu').slicknav();
    /*----------------------------
     jQuery Stickymenu
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.sticky-header').addClass("sticky");
        }
        else {
            $('.sticky-header').removeClass("sticky");
        }
    });
    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();
    /*----------------------------
     owl active
    ------------------------------ */
    $(".owl-demo").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
      });

      $(".owl-demo2").owlCarousel({
        autoPlay: true,
        slideSpeed: 50000,
        pagination: true,
        navigation: false,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
      });

      $(".owl-demo3").owlCarousel({
        autoPlay: true,
        slideSpeed: 50000,
        pagination: true,
        navigation: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
      });
    /*----------------------------
     type active
    ------------------------------ */
    $(function () {
        $(".element").typed({
            strings: ["graduate", "ml enthusiast", "smart worker", "data science aspirant"],
            typeSpeed: 100,
            loop: true
        });
    });
    /*----------------------------
     Smooth Scrool
    ------------------------------ */
    $('a').on('click', function (event) {
        var $anchor = $($(this).attr('href')).offset().top - 60;
        $('body, html').animate({
            scrollTop: $anchor
        }, 1500);
        event.preventDefault();
        return false;
    });

    /*----------------------------
     Water JS Skill Box
    ------------------------------ */
    $('#demo-1').waterbubble({
        txt: '90%',
        data: 0.9,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
    $('#demo-2').waterbubble({
        txt: '75%',
        data: 0.75,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
    $('#demo-3').waterbubble({
        txt: '70%',
        data: 0.7,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
    $('#demo-4').waterbubble({
        txt: '60%',
        data: 0.6,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
      $('#demo-5').waterbubble({
        txt: '60%',
        data: 0.6,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
      $('#demo-6').waterbubble({
        txt: '70%',
        data: 0.7,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
      $('#demo-7').waterbubble({
        txt: '40%',
        data: 0.4,
        waterColor: '#3498db',
        textColor: '#ecf0f1'
      });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });
    /*----------------------------
     Preloader
    ------------------------------ */
    $(window).on('load',function () {
        $("#status").on('fadeOut',"slow");
        $("#preloader").on('delay',500).on('fadeOut',"slow").remove();
    })
  
})(jQuery);