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
