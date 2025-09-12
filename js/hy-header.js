document.addEventListener('DOMContentLoaded', () => {
  const hamBtn = document.getElementById('hamburger');
  const nav = document.getElementById('ham-nav');
  const mainPanel = document.querySelector('.main-panel');
  const subPanels = document.querySelectorAll('.sub-panel');

  // 햄버거 열기/닫기
  hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    // 닫을 때 모든 패널 초기화
    if (!nav.classList.contains('open')) {
      mainPanel.classList.remove('active');
      subPanels.forEach(p => p.classList.remove('active'));
    } else {
      mainPanel.classList.add('active');
    }
  });

  // 메인 → 해당 서브 열기
  document.querySelectorAll('.main-panel a[data-target]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (!target) return;
      // 모든 서브 닫기 후 해당만 열기
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
});
