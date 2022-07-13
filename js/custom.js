$(document).ready(function(){

$('.banner_slide').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  prevArrow: ' <i class="fa-solid fa-circle-chevron-left"></i>',
   nextArrow: '<i class="fa-solid fa-circle-chevron-right"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});