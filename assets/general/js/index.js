const btns = document.querySelectorAll('.cards button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location='publicacion.html';
  });
});