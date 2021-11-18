const navIcon = document.querySelector(".mobile-nav .fa");
const header = document.querySelector("header");

navIcon.addEventListener("click", () => {
  // Toggles the nav icon between "fa-bars" and "fa-times"
  navIcon.classList.toggle("fa-bars");
  navIcon.classList.toggle("fa-times");

  // Toggles "show" class on header element
  header.classList.toggle("show");
});
