window.addEventListener("load", function () {
  var display1Swiper = new Swiper(".display1Swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, // ✅ 가운데 정렬
    slidesPerView: 2, // ✅ 3장만 보이게
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
      slideShadows: true,
    },
    loop: true, // 무한 반복
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
