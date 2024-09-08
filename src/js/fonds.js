import { fondsList } from './data';
const scrollBtn = document.querySelector('.scroll-btn');
const list = document.querySelector('.fonds-list');
let lastElNum = 6;

scrollBtn.addEventListener('click', () => {
  scrollList();
});

export function scrollList() {
  lastElNum++;
  if (lastElNum > 9) {
    lastElNum = 6;
  }
  generateList(lastElNum - 5, lastElNum);
}

function generateList(fromNum, toNum) {
  let generalHTML = '';
  while (fromNum <= toNum) {
    generalHTML += `
      <li>
      <a href="${fondsList[fromNum - 1].link}" target="_blank">
        <span>0${fromNum}</span>
        <img
          src="./img/fonds/${fondsList[fromNum - 1].name}_1x.png"
          srcset="./img/fonds/${fondsList[fromNum - 1].name}_1x.png 1x,
                  ./img/fonds/${fondsList[fromNum - 1].name}_2x.png 2x"
        >
      </a>
    </li>
    `;
    fromNum++;
  }

  checkBtnStatus();
  list.innerHTML = generalHTML;
}

function checkBtnStatus() {
  if (lastElNum != 9) {
    if (!scrollBtn.classList.contains('position-bottom-js')) {
      scrollBtn.classList.add('position-bottom-js');
    }
  } else {
    scrollBtn.classList.remove('position-bottom-js');
  }
}
