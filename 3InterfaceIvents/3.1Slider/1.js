let thumb = document.querySelector('.thumb');
let slider = document.getElementById('slider');

thumb.onmousedown = function(event) {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let slideMove = event.clientX - shiftX - slider.getBoundingClientRect().left;
    if (slideMove > 0 && slideMove < slider.offsetWidth - thumb.offsetWidth) {
      thumb.style.left = slideMove + 'px'; 
    }
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ondragstart = function() {
  return false;
};
