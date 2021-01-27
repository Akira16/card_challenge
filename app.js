const menuIcon = document.getElementById("menuIcon");
const drawer = document.querySelector(".drawer");
const drawerLink = document.querySelectorAll(".drawerLink");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  drawer.classList.toggle("active");
});

drawerLink.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    drawer.classList.toggle("active");
  });
});
