//Preloader
$(window).on("load", function () {
	console.log("window load");
	$('.load').fadeOut("slow");
});

//Activate WOW
new WOW().init();



//Menu
$('.open-menu').click(function () {
	$('.main-nav').removeClass('animate__fadeOutLeft');
	$('.main-nav').removeClass('animate__slideOutLeft');
	$('.main-nav').addClass('animate__slideInLeft');

});


$('.close-menu').click(function () {
	$('.main-nav').addClass('animate__slideOutLeft');
});



//Smooth scroll
$(function () {
	$('a[href*=\\#]:not([href=\\#])').click(function () {
		if (!$(this).is("#choose-btn")) {
			$(function () {
				$('.main-nav').addClass('animate__slideOutLeft');
			});
		}


		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});


//Filterable gallery
$(document).ready(function () {
	$(".button").click(function (e) {

		e.preventDefault();

		var name = $(this).attr("data-filter");
		if (name == "all") {
			$(".filter").show("2000");


		} else {
			$(".filter").not("." + name).hide("2000");
			$(".filter").filter("." + name).show("2000");
		}
	});
	$(".button").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
});
