let imgList = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');

imgList.onclick = function(event) {
  let smallImg = event.target.closest('a');
  if (!smallImg) return;
  largeImg.src = smallImg.href;
  return false;
};