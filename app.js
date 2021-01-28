const menuIcon = document.getElementById("menuIcon");
const drawer = document.querySelector(".drawer");
const drawerLink = document.querySelectorAll(".drawerLink");

function menueDraw() {
  menuIcon.classList.toggle("active");
  drawer.classList.toggle("active");
}

menuIcon.addEventListener("click", menueDraw);

drawerLink.forEach((link) => {
  link.addEventListener("click", menueDraw);
});
