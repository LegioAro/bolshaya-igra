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
  let minutesDeadline = new Date(2024, 6, 12, 20);

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
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
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
  timerId = setInterval(countdownTimer, 100);
}

isTimer();
