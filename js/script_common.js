$(function () {
    
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
