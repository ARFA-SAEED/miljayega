
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

     tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'fiverr-blue': '#0d084d',
                        'fiverr-orange': '#ff643d',
                        'fiverr-green': '#1dbf73',
                        'light-gray': '#f5f5f5',
                    }
                }
            }
        }
  
          function changeMainImage(el) {
    const newSrc = el.getAttribute('data-image');
    const mainImg = document.getElementById('main-image');
    mainImg.src = newSrc;
  }

   function toggleDropdown(id) {
        document.querySelectorAll('[id^="dropdown"]').forEach(el => {
            if (el.id === id) {
                el.classList.toggle('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
    }
    window.addEventListener('click', function (e) {
        if (!e.target.closest('.relative')) {
            document.querySelectorAll('[id^="dropdown"]').forEach(el => el.classList.add('hidden'));
        }
    });

    function openModal() {
        document.getElementById("loginModal").classList.remove("hidden");
    }
    function closeModal() {
        document.getElementById("loginModal").classList.add("hidden");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const dropdown = document.getElementById("categoryDropdown");
        const button = dropdown.querySelector("button");
        const menu = document.getElementById("categoryMenu");
        const selectedText = document.getElementById("selectedCategory");

        // Toggle menu
        button.addEventListener("click", function (e) {
            e.stopPropagation();
            menu.classList.toggle("hidden");
        });

        // Select option
        menu.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                selectedText.textContent = this.getAttribute("data-value");
                menu.classList.add("hidden");
            });
        });

        // Close on outside click
        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
                menu.classList.add("hidden");
            }
        });
    });
       // Location dropdown functionality
        const button = document.getElementById("locationButton");
        const dropdown = document.getElementById("locationDropdown");
        const selectedLocation = document.getElementById("selectedLocation");

        // Toggle dropdown on button click
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent window click from closing instantly
            dropdown.classList.toggle("hidden");
        });

        // Close dropdown when clicking outside
        window.addEventListener("click", (e) => {
            if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add("hidden");
            }
        });

        // Handle option clicks
        document.querySelectorAll(".location-option").forEach(option => {
            option.addEventListener("click", () => {
                selectedLocation.textContent = option.textContent.trim(); // set new location text
                dropdown.classList.add("hidden"); // hide dropdown after selection
            });
        });

        // Search dropdown functionality
        const searchInput = document.getElementById("searchInput");
        const searchDropdown = document.getElementById("searchDropdown");

        // Show dropdown when input is focused
        searchInput.addEventListener("focus", () => {
            searchDropdown.style.display = "block";
        });

        // Hide dropdown when clicking outside
        window.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.style.display = "none";
            }
        });

        // Filter dropdown items based on input (optional)
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm.length > 0) {
                // You could implement filtering logic here if you want
                // to show only matching results as the user types
            }
        });