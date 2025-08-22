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
 document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.arrow-tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active', 'bg-blue-900', 'text-white'));
                
                // Add active class to clicked tab
                this.classList.add('active', 'bg-blue-900', 'text-white');
                this.classList.remove('bg-wsite', 'text-black');
                
                // Ensure z-index is proper for the active tab
                this.style.zIndex = '10';
            });
        });
    });