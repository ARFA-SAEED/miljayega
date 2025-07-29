
const btnn = document
  .querySelector(".voice-search-btn")

  if (btnn){
    btnn.addEventListener("click", function () {
    this.classList.toggle("text-red-500"); // Changes color when active
    // Add your voice recognition logic here
  });}
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!toggleBtn || !mobileMenu) {
    console.error("mobileMenuToggle or mobileMenu not found.");
    return;
  }

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});
