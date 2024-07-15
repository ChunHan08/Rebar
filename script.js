const nav = document.querySelector(".elements");
const button = document.querySelector(".rows");
const spans = document.querySelectorAll(".span");
function toggler() {
  nav.classList.toggle("sidebar");
  spans[0].classList.toggle("span-0");
  spans[1].classList.toggle("span-1");
  spans[2].classList.toggle("span-2");
}
button.addEventListener("click", toggler);