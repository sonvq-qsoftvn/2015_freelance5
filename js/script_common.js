$(function () {
    
    $('.trigger-visible-mobile').click(function (event) {
        $('.invisible-mobile').toggleClass('active');
        return false;
    });
    
    setTimeout(function () {
        $(".container-scrollable").niceScroll({
            autohidemode: false
        });
    }, 500);
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
    $('.lines-button').click(function () {
        console.log("vao day");
        $(this).toggleClass('close');
        $(this).next().toggleClass('active');
        return false;
    });
});
