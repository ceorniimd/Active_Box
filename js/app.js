// ojidaiet zagruzcu
$(function () {

    // fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(this).scrollTop();
    
    checkScroll(scrollPos, introH )

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH )
       
    });
     
    function checkScroll( scrollPos, introH) {
         if (scrollPos >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    // smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset -80
        }, 800);
        
        nav.removeClass("active");
        navToggle.removeClass("active");
    });
    
    // nav Toggle

    let nav = $("#nav");
    let navToggle = $("#nav_toggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active");
        navToggle.toggleClass("active");
    })


    // slider: https://kenwheeler.github.io/slick/ 
    let slider = $("#reviewsSlider")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false
    });
});