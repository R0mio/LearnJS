let contents = document.getElementById('contents');

contents.onclick = function(event) {
  let a = event.target.closest('a');
  if (!a) return;
  let goToLink = confirm('Вы дейтсвительно хотит е перейти по ссылке?');
  if (!goToLink) {
    return false;
  }
};