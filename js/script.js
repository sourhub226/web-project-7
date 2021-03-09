/* eslint-disable no-unused-vars */

//Preloader
$(window).on("load", function () {
    console.log("window load");

    $('.heading-text h1').addClass('animate__fadeInLeft ');
    $('.heading-text h2').addClass('animate__fadeInLeft animate__delay-1s');
    $('.heading-text h3').addClass('animate__fadeInLeft animate__delay-2s');
    $('.heading-text h4').addClass('animate__fadeInLeft animate__delay-2s');
    $('.heading-text a').addClass('animate__zoomIn animate__delay-3s');
    $('.heading-section img').addClass('animate__fadeIn animate__delay-2s');

    $('.load').fadeOut("fast");
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

//Glightbox gallery
var myLightbox = GLightbox({
    selector: '.gallery-image',
    zoomable: true,
    touchNavigation: true,
    touchFollowAxis: true,
});

//media query
if ($(window).width() < 840) {
    $('.offers div:nth-child(2)').toggleClass('animate__fadeInUp animate__fadeInRight');
    $('.offers div:nth-child(3)').toggleClass('animate__fadeInRight animate__fadeInLeft');
    $('.heading-text h1').addClass('animate__fadeInDown')
    $('.heading-text h2').addClass('animate__fadeInUp')
    $('.heading-text h3').addClass('animate__fadeInRight')
}

//scroll progress bar
$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height(),
        scrollPercent = (scroll / (dh - wh)) * 100;
    $('.scroll-bar hr').css('width', scrollPercent + '%');
});

if ($(window).width() < 680) {
    $('.menu-social a').contents().filter(function () {
        return this.nodeType === Node.TEXT_NODE;
    }).remove();
}
