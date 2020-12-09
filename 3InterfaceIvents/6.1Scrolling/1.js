fillInDocument();

window.addEventListener('scroll', fillInDocument);

function fillInDocument() {
  let doc = document.documentElement;

  while (window.pageYOffset > doc.offsetHeight - doc.clientHeight - 50) {
    document.body.insertAdjacentHTML('beforeend', `<p>Дата: ${new Date()}</p>`);
  }
}
