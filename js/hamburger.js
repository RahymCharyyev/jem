document.addEventListener('DOMContentLoaded', function () {
  let burgerIcon = document.querySelector('.header__hamburger');
  let navLinks = document.querySelector('.header__hamburger-links');

  function toggleMenu() {
    navLinks.classList.toggle('show');
    burgerIcon.classList.toggle('open');
  }

  burgerIcon.addEventListener('click', toggleMenu);

  const navLinksList = document.querySelectorAll('.header__hamburger-links a');
  navLinksList.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      closeMenu();
      setTimeout(function () {
        window.location = link.href;
      }, 800);
    });
  });
});

function closeMenu() {
  navLinks.classList.remove('show');
  burgerIcon.classList.remove('open');
}
