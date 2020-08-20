let ul = document.getElementById('ul');

ul.onclick = function(event) {
  let li = event.target;
  if (!li.matches('li')) return;
  let selected = ul.querySelectorAll('.selected');

  if (!(event.metaKey || event.ctrlKey)) {
    for (let selectedLi of selected) {
      selectedLi.classList.remove('selected');
    }
  }

  li.classList.toggle('selected');
};