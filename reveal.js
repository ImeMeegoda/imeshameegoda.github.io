// Reveal on scroll for .reveal elements
(function() {
  function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 80;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('visible');
      } else {
        reveals[i].classList.remove('visible');
      }
    }
    // Animate profile photo
    var photo = document.querySelector('.photo-frame img');
    if (photo) {
      var photoTop = photo.getBoundingClientRect().top;
      if (photoTop < window.innerHeight - 80) {
        photo.classList.add('visible');
      } else {
        photo.classList.remove('visible');
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('DOMContentLoaded', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
})();
