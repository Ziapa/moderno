$(function(){

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

    var mixer = mixitup(".products__inner-box");
    




    
})