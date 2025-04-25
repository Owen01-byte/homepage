document.querySelector('button').addEventListener('click', () => {
  const confirmCall ='';

  if (confirmCall) {
    window.location.href = 'tel:+17025551234';
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLeft = document.querySelector('.nav-bar-left');
  const navRight = document.querySelector('.nav-bar-right');

  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
  });
});

