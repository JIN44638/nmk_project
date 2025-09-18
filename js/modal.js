window.addEventListener("load", function () {
  const ticket = document.getElementById("ticket");

  ticket.addEventListener("mouseenter", () => {
    ticket.classList.add("clicked");
  });
  ticket.addEventListener("mouseleave", () => {
    ticket.classList.remove("clicked");
  });

  ticket.addEventListener("click", () => {
    ticket.classList.add("clicked");

    // 이동 중 메시지 + 스피너 표시
    const msg = document.createElement("div");
    msg.className = "loading-message";
    msg.innerHTML = `
      <div class="spinner"></div>
      <p>이동 중입니다...</p>
    `;
    document.body.appendChild(msg);

    // 2초 후 새 탭으로 이동
    setTimeout(() => {
      window.open("sayu.html", "_blank");
      msg.remove(); // 메시지 제거
    }, 2000);
  });

  const closeBtn = document.querySelector(".closeBtn");
  const modal = document.querySelector(".modal-wrap");
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
