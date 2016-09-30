$(document).ready(function(){
  // time between image rotate

  var setHeight = $('.grid__item').height();
  $('#prizes__grid li').css('min-height', setHeight);

  var delay = 1000;
  
  // for each list item in 
  // the rotator ul, generate
  // show a random list item
  $('#prizes__grid li').each(function(){
    // save images in an array
    var $imgArr = $(this).children();
    // show a random image
    $imgArr.eq(Math.floor(Math.random()*$imgArr.length)).show();
  });
  // run the changeImage function after every (delay) miliseconds
  setInterval(function(){
    changeImage();
  },delay);
  
  function changeImage(){
    // save list items in an array
    var $liArr = $('#prizes__grid li');
    // select a random list item
    var $currLi = $liArr.eq(Math.floor(Math.random()*$liArr.length));
    // get the currently visible image
    var $currImg = $('.grid__item:visible img', $currLi);
    // var $currImg = $(('.grid__item').css('opacity', '1'), $currLi);
    if ($currImg.next().length == 1) {
      var $next = $currImg.next();
    } else {
      var $next = $('.grid__item:first img', $currLi);
    }
    $currImg.fadeOut();
    $next.fadeIn();
    // $currImg.css('opacity', '1');
    // $next.css('opacity', '0');
  }  
});
