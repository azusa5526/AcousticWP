let nav = document.querySelector(".header .navbar");
let navLink = document.querySelectorAll(".header .navbar a");
let navIcon = document.querySelector(".header h1 a");
let navToggleIcon = document.querySelector(".header .navbar-toggler i");
let lastScrollY = 0;

window.addEventListener("scroll", function () {
  let st = this.scrollY;
  //sroll top
  if (st == 0) {
    nav.classList.remove('bg-white', 'shadowBottom');
    nav.classList.add('bg-transparent');

    navIcon.classList.add('whiteIcon');
    navIcon.classList.remove('blackIcon');

    navToggleIcon.classList.add('text-secondary');
    navToggleIcon.classList.remove('text-primary');

    navLink.forEach(function(item) {
      item.classList.add('text-white');
      item.classList.remove('text-primary');
    })
  } else {
    nav.classList.remove('bg-transparent');
    nav.classList.add('bg-white', 'shadowBottom');

    navToggleIcon.classList.add('text-primary');
    navToggleIcon.classList.remove('text-secondary');

    navIcon.classList.add('blackIcon');
    navIcon.classList.remove('whiteIcon');

    navLink.forEach(function(item) {
      item.classList.add('text-primary');
      item.classList.remove('text-white');
    })
  }
  lastScrollY = st;
});