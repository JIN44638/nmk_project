window.addEventListener("load", function () {
  const ticketEng = document.getElementById("ticketEng");

  ticketEng.addEventListener("mouseenter", () => {
    ticketEng.classList.add("clicked");
  });
  ticketEng.addEventListener("mouseleave", () => {
    ticketEng.classList.remove("clicked");
  });

  ticketEng.addEventListener("click", () => {
    ticketEng.classList.add("clicked");

    // 이동 중 메시지 + 스피너 표시
    const msgEng = document.createElement("div");
    msgEng.className = "loading-message";
    msgEng.innerHTML = `
      <div class="spinner"></div>
      <p>Opening in a new tab…</p>
    `;
    document.body.appendChild(msgEng);

    // 2초 후 새 탭으로 이동
    setTimeout(() => {
      window.open("sayu-eng.html", "_blank");
      msgEng.remove(); // 메시지 제거
    }, 2000);
  });

  const closeBtn = document.querySelector(".closeBtn");
  const modal = document.querySelector(".modal-wrap");
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
