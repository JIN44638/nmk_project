window.addEventListener("load", function () {
  // ✅ 이미지 다 로드된 뒤 강제로 업데이트

  const display2_wrap = new Swiper(".display2_wrap .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slidesPerView: 2, // ✅ 3장만 보이게

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: false,
      scale: 0.8,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
