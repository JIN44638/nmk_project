class Calendar {
  constructor() {
    this.currentDate = new Date();
    this.selectedDate = null;
    this.events = this.generateSampleEvents();

    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    this.init();
  }

  init() {
    // this.renderHeader();
    this.renderCalendar();
    this.attachEvents();
    // this.animateIn();
  }

  generateSampleEvents() {
    const events = {};
    const today = new Date();

    // 샘플 이벤트 템플릿
    const sampleEventTemplates = [
      {
        time: "09:00",
        title: "각角진 백자 이야기",
        type: "meeting",
        image: "/images/reservation/test.png",
      },
      {
        time: "14:00",
        title: "마나 모아나-신성한 바다의 예술, 오세아니아",
        type: "work",
        image: "/images/reservation/test.png",
      },
      {
        time: "10:30",
        title:
          "국보순회전, 모두가 함께하는 180일의 여정(정읍시립박물관 등 4개 기관)",
        type: "meeting",
        image: "/images/reservation/test.png",
      },
      {
        time: "16:00",
        title: "코드 리뷰",
        type: "work",
        image: "/images/reservation/test.png",
      },
      {
        time: "19:00",
        title: "두 발로 세계를 제패하다",
        type: "personal",
        image: "/images/reservation/test.png",
      },
      {
        time: "11:00",
        title: "산화코발트, 기증품에 스며든 푸른빛",
        type: "personal",
        image: "/images/reservation/test.png",
      },
      {
        time: "15:30",
        title: "제주에 나빌레라-광복 80주년 기념 석주명 특별전",
        type: "meeting",
        image: "/images/reservation/test.png",
      },
    ];

    // 샘플 이벤트 생성
    for (let i = 0; i < 12; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + Math.floor(Math.random() * 30) - 5);
      const dateKey = this.getDateKey(date);

      //초기화
      if (!events[dateKey]) events[dateKey] = [];

      // 랜덤 이벤트 템플릿 선택
      const randomTemplate =
        sampleEventTemplates[
          Math.floor(Math.random() * sampleEventTemplates.length)
        ];

      // 동적으로 날짜 포맷 생성
      const formattedDate = this.formatDateForEvent(date);

      // 이벤트 객체 생성
      const event = {
        formtoDate: `${formattedDate} ~ ${formattedDate}`,
        image: randomTemplate.image,
        time: randomTemplate.time,
        title: randomTemplate.title,
        type: randomTemplate.type,
      };

      events[dateKey].push(event);
    }

    return events;
  }

  formatDateForEvent(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  }

  renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendar = document.getElementById("calendar");

    if (!monthYear || !calendar) {
      console.error("Required elements not found");
      return;
    }

    // 현재 년도와 월 가져오기
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // 월/년 표시
    monthYear.textContent = `${this.monthNames[month]} ${year}`;

    // 캘린더 초기화
    calendar.innerHTML = "";

    // 요일 헤더 추가
    this.dayNames.forEach((day) => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-header";
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });

    // 첫 번째 날과 마지막 날
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    // 6주 * 7일 = 42일 렌더링
    for (let i = 0; i < 35; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = date.getDate();

      // 클래스 추가
      if (date.getMonth() !== month) {
        dayElement.classList.add("other-month");
      }

      if (this.isToday(date)) {
        dayElement.classList.add("today");
      }

      if (this.selectedDate && this.isSameDate(date, this.selectedDate)) {
        dayElement.classList.add("selected");
      }

      // 이벤트가 있는 날짜 표시
      const dateKey = this.getDateKey(date);
      if (this.events[dateKey]) {
        dayElement.classList.add("has-event");
      }

      dayElement.addEventListener("click", () => this.selectDate(date));
      // dayElement.addEventListener("click", function () {
      //   this.selectDate(date);
      // });
      calendar.appendChild(dayElement);
    }
  }

  selectDate(date) {
    this.selectedDate = new Date(date);
    this.showDetailPanel(date);
    const chgCal = document.querySelector(".calendar-container");
    chgCal.classList.add("show");
    this.renderCalendar();
  }

  showDetailPanel(date) {
    const panel = document.getElementById("detailPanel");
    const dateKey = this.getDateKey(date);
    const dayEvents = this.events[dateKey] || [];

    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };

    panel.innerHTML = `
      <div class="detail-header">
        <div class="selected-date">${date.getDate()}일</div>
        <div class="date-info">${date.toLocaleDateString(
          "ko-KR",
          dateOptions
        )}</div>
      </div>

      <div class="events-section">
        <div class="section-title">
          📋 전시 일정 (${dayEvents.length}개)
        </div>
        <div class="event-container">  
          ${
            dayEvents.length > 0
              ? dayEvents
                  .map(
                    (event) => `  
                <div class="event-item">
                  
                  <div class="event-info">
                    <div class="event-title">${event.title}</div>
                    <div class="event-time">${event.formtoDate}</div>
                  </div>
                </div>
              `
                  )
                  .join("")
              : '<div class="no-events">등록된 일정이 없습니다</div>'
          }
        </div>
      </div>
      
      <div class="events-section">
        <div class="section-title">
          🕐 예약 가능 시간
        </div>
        <div class="quick-actions">
          <button class="none-action-btn">10:00</button>
          <button class="none-action-btn">10:30</button>
          <button class="action-btn">12:00</button>
          <button class="none-action-btn">12:30</button>
          <button class="action-btn">13:00</button>
          <button class="action-btn">13:30</button>
          <button class="action-btn">14:00</button>
          <button class="action-btn">14:30</button>
          <button class="action-btn">15:00</button>
          <button class="action-btn">15:30</button>
        </div>
      </div>
    `;

    panel.classList.add("show");
  }

  // animateIn() {
  //   // GSAP 애니메이션
  //   gsap.fromto(".calendar-container", {
  //     y: -200,
  //     opacity: 1,
  //     duration: 0.8,
  //     ease: "power2.out",
  //   });

  //   gsap.to(".detail-panel", {
  //     x: 0,
  //     opacity: 1,
  //     duration: 0.8,
  //     delay: 0.3,
  //     ease: "power2.out",
  //   });
  // }

  attachEvents() {
    document.getElementById("prevBtn").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      // this.renderHeader();
      this.renderCalendar();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      // this.renderHeader();
      this.renderCalendar();
    });
  }

  isToday(date) {
    const today = new Date();
    return this.isSameDate(date, today);
  }

  isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}

// 캘린더 초기화
document.addEventListener("DOMContentLoaded", () => {
  new Calendar();
});
