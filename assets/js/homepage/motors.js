fetch("http://127.0.0.1:5501/assets/json/miljaega-motors.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("mycardsmotors");
    container.innerHTML = "";

    data.slice(0, 2).forEach((car) => {
      container.innerHTML += `
      <div class="w-full lg:w-[45%] mb-6">
        <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          
          <!-- Top section -->
          <div class="flex justify-between items-start mb-3">
            <div class="flex-1 min-w-0">
              <h2 class="text-lg font-bold text-blue-900 truncate">${
                car.Name
              }</h2>
              <p class="text-sm text-gray-600 mt-1 line-clamp-2">${
                car.Details
              }</p>
            </div>
            
            <button class="flex-shrink-0 flex items-center text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-white text-rose-500 border border-rose-200 shadow-sm hover:shadow-md hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 ml-2">
              <i class="fa-solid fa-heart me-2"></i> Save
            </button>
          </div>

          <!-- Image and Info -->
          <div class="flex flex-col sm:flex-row gap-4 flex-grow">
            
            <!-- Image -->
            <div class="flex-shrink-0 w-full sm:w-[40%] lg:w-[45%] xl:w-[40%] flex flex-col overflow-hidden">
              <div class="relative aspect-video rounded-lg overflow-hidden group">
                <img
                  src="${car.Pictures[0]}"
                  alt="${car.Name}"
                  class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute bottom-3 left-3 bg-gray-800/50 text-white text-xs px-2 py-1 rounded flex items-center backdrop-blur-sm">
                  <i class="fa-regular fa-clock mr-1 text-[8px] text-gray-300"></i> 
                  ${car.AdPostedTime || "Recently posted"}
                </div>
              </div>

              <!-- Badges -->
              <div class="sm:block hidden mt-7">
                <div class="flex flex-wrap gap-2">
                  ${
                    car.Verified
                      ? `
                    <span class="bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                      <i class="fa-solid fa-check-circle mr-1 text-[10px]"></i> ${car.Verified}
                    </span>`
                      : ""
                  }
                  ${
                    car.Trusted
                      ? `
                    <span class="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                      <i class="fa-solid fa-shield-alt mr-1 text-[10px]"></i> ${car.Trusted}
                    </span>`
                      : ""
                  }
                </div>
              </div>
            </div>

            <!-- Car Details -->
            <div class="flex flex-col flex-grow min-w-0">
              <div class="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700">
                <div class="flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-car text-xs"></i>
                  </span>
                  <span class="truncate">${car.Model}</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-tachometer-alt text-xs"></i>
                  </span>
                  <span>${car.KMDriven}</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-gas-pump text-xs"></i>
                  </span>
                  <span>${car.FuelType}</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-cog text-xs"></i>
                  </span>
                  <span>${car.EngineCapacity}</span>
                </div>
                <div class="col-span-2 flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-exchange-alt text-xs"></i>
                  </span>
                  <span>${car.Transmission}</span>
                </div>
                <div class="col-span-2 flex items-center">
                  <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2">
                    <i class="fa-solid fa-map-marker-alt text-xs"></i>
                  </span>
                  <span class="truncate">${car.Address}</span>
                </div>

                <!-- Badges for small screens -->
                <div class="col-span-2 flex flex-wrap gap-2 mt-1 sm:hidden">
                  ${
                    car.Verified
                      ? `
                    <span class="bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                      <i class="fa-solid fa-check-circle mr-1 text-[10px]"></i> ${car.Verified}
                    </span>`
                      : ""
                  }
                  ${
                    car.Trusted
                      ? `
                    <span class="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                      <i class="fa-solid fa-shield-alt mr-1 text-[10px]"></i> ${car.Trusted}
                    </span>`
                      : ""
                  }
                </div>
              </div>

              <!-- Price & Phone -->
              <div class="flex flex-col sm:flex-row items-center justify-between mt-auto pt-4 gap-3">
                <span class="font-bold text-blue-900 text-lg whitespace-nowrap truncate max-w-[180px] sm:max-w-none">
                  ${car.Price}
                </span>
                <button class="w-full sm:w-auto flex-shrink-0 bg-blue-900 text-white px-4 py-2.5 rounded-lg text-sm hover:bg-blue-800 transition-all duration-200 shadow-md whitespace-nowrap">
                  <i class="fa-solid fa-phone me-2"></i> ${car.Phone}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  })
  .catch((err) => console.error("Error loading cars:", err));
