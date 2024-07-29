//tabs
function isTabs(activeContent = 'active', activeBtn = 'active', currentBtn = 0) {
  const btns = document.querySelectorAll('[data-tab-btn]');
  const contents = document.querySelectorAll('[data-tab-content]');

  if (btns.length > 0 && contents.length > 0) {
    btns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const btnData = btn.getAttribute('data-tab-btn');
        const attrContents = document.querySelectorAll(`[data-tab-content=${btnData}]`);

        if (attrContents.length > 0) {
          btns.forEach((elem) => elem.classList.remove(activeBtn));
          contents.forEach((elem) => elem.classList.remove(activeContent));

          btn.classList.add(activeBtn);
          attrContents.forEach((item) => item.classList.add(activeContent));
        }
      });
    });
  }

  btns[currentBtn].click();
}

isTabs();

//timer

function isTimer() {
  // let dateNow = new Date();
  let minutesDeadline = new Date(2024, 6, 30, 20);

  // dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

  let timerId = null;

  function countdownTimer() {
    const diff = minutesDeadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    let timers = document.querySelectorAll('.timer');
    for (let timer of timers) {
      // let timerDay = timer.querySelector('[data-timer-day]');
      let timerHour = timer.querySelector('[data-timer-hour]');
      let timerMinuts = timer.querySelector('[data-timer-minuts]');
      let timerSeconds = timer.querySelector('[data-timer-seconds]');
      let timerMilSeconds = timer.querySelector('[data-timer-milseconds]');

      // let timerDayItems = timerDay.querySelectorAll('.timer__item-num');
      let timerHourItems = timerHour.querySelectorAll('.timer__item-num');
      let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
      let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');
      let timerMilSecondsItems = timerMilSeconds.querySelectorAll('.timer__item-num');

      // const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

      // let dayString = days < 10 ? '0' + days : String(days);
      let hourString = hours < 10 ? '0' + hours : String(hours);
      let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
      let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
      let milSecondsString = milSeconds < 10 ? '0' + milSeconds : String(milSeconds);

      // let dayArr = dayString.split('');
      let hourArr = hourString.split('');
      let minutesArr = minutesString.split('');
      let secondsArr = secondsString.split('');
      let milSecondsArr = milSecondsString.split('');

      // for (let i = 0; i < timerDayItems.length; i++) {
      //   timerDayItems[i].innerHTML = dayArr[i];
      // }
      for (let i = 0; i < timerHourItems.length; i++) {
        timerHourItems[i].innerHTML = hourArr[i];
      }
      for (let i = 0; i < timerMinutesItems.length; i++) {
        timerMinutesItems[i].innerHTML = minutesArr[i];
      }
      for (let i = 0; i < timerSecondsItems.length; i++) {
        timerSecondsItems[i].innerHTML = secondsArr[i];
      }
      for (let i = 0; i < timerMilSecondsItems.length; i++) {
        timerMilSecondsItems[i].innerHTML = milSecondsArr[i];
      }
    }
  }

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 80);
}

isTimer();

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 30,
      behavior: 'smooth',
    });
  });
}

const swiper = new Swiper('.why__slider', {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.why__slider-arrow-r',
    prevEl: '.why__slider-arrow-l',
  },
});

const swiper2 = new Swiper('.program__video-slider', {
  slidesPerView: 5,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2.3,
    },
    650: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.5,
    },
    900: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: '.program__slider-arrow-r',
    prevEl: '.program__slider-arrow-l',
  },
});

//
const divs = document.querySelectorAll('.actions__item');

function checkDivVisibility() {
  divs.forEach((div, index) => {
    const rect = div.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom >= 0) {
      divs.forEach((div) => div.classList.remove('active'));
      divs[index].classList.add('active');
    }
  });
}

document.addEventListener('scroll', checkDivVisibility);

//resize
isResize('.about__info-img', '.about__info', '.about__mob', 768);
isResize('.why__info-img', '.why__info', '.why__info .why__info-mob', 650, 'first');
isResize('.why__slider-wrapper', '.why__info-2', '.why__info-2 .why__info-mob', 1100);

window.addEventListener('resize', () => {
  isResize('.about__info-img', '.about__info', '.about__mob', 768);
  isResize('.why__info-img', '.why__info', '.why__info .why__info-mob', 650, 'first');
  isResize('.why__slider-wrapper', '.why__info-2', '.why__info-2 .why__info-mob', 1100);
});

//
Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
