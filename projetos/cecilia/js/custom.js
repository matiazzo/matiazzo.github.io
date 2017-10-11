var $root = $('html, body');

$('a[href$="#autora"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 500);
	return false;
});

$('a[href$="#sumario"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 600);
	return false;
});

$('a[href$="#agenda"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 600);
	return false;
});

$('a[href$="#contato"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 600);
	return false;
});

$('a[href$="#compre"]').click(function () {
	$root.animate({
		scrollTop:$($.attr(this,'href')).offset().top
	}, 600);
	return false;
});