const btn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
