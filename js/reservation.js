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

    this.dayNames = ["일", "월", "화", "수", "목", "금", "토"];

    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  generateSampleEvents() {
    const events = {};
    const today = new Date();

    // 샘플 이벤트 생성
    for (let i = 0; i < 15; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + Math.floor(Math.random() * 30) - 15);
      const dateKey = this.getDateKey(date);

      if (!events[dateKey]) events[dateKey] = [];

      const sampleEvents = [
        { time: "09:00", title: "팀 미팅", type: "meeting" },
        { time: "14:00", title: "프로젝트 검토", type: "work" },
        { time: "10:30", title: "고객 미팅", type: "meeting" },
        { time: "16:00", title: "코드 리뷰", type: "work" },
        { time: "19:00", title: "저녁 약속", type: "personal" },
        { time: "11:00", title: "병원 예약", type: "personal" },
        { time: "15:30", title: "회의실 예약", type: "meeting" },
      ];

      //현재 일자 랜덤으로 이벤트 추가 되고 있음. 데이터 받아온다면 여기서 수정.
      const randomEvent =
        sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      events[dateKey].push(randomEvent);
    }

    return events;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  }

  render() {
    this.renderHeader();
    this.renderCalendar();
  }

  renderHeader() {
    const monthYear = document.getElementById("monthYear");
    monthYear.textContent = `${this.currentDate.getFullYear()}년 ${
      this.monthNames[this.currentDate.getMonth()]
    }`;
  }

  renderCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    // 요일 헤더
    this.dayNames.forEach((day) => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-header";
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });

    // 달력 날짜들
    const firstDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    const lastDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    );

    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = date.getDate();

      // 클래스 추가
      if (date.getMonth() !== this.currentDate.getMonth()) {
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

      // 클릭 이벤트
      dayElement.addEventListener("click", () => this.selectDate(date));

      calendar.appendChild(dayElement);
    }
  }

  selectDate(date) {
    this.selectedDate = new Date(date);
    this.render();
    this.showDetailPanel(date);
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
                            📋 일정 (${dayEvents.length}개)
                        </div>
                        ${
                          dayEvents.length > 0
                            ? dayEvents
                                .map(
                                  (event) => `
                                <div class="event-item">
                                    <div class="event-time">${event.time}</div>
                                    <div class="event-title">${event.title}</div>
                                </div>
                            `
                                )
                                .join("")
                            : '<div class="no-events">등록된 일정이 없습니다</div>'
                        }
                    </div>
                    <div class="events-section">
                        <div class="section-title">
                            🕐 예약 가능 시간
                        </div>
                        <div class="quick-actions">
                        <button class="action-btn">10:00</button>
                        <button class="action-btn">10:30</button>
                        <button class="action-btn">12:00</button>
                        <button class="action-btn">12:30</button>
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

  attachEvents() {
    document.getElementById("prevBtn").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.render();
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
