document.addEventListener('DOMContentLoaded', () => {
  const hamBtn = document.getElementById('hamburger');
  const nav = document.getElementById('ham-nav');
  const subPanels = document.querySelectorAll('.sub-panel');

  // 햄버거 열기/닫기
  hamBtn.addEventListener('click', (e) => {
    e.stopPropagation();
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

  // 네비 외부 클릭 → 닫기
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open')) {
      const clickedInsideMenu = e.target.closest('.main-panel, .sub-panel');
      if (!clickedInsideMenu || e.target === nav) {
        nav.classList.remove('open');
        subPanels.forEach(p => p.classList.remove('active'));
      }
    }
  });

  // ----------------------------
  // 검색 모달 공통
  const modal = document.getElementById("search-modal");
  const content = modal.querySelector(".search-modal_content");

  function openModal() {
    modal.style.display = "flex";
  }
  function closeModal(e) {
    if (!content.contains(e.target)) {
      modal.style.display = "none";
    }
  }

  // 헤더 검색 버튼
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", openModal);

  // 네비 내부 검색 아이콘
  const navSearchBtn = document.querySelector("#ham-nav .search-icon a");
  navSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  // 모달 바깥 클릭 시 닫기
  modal.addEventListener("click", closeModal);
});
