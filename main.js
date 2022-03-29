const hamburger = document.querySelector('#cta');
const menuElements = document.querySelector('.items');

function toggleDisplay(el) {
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

hamburger.addEventListener('click', () => {
  toggleDisplay(menuElements);
});
