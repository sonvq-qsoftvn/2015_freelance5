<<<<<<< HEAD
jQuery(function ($) {
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 6,
            max: 23,
            values: [6, 23],
            slide: function (event, ui) {
                var tmpstart = ui.values[ 0 ];
                var tmpend = ui.values[ 1 ];
                if(tmpstart < 10) {
                    tmpstart = "0" + tmpstart;
                }
                if(tmpend < 10) {
                    tmpend = "0" + tmpend;
                }
                $("#time-range").val(tmpstart + ":00" + " - " + tmpend + ":00");
            }
        });
        var tmpFirstStart = $("#slider-range").slider("values", 0);
        var tmpFirstEnd = $("#slider-range").slider("values", 1);
        if(tmpFirstStart < 10) {
            tmpFirstStart = "0" + tmpFirstStart;
        }
        if(tmpFirstEnd < 10) {
            tmpFirstEnd = "0" + tmpFirstEnd;
        }
        $("#time-range").val(tmpFirstStart + ":00" +
                " - " + tmpFirstEnd  + ":00");
    });
});
=======
jQuery(function ($) {
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 6,
            max: 23,
            values: [6, 23],
            slide: function (event, ui) {
                var tmpstart = ui.values[ 0 ];
                var tmpend = ui.values[ 1 ];
                if(tmpstart < 10) {
                    tmpstart = "0" + tmpstart;
                }
                if(tmpend < 10) {
                    tmpend = "0" + tmpend;
                }
                $("#time-range").val(tmpstart + ":00" + " - " + tmpend + ":00");
            }
        });
        var tmpFirstStart = $("#slider-range").slider("values", 0);
        var tmpFirstEnd = $("#slider-range").slider("values", 1);
        if(tmpFirstStart < 10) {
            tmpFirstStart = "0" + tmpFirstStart;
        }
        if(tmpFirstEnd < 10) {
            tmpFirstEnd = "0" + tmpFirstEnd;
        }
        $("#time-range").val(tmpFirstStart + ":00" +
                " - " + tmpFirstEnd  + ":00");
    });
});
>>>>>>> 725663292a3b44b95c1911a9d12bdf130c0c8d0b
