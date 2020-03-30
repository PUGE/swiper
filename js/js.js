var btnArr = document.getElementsByTagName('a');
var swiper = null
setTimeout(() => {
  swiper = swiperIt.init(document.getElementsByClassName('content')[0], {
    autoplay: 3000,
    showSlider: 3,
    width: 60,
    step: 0.8
  })
  // swiper.back()
}, 0)
