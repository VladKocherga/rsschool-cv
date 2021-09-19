let link = document.querySelector(".menu-btn");
const header = document.querySelector(".header-nav");
console.log(link);
function ff() {
  event.preventDefault();
  link.classList.toggle("btn-active");
  header.classList.toggle("header-active");

  console.log("kekw");
}
link.addEventListener("click", ff);
