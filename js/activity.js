window.addEventListener("load", function () {
  var swiperActivity = new Swiper(".swiper-activity", {
    direction: "vertical",
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: -280,   // 기본(769px 이상) 간격
    loop: true,
    speed: 600,

    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1.2,
      slideShadows: false,
      scale: 0.8,
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    allowTouchMove: false,
    simulateTouch: false,
    keyboard: { enabled: false },
    mousewheel: false,
    grabCursor: false,

    // ✅ 반응형으로 768px 이하에서만 간격 줄이기
    breakpoints: {
      0: {                 // 0 ~ 768px
        spaceBetween: -330 // 원하는 값으로 조정(-80~-160 등)
      },
      // 769: {               // 769px 이상
      //   spaceBetween: -250 // 원래 값 유지
      // }
    }
  });
});
