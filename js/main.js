$(document).ready(function () {
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 63) {
            $(".navbar").addClass('fixd-navbar');
        } else {
            $(".navbar").removeClass('fixd-navbar');
        }
    });
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $(".my-nav").toggleClass("back");
        $(".body-overlay").toggleClass("back");
        $("body").toggleClass("body-over");
    });
    $(".body-overlay").click(function () {
        $(this).toggleClass("back");
        $('#nav-icon1').toggleClass('open');
        $(".my-nav").toggleClass("back");
        $("body").toggleClass("body-over");
    });
    
    $(window).scroll(function () {
        var $height = $(window).scrollTop();
        if ($height > 50) {
            $('#header , .third-nav').addClass('active-fixed');
        } else {
            $('#header , .third-nav').removeClass('active-fixed');
        }
    });
});

/*loader*/
window.onload =function(){
    
    $(".loaders-wrapper ").fadeOut(600)
}
 
    /* ------------------------top---------------------------*/
    
	var scroltopbtn = $("#scrollUp");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			scroltopbtn.fadeIn();
           
		} else {
			$(scroltopbtn).fadeOut();
		}
     
	});
	scroltopbtn.on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 600);
	});
/***********************************testemonials***********************************************************/


 $(document).ready(function () {

         $('.client-single').on('click', function (event) {
            event.preventDefault();

            var active = $(this).hasClass('active');

            var parent = $(this).parents('.testi-wrap');

            if (!active) {
                var activeBlock = parent.find('.client-single.active');

                var currentPos = $(this).attr('data-position');

                var newPos = activeBlock.attr('data-position');

                activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
                activeBlock.attr('data-position', currentPos);

                $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
                $(this).attr('data-position', newPos);

            }
        });
   
   }(jQuery));
