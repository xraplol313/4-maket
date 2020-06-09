$(function () {
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1106,
                settings: {
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.btn__menu').on('click', function () {
        $('.menu__list').slideToggle();
    });

});