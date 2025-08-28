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
       // Render up to 8 cars
      data.slice(0, 8).forEach((car) => {
        container.innerHTML += `
<div class="w-full mb-6 lg:w-[calc(48%-12px)] lg:odd:mr-3">
  <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
    <div class="flex justify-between items-start mb-3">
      <div class="flex-1 min-w-0">
        <h2 class="text-lg font-bold text-blue-900 truncate">${car.Name}</h2>
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">${car.Details}</p>
      </div>
      <button class="flex-shrink-0 flex items-center text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-white text-rose-500 border border-rose-200 shadow-sm hover:shadow-md hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 ml-2">
        <i class="fa-solid fa-heart me-2"></i> Save
      </button>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 flex-grow">
      <div class="flex-shrink-0 w-full sm:w-[40%] lg:w-[45%] xl:w-[40%] flex flex-col overflow-hidden">
        <div class="relative aspect-video rounded-lg overflow-hidden group">
          <img src="${car.Pictures[0]}" alt="${car.Name}" class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute bottom-3 left-3 bg-gray-800/50 text-white text-xs px-2 py-1 rounded flex items-center backdrop-blur-sm">
            <i class="fa-regular fa-clock mr-1 text-[8px] text-gray-300"></i> 
            ${car.AdPostedTime || "Recently posted"}
          </div>
        </div>
        <div class="sm:block hidden">
          <div class="flex flex-wrap gap-2 mt-7">
            ${car.Verified ? `
              <span class="bg-green-900 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-check-circle mr-1 text-[10px]"></i> ${car.Verified}
              </span>` : ""}
            ${car.Trusted ? `
              <span class="bg-blue-900 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-shield-alt mr-1 text-[10px]"></i> ${car.Trusted}
              </span>` : ""}
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-grow min-w-0">
        <div class="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700">
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-car text-xs"></i>
            </span>
            <span class="truncate">${car.Model}</span>
          </div>
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-tachometer-alt text-xs"></i>
            </span>
            <span>${car.KMDriven}</span>
          </div>
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-gas-pump text-xs"></i>
            </span>
            <span>${car.FuelType}</span>
          </div>
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-cog text-xs"></i>
            </span>
            <span>${car.EngineCapacity}</span>
          </div>
          <div class="col-span-2 flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-exchange-alt text-xs"></i>
            </span>
            <span>${car.Transmission}</span>
          </div>
          <div class="col-span-2 flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-map-marker-alt text-xs"></i>
            </span>
            <span class="truncate">${car.Address}</span>
          </div>
          <div class="col-span-2 flex flex-wrap gap-2 mt-1 sm:hidden">
            ${car.Verified ? `
              <span class="bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-check-circle mr-1 text-[10px]"></i> ${car.Verified}
              </span>` : ""}
            ${car.Trusted ? `
              <span class="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-shield-alt mr-1 text-[10px]"></i> ${car.Trusted}
              </span>` : ""}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between mt-auto pt-4 gap-3">
          <span class="font-bold text-blue-900 text-lg whitespace-nowrap truncate max-w-[180px] sm:max-w-none">
            ${car.Price}
          </span>
          <button class="w-full sm:w-auto flex-shrink-0 bg-blue-900 text-white px-4 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all duration-200 shadow-md whitespace-nowrap">
            <i class="fa-solid fa-phone me-2"></i> ${car.Phone}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
      });
    })
    .catch((err) => console.error("Error loading cars:", err));
});