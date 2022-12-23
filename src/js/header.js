// Додає анімацію хедера
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollPos = 100;
  let header = document.getElementById('header');

  if (
    document.body.scrollTop > scrollPos ||
    document.documentElement.scrollTop > scrollPos
  ) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}
