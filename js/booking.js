$(function () {
	$("#choose-date").click(function(e){
		e.preventDefault();
		$("#date-booking").removeClass('hidden');
	});

    $("#step-1, #step-2, .hour-picker").on('click', 'li', function(){
    	$("#step-1 ul li, #step-2 ul li, .hour-picker li").removeClass("active");
    	$(this).addClass("active");
    });

     $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: false,
                format:'d.m.Y',                
                locale: 'fr',
                viewMode: 'days',
                daysOfWeekDisabled: [0, 6],
                allowInputToggle: false
            }).on('dp.change', function(){
     			$(".hour-picker").removeClass('hidden');
   			});;

});
