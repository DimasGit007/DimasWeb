// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// klik hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
