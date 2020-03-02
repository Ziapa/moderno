$(function () {

  $(".rate-stear").rateYo({
    starWidth: "12px",
    rating: 3.6,
    readOnly: true
  });

  $(".product-slider__inner").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false

  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  var mixer = mixitup(".products__inner-box");






})