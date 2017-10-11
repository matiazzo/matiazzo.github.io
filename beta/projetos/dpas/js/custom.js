var $root = $('html, body');

(function () {
	'use strict';

	$('a[href$="#home"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});

	$('a[href$="#depoimentos"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});

	$('a[href$="#eudescobri"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});

	$('a[href$="#sobre"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});

	$('a[href$="#baixe"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});

	$('a[href$="#autoexame"]').click(function () {
		$root.animate({
			scrollTop:$($.attr(this,'href')).offset().top
		}, 600);
		return false;
	});


	var posicaoHome = $("#home").offset().top;
	var posicaoDepoimentos = $("#depoimentos").offset().top;
	var posicaoDescobri = $("#eudescobri").offset().top;
	var posicaoSobre = $("#sobre").offset().top;
	var posicaoBaixe = $("#baixe").offset().top;
	var posicaoExame = $("#autoexame").offset().top;


	$(window).scroll(function () {
		if ($(this).scrollTop() > posicaoDepoimentos) {
			$(".navbar-brand img").attr("src", "img/logo-min.png");
			$(".navbar-brand img").css("height", "50px");
			$(".navbar-default .navbar-toggle").css("margin-top", "15px");
		} else {
			$(".navbar-brand img").attr("src", "img/logo.png");
			$(".navbar-brand img").css("height", "80px");
			$(".navbar-default .navbar-toggle").css("margin-top", "30px");
		}
		if ($(this).scrollTop() > posicaoDepoimentos && $(this).scrollTop() < posicaoDescobri || $(this).scrollTop() > posicaoExame)  {
			$(".navbar-brand img").attr("src", "img/logo-min-w.png");
		}
		if ($(this).scrollTop() > posicaoDepoimentos && $(this).scrollTop() < posicaoDescobri || $(this).scrollTop() > posicaoBaixe) {
			$(".navbar-default .navbar-nav>li>a").css("color", "#e7e7e7");
		} else {
			$(".navbar-default .navbar-nav>li>a").css("color", "#f94179");
		}

	});

})();

