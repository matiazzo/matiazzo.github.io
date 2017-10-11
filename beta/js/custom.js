var $root = $('html, body');

$(function () {
    
   
$('#trigger').click(function(e){ 
    $('.description').toggleClass('open');
    $('.portfolio').toggleClass('open');
});

$('.email').click(function(e){    
    $(this).text('oi@andrematiazzo.com');
});

});
   
