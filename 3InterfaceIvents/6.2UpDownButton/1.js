let arrowTop = document.getElementById('arrowTop');

window.addEventListener('scroll', function() {
  arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
});

arrowTop.onclick = function(event) {
  window.scrollTo(pageXOffset, 0);
};
