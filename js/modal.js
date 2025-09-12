window.addEventListener("load" , function(){
    const ticket = document.getElementById("ticket");
      ticket.addEventListener("mouseenter", () => {
        ticket.classList.add("clicked");
      });
      ticket.addEventListener("mouseleave", () => {
        ticket.classList.remove("clicked");
      });
      ticket.addEventListener("click", () => {
        ticket.classList.add("clicked");
        setTimeout(() => {
          window.location.href =
            "https://www.museum.go.kr/MUSEUM/contents/M0201070100.do?showHallId=631120&showroomCode=DM0075"; // 이동할 페이지
        }, 100); // 애니메이션 끝난 후 이동
      });

      const closeBtn = this.document.querySelector(".closeBtn")
      const modal = this.document.querySelector(".modal-wrap")
      closeBtn.addEventListener("click" , function(){
        modal.style.display = "none"
      })
})