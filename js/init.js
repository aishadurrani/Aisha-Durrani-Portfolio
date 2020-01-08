(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });


  

//   var instance = M.Carousel.getInstance(elem)
        
//   instance.next();
//   instance.next(3); // Move next n times.

//   instance.prev();
//   instance.prev(3); // Move previous n times.


//   instance.set();
//   instance.set(3); // Set to nth slide.
//       

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});
