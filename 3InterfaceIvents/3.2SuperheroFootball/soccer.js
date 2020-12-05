document.onmousedown = function(event) {
  let target = event.target;
  
  if (!target.classList.contains('draggable')) return;
  
  target.ondragstart = function() {
    return false;
  };
  
  let shiftX = event.clientX - target.getBoundingClientRect().left;
  let shiftY = event.clientY - target.getBoundingClientRect().top;
  
  target.style.position = 'fixed';

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  moveAt(event.clientX, event.clientY); 

  function moveAt(clientX, clientY) {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    let targetXCoord = clientX - shiftX;
    let targetYCoord = clientY - shiftY;
    if (targetXCoord >= 0 && targetXCoord <= windowWidth - target.offsetWidth) {
      target.style.left = targetXCoord + 'px';
    }
    
    if (targetYCoord >= 0 && targetYCoord <= windowHeight - target.offsetHeight) {
      target.style.top = targetYCoord + 'px';
    }
  }

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function onMouseUp(event) {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    target.style.position = 'absolute';
    target.style.left = event.pageX - shiftX + 'px';
    target.style.top = event.pageY - shiftY + 'px';
  }
};