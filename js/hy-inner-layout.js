   document.addEventListener("DOMContentLoaded", () => {
        const brandBtn = document.querySelector("#brandBtn");
        const sideMenu = document.querySelector("#sideMenu");

        // 메뉴 열기/닫기
        brandBtn.addEventListener("click", () => {
          sideMenu.classList.toggle("open");
        });

        // 외부 클릭 시 닫기
        document.addEventListener("click", (e) => {
          if (!sideMenu.contains(e.target) && !brandBtn.contains(e.target)) {
            sideMenu.classList.remove("open");
          }
        });

        // 아코디언
        const accordions = document.querySelectorAll(".accordion-item");
        accordions.forEach((item) => {
          const header = item.querySelector(".accordion-header");
          header.addEventListener("click", () => {
            // 다른 아코디언 닫기
            accordions.forEach((i) => {
              if (i !== item) i.classList.remove("open");
            });
            // 현재 토글
            item.classList.toggle("open");
          });
        });
      });