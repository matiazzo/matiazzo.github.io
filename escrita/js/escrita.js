$(document).ready(function() {

  $('.newest').on('click', function() {
   $('#posts-order').removeClass('flex-column-reverse');
   $('.oldest').removeClass('b--accent');
   $('.oldest').addClass('b--transparent');
   $(this).addClass('b--accent');
 });

    $('.oldest').on('click', function() {
   $('#posts-order').addClass('flex-column-reverse');
   $('.newest').removeClass('b--accent');
   $('.newest').addClass('b--transparent');
   $(this).addClass('b--accent');
 });
  // $(window).scroll(function(){
  //   var windowPosition = parseInt($(window).scrollTop());
  //   setTimeout(function(){
  //     var editionsPosition = parseInt($('#editions').offset().top);
  //     setTimeout(function(){
  //       // Shows menu on scroll top
  //       if (editionsPosition > windowPosition) {
  //         $('#editions').addClass('fixed bottom-1 right-2 mw3 tr f7');
  //       } else if (editionsPosition > windowPosition) {
  //        $('#editions').removeClass('fixed bottom-1 right-2 mw3 tr f7');
  //       } 
  //     }, 50);
  //   }, 50);
  // });

});