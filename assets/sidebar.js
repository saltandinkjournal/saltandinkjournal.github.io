const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("sidebar-toggle");
const closeBtn = document.getElementById("close-sidebar");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  sidebar
