$(function () {

  $(".menu a, .footer__arrow").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.slider__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="стрелка в лево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка в право"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        prevArrow: null,
        nextArrow: null,
      }
    },]
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });


  var mixer = mixitup('.portfolio__content');
});