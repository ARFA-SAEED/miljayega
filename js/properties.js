fetch('miljaega-properties.json')
  .then(res => res.json())
  .then(properties => {
    const container = document.getElementById('mycardsproperties');
    container.innerHTML = '';

    properties.forEach(p => {
      container.innerHTML += `
        <div class="w-[700px]">
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden  transform transition-transform duration-300 ease-in-out hover:scale-[1.02] flex flex-col md:flex-row">
            <!-- Image Section -->
            <div class="relative w-[280px] h-[300px]">
              <img src="${p.image}" alt="Property Image" class="w-full h-60 md:h-full object-cover">
              <div class="absolute bottom-2 left-2 flex gap-2">
                <span class="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-camera"></i>${p.cameraCount}
                </span>
              </div>
              <div class="absolute bottom-2 right-2 flex gap-2">
                <span class="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-location-dot"></i><i class="fa-solid fa-heart"></i>
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-4 flex justify-between w-full md:w-[430px]">
              <div>
                <div class="flex mt-5">
                  <span class="text-lg font-semibold me-2 mt-1">PKR</span>
                  <span class="text-2xl font-bold">${p.price}</span>
                </div>
                <div class="text-gray-500 text-sm">${p.location}</div>

                <!-- Property Details -->
                <div class="flex gap-4 mt-2 text-gray-600 text-sm">
                  <span class="flex items-center gap-1 text-blue-900 font-semibold">
                    <i class="fa-solid fa-bed text-blue-900"></i> ${p.bedrooms}
                  </span>
                  <span class="flex items-center gap-1 text-blue-900 font-semibold">
                    <i class="fa-solid fa-bath text-blue-900"></i> ${p.bathrooms}
                  </span>
                  <span class="flex items-center gap-1 text-blue-900 font-semibold">
                    <i class="fa-solid fa-chart-area text-blue-900"></i> ${p.area}
                  </span>
                </div>

                <!-- Title -->
                <div class="mt-2 text-lg font-semibold text-gray-800">
                  ${p.title}
                </div>
                <div class="text-gray-500 text-sm mb-1">
                  ${p.description} <a href="" class="text-blue-900">More</a>
                </div>
                <span class="text-xs text-gray-400">Added: ${p.added}</span>

                <!-- Buttons -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-11 gap-2">
                  <div class="flex gap-2">
                    <button class="px-3 py-1 text-sm bg-white border rounded border-blue-900 flex items-center gap-1">
                      <i class="fa-solid fa-envelope text-lg text-blue-900"></i>
                    </button>
                    <button class="px-3 py-1 text-sm bg-white border text-green-700 rounded border-green-700 font-bold flex items-center gap-1">
                      <i class="fa-brands fa-whatsapp text-green-700 text-lg"></i> WhatsApp
                    </button>
                    <button class="w-full bg-blue-900 hover:bg-opacity-95 text-white py-2 rounded-lg px-4 text-[13px] font-medium leading-[20px]">
                      <i class="fa-solid fa-phone text-white me-1"></i> Show Phone Number
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(err => console.error('Error loading properties:', err));

