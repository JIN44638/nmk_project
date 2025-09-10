window.addEventListener("load", function () {
   var mynewSwiper = new Swiper(".swiper-activity", {
    direction: "vertical",
    centeredSlides: true,
    slidesPerView: 2,          // ✅ 정확히 2장만
    spaceBetween: 16,          // (원하면 0)
    loop: true,

    // coverflow를 쓰면 이웃 슬라이드가 살짝 보일 수 있어요.
    // 그래도 overflow:hidden이면 2장 영역만 보입니다.
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 300,
      depth: 200,
      modifier: 1.2,
      slideShadows: false,
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    mousewheel: {
      forceToAxis: false,
      // invert: true, // 필요 시 방향 반전
    },

    keyboard: { enabled: true },
    roundLengths: true,        // 서브픽셀 흔들림 방지(부드럽게)
  });
});
