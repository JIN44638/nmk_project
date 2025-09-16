document.addEventListener('DOMContentLoaded', () => {
  const hamBtn = document.getElementById('hamburger');
  const nav = document.getElementById('ham-nav');
  const subPanels = document.querySelectorAll('.sub-panel');

  // 햄버거 열기/닫기
  hamBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 버튼 클릭 자체는 외부클릭으로 치지 않게
    nav.classList.toggle('open');
    if (!nav.classList.contains('open')) {
      subPanels.forEach(p => p.classList.remove('active'));
    }
  });

  // 메인 → 해당 서브 열기
  document.querySelectorAll('.main-panel a[data-target]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (!target) return;

      subPanels.forEach(p => p.classList.remove('active'));
      target.classList.add('active');
    });
  });

  // 뒤로 → 서브 닫기
  document.querySelectorAll('.sub-panel .back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      subPanels.forEach(p => p.classList.remove('active'));
    });
  });

  // 네비 외부 + 빈 영역 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open')) {
      // nav 내부에서 실제 메뉴(li, a, button 같은 애들) 아닌 곳 클릭 → 닫기
      const clickedInsideMenu = e.target.closest('.main-panel, .sub-panel');
      if (!clickedInsideMenu || e.target === nav) {
        nav.classList.remove('open');
        subPanels.forEach(p => p.classList.remove('active'));
      }
    }
  });
});

  // 서치바 모달

  document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const modal = document.getElementById("search-modal");
  const content = modal.querySelector(".search-modal_content");

  // 버튼 클릭 시 모달 열기
  searchBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // 모달 바깥 클릭 시 닫기
  modal.addEventListener("click", (e) => {
    if (!content.contains(e.target)) {
      modal.style.display = "none";
    }
  });

const engBtn = document.querySelector("#lang-en-btn");
const korBtn = document.querySelector("#lang-kr-btn");

engBtn.addEventListener("click", function () {
  window.location.href = "eng.html";
});

korBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
});


