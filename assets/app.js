$('.product-tabs-btns ul .nav-item:first-child button').addClass('active');
$('.product-tabs .tab-content .tab-pane:first-child').addClass('active show');

$(".openbtn").click(function () {
  $("#myNav").addClass("active");
});

$(".closebtn").click(function () {
  $("#myNav").removeClass("active");
});

$(".search a").click(function () {
  $(".search-bar").addClass("active");
});

$(".search-close-ic a").click(function () {
  $(".search-bar").removeClass("active");
});

$(".product-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fal fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fal fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".banner-slider-main").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fal fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fal fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".inner_slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="fal fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fal fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".image-slider-main").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".content-slider-main",
});
$(".content-slider-main").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".image-slider-main",
  prevArrow:
    '<div class="slick-prev"><i class="fal fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fal fa-chevron-right"></i></div>',
  dots: false,
  arrows: true,
  focusOnSelect: true,
});

$(".product-main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-detail-btnslider",
});
$(".product-detail-btnslider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".product-main-img-slider",
});

// Initialize Wow
new WOW().init();
