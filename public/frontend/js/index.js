 $(document).ready(function(){
    $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});