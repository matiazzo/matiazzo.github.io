var $root = $('html, body');

(function () {

    $('.episode__card').click(function () {
        $root.animate({
            scrollTop: $('.video-container').offset().top
        }, 600);
        return false;
    });

})();