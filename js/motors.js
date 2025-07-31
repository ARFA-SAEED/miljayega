fetch("miljaega-motors.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("mycardsmotors");
    container.innerHTML = "";

    data.slice(0, 2).forEach((car) => {
      container.innerHTML += `<div class="w-full lg:w-[48%] mb-6">
  <div class="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">

    <!-- Top section with title and action buttons -->
    <div class="flex justify-between items-start mb-2">
      <div>
        <h2 class="text-lg font-bold text-blue-900">${car.Name}</h2>
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">${car.Details}</p>
      </div>
      
      <div class="flex items-center gap-3">
        <button class="flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-white text-rose-500 border border-rose-200 shadow-sm hover:shadow-md hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 group">
          <i class="fa-solid fa-heart me-2 group-hover:scale-110 transition-transform duration-200"></i> Save
        </button>
      </div>
    </div>

    <!-- Middle: image and content -->
    <div class="flex flex-col sm:flex-row gap-5 flex-grow">
      
      <!-- Image section with AdPostedTime -->
      <div class="flex-shrink-0 sm:w-[330px] flex flex-col overflow-hidden">
        <div class="relative flex-grow h-full rounded-lg overflow-hidden group">
          <img
            src="${car.Pictures[0]}"
            alt="${car.Name}"
            class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute bottom-3 left-3 bg-gray-800/50 text-white text-xs px-2 py-1 rounded flex items-center backdrop-blur-sm">
            <i class="fa-regular fa-clock mr-1 text-[8px] text-gray-300"></i> ${car.AdPostedTime || "Recently posted"}
          </div>
        </div>
      </div>

      <!-- Text content section -->
      <div class="flex flex-col flex-grow">
        <div class="grid grid-cols-2 gap-x-4 gap-y-3 mt-1 text-sm text-gray-700">
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-600 p-1.5 rounded-full mr-2 flex items-center justify-center">
              <i class="fa-solid fa-car text-xs"></i>
            </span>
            <span>${car.Model}</span>
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
            <span> ${car.Address}</span>
          </div>
           <!-- Badges moved under address -->
          <div class="col-span-2 flex gap-2 mt-1">
            ${car.Verified ? `
              <span class="bg-green-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center shadow-sm">
                <i class="fa-solid fa-check-circle mr-1 text-[10px] text-white"></i> ${car.Verified}
              </span>` : ""}
            ${car.Trusted ? `
              <span class="bg-blue-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center shadow-sm">
                <i class="fa-solid fa-shield-alt mr-1 text-[10px] text-white"></i> ${car.Trusted}
              </span>` : ""}
          </div>
         
        </div>

        <!-- Bottom: Price & Phone -->
        <div class="flex items-center justify-between mt-auto pt-4">
          <span class="font-bold text-blue-900 text-lg">${car.Price}</span>
          <button class="flex items-center bg-blue-900 text-white px-4 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all duration-200 shadow-md">
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
