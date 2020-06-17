$(function () {
    $('.Fairy-tail__slider, .Our-trip__slider').slick({ 
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade:true
    });

    $('.btn__menu').on('click', function () {
        $('.menu__list').slideToggle();
    });

});