const menuIcon = document.querySelector(".menu-bar");
const navLinks = document.querySelector(".nav-bar-links");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
})