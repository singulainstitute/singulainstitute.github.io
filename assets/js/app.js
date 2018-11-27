/*
* ----------------------------------------------------------------------------------------
    Template Name: mr stater
    Template URI: https://spellbit.com/
    Description: 
    Author: mahedi amin
    Author URI: https://mahediamin.com
    Version: 1.0.0

* ----------------------------------------------------------------------------------------
*/

(function ($) {
    'use strict';

    jQuery(document).on("ready", function () {



        /**
        -- Offcanvas Menu Scrollbar Activation
        **/

        $("#ace-sidnavac").niceScroll({
            cursorborder: "",
            cursorcolor: "#022B93"
        });

        /**
         --Offcanvas Menu Activation
         **/

        $(".open-offcanvasmenu").on("click", function () {
            $(".ace-sidnav, .ace-overlay").addClass("active");
            $("body").addClass("sidenavOpen");
        });

        $(".sidenav-close, .ace-overlay").on("click", function () {

            $(".ace-sidnav, .ace-overlay").removeClass("active");
            $("body").removeClass("sidenavOpen");
        });




        /**
         --Case Studay Activation
         **/

        $(".casClick").on("click", function () {
            $(".casestudytab.nav").toggleClass("vis");
        });

        $(".casestudytab.nav li").on("click", function () {
            $(".casestudytab.nav").removeClass("vis");

        });


        if ($(window).width() < 991.98) {
            let change_htmlbutton = document.getElementById('chnagetext');

            change_htmlbutton.innerHTML = '<i class="icofont-question-square"></i>';
        }

        /**
         --Maginify popup Activation
         **/

        //image popup

        $('.img-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


        //video popup

        $('.playVideo').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });


        /**
         --Messonary Activation
         **/

        $('.grid').imagesLoaded(function () {
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 0,
                }
            });
        });

        // grid item 2
        $('.grid2').imagesLoaded(function () {
            var $grid = $('.grid2').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });
        });

        //main filter activation
        $('.filter-list').on('click', 'li, button',
            function () {
                $('.filter-list button', '.filter-list li').removeClass(
                    'active');
                $(this).addClass('active');
                var filterValue = $(this).attr(
                    'data-filter');
                $('.grid').isotope({
                    filter: filterValue
                });
                $(window).trigger('resize');
            });

        /**
         --Counter Up Activation
         **/

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        /**
         --Owl Caosel Activation
         **/

        // slider activation
        $('.ace_slider_active').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplayTimeout: 6000,
            mouseDrag: false,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });



        //slider text animation for owl carosel

        $(".ace_slider_active").on("translate.owl.carousel", function () {
            $(".banner-content h3, .banner-content h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".banner-content p, .banner-content .btn").removeClass("animated fadeInDown").css("opacity", "0");
            $(".video-icon2").removeClass("animated jackInTheBox").css("opacity", "0");

        });

        $(".ace_slider_active").on("translated.owl.carousel", function () {
            $(".banner-content h3, .banner-content h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".banner-content p, .banner-content .btn").addClass("animated fadeInDown").css("opacity", "1");
            $(".video-icon2").addClass("animated jackInTheBox").css("opacity", "1");

        });

        // Testimonials activation

        $('.testimonials_active').owlCarousel({
            loop: false,
            margin: 10,
            mouseDrag: true,
            nav: true,
            dots: false,
            navText: ['<i class="icofont-double-right"></i>', '<i class="icofont-double-left"></i>'],
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });

        // case studyt active

        $('.active_casestudy').owlCarousel({
            loop: false,
            margin: 0,
            mouseDrag: false,
            animateOut: 'zoomIn',
            animateIn: 'zoomOut',
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });

        //testimonilas animation

        $(".testimonials_active, .active_casestudy").on("translate.owl.carousel", function () {
            $(".testimonails-text p, .testimonails-text > i, .testimonails-text > img").removeClass("animated fadeInUp").css("opacity", "0");
            $(".animation-t").removeClass("animated fadeInDown").css("opacity", "0");
            $(".testimonils-img img").removeClass("animated fadeInUp").css("opacity", "0");
            $(".case-study-text h2, .case-study-text span").removeClass("animated fadeInUp").css("opacity", "0");
            $(".case-study-text p,.case-study-text .btn ").removeClass("animated fadeInDown").css("opacity", "0");


        });

        $(".testimonials_active, .active_casestudy").on("translated.owl.carousel", function () {
            $(".testimonails-text p, .testimonails-text > i, .testimonails-text > img").addClass("animated fadeInUp").css("opacity", "1");
            $(".animation-t").addClass("animated fadeInDown").css("opacity", "1");
            $(".testimonils-img img").addClass("animated fadeInUp").css("opacity", "1");
            $(".case-study-text h2, .case-study-text span").addClass("animated fadeInUp").css("opacity", "1");
            $(".case-study-text p,.case-study-text .btn ").addClass("animated fadeInDown").css("opacity", "1");

        });


        // brand activation

        $('.brand-product-active').owlCarousel({
            loop: true,
            margin: 10,
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 2
                },
                479: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                980: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        });

        // Historyu List Activation
        $('.historyList-active').owlCarousel({
            loop: false,
            margin: 15,
            nav: true,
            navText: ['<i class="icofont-long-arrow-right"></i>', '<i class="icofont-long-arrow-left"></i>'],
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        });

        // Ace Services Activation
        $('.ace-services-active').owlCarousel({
            loop: true,
            margin: 30,
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 4
                },
                1600: {
                    items: 4
                },
                1900: {
                    items: 5
                },

            }
        });

        // testimonials activation
        $('.tesimonials3-active').owlCarousel({
            margin: 0,
            mouseDrag: true,
            autoplay: true,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });

        // gallery poost active

        $('.pst-gallery-active').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });


        /**
         -- Mobile Menu Activation
         **/


        $(".menu-click").on("click", function () {

            $(".main-menu > ul").toggleClass('show');
            return false;
        });



        if ($(window).width() < 991.98) {
            // for mobile menu

            $(".main-menu ul li.menu-item-has-children").on("click", function () {

                $(this).children("ul.sub-menu").slideToggle();
                $(this).toggleClass('change-icon');
                return false;

            });


        };



        $(".main-menu ul li, .main-menu ul ul li").on("click", function (p) {
            p.stopPropagation();
        });



        // sticky menu
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                $(".navbar").removeClass("sticky fadeInDown animated");
            } else {
                $(".navbar").addClass("sticky fadeInDown animated");
            }
        });

        // scroll to top
        $.scrollUp({
            scrollText: '<i class="icofont icofont-swoosh-up"></i>'

        });









    });

})(jQuery);
