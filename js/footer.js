window.addEventListener("load", function () {
  const goTopBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작"); //스크롤 시작하면 콘솔에 "스크롤시작" 글자찍힘
    //스크롤값이 95보다 크면
    if (this.document.documentElement.scrollTop > 95) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });
  goTopBtn.addEventListener("click", function () {
    // 스크롤to는 어디로 가라는 의미 = 윈도위에서 맨위로 올리기(행동 스무스하게)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
