$('.news-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.dropdown').hover(function () {
    $(this).find('.dropdown-menu').fadeToggle();
});

new WOW().init();