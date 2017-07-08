var $root = $('html, body');

function setHeight() {
	windowHeight = $(window).innerHeight();
	$('#header').css('min-height', windowHeight);
};
setHeight();

$('.cta').click(function() {
  $(this).toggleClass('active');
});

/*Scroll anchor points*/
$('a[href$="#palestras"], a[href$="#workshops"], a[href$="#localizacao"], a[href$="inscricoes"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 500);
	return false;
});