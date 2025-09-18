document.addEventListener("DOMContentLoaded", () => {
  const kdhBtn = document.querySelector(".kdh .kdh-start-btn");
  if (!kdhBtn) return;

  kdhBtn.addEventListener("click", (e) => {
    // ripple
    const rect = kdhBtn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const ripple = document.createElement("span");
    Object.assign(ripple.style, {
      position: "absolute",
      left: `${e.clientX - rect.left - size/2}px`,
      top: `${e.clientY - rect.top - size/2}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: "rgba(255,255,255,.45)",
      transform: "scale(0)",
      opacity: "1",
      pointerEvents: "none",
      mixBlendMode: "soft-light",
      transition: "transform .45s ease, opacity .6s ease",
    });
    kdhBtn.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = "scale(1)";
      ripple.style.opacity = "0";
    });
    setTimeout(() => ripple.remove(), 650);

    // 실제 게임 시작 로직
    // window.location.href = "/game";
    // startGame();
  });
});
