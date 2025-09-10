window.addEventListener("load", function () {
 var mySwiper = new Swiper('.swiper-container', {
  initialSlide: 3,
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true, 
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: false,
  },
  watchSlidesProgress: true,     // 각 슬라이드 진행 상태 추적
  watchSlidesVisibility: true,   // 현재 보이는 슬라이드만 감지

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    769: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }
    }
  }
});

});