/**
     * Проверка видимости элемента (в видимой части страницы)
     * Достаточно, чтобы верхний или нижний край элемента был виден
     */
function isVisible(elem) {
  return (elem.getBoundingClientRect().bottom > 0 && elem.getBoundingClientRect().top < document.documentElement.clientHeight);
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      // отключение кеширования
      // эта строка должна быть удалена в "боевом" коде
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();