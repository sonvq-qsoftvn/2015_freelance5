<<<<<<< HEAD
jQuery(function ($) {
    $(function () {
        $('.carousel').carouFredSel({
            width: $(".slider-container").width(),
            height: $(".slider-container").height(),
            align: false,
            items: {
                visible: 1,
                width: 'variable',
                height: 'variable'
            },
            scroll: {
                fx: "crossfade"
            },
            prev: '.prev-slider',
            next: '.next-slider'
        });

        $(window).resize(function () {
            var newCss = {
                width: $('.slider-container').width(),
                height: $('.slider-container').height()
            };
            $('.carousel').css('width', newCss.width * 4);
            $('.carousel').parent().css(newCss);
            $('.carousel div').css(newCss);
        }).resize();

    });
});
=======
jQuery(function ($) {
    $(function () {
        $('.carousel').carouFredSel({
            width: $(".slider-container").width(),
            height: $(".slider-container").height(),
            align: false,
            items: {
                visible: 1,
                width: 'variable',
                height: 'variable'
            },
            scroll: {
                fx: "crossfade"
            },
            prev: '.prev-slider',
            next: '.next-slider'
        });

        $(window).resize(function () {
            var newCss = {
                width: $('.slider-container').width(),
                height: $('.slider-container').height()
            };
            $('.carousel').css('width', newCss.width * 4);
            $('.carousel').parent().css(newCss);
            $('.carousel div').css(newCss);
        }).resize();

    });
});
>>>>>>> 725663292a3b44b95c1911a9d12bdf130c0c8d0b
