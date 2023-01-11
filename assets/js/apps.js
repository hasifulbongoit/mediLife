// slick slider

// slick slider

$(document).ready(function () {
  $(".our_service_slider").slick({
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});
