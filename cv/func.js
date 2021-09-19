let link = document.querySelector(".menu-btn");
const header = document.querySelector(".header-nav");

function burger() {
  event.preventDefault();
  link.classList.toggle("btn-active");
  header.classList.toggle("header-active");
}
link.addEventListener("click", burger);
