
const swiperCssSelector = ".swiper-container";
const swiperOptions = {
  loop: true,
  speed: 4000,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: false,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
}

var Swipes = new Swiper(swiperCssSelector, swiperOptions)