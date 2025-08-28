fetch("http://127.0.0.1:5501/assets/json/miljaega-properties.json")
  .then((res) => res.json())
  .then((properties) => {
    const container = document.getElementById("mycardsproperties");
    container.innerHTML = "";

    // Show only first 4 properties
    properties.slice(0, 2).forEach((p) => {
      container.innerHTML += `
        <div class="w-full lg:w-[45%]">
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-[1.02] flex flex-col md:flex-row">
            
            <!-- Image Section -->
            <div class="relative w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0">
              <img src="${p.image}" alt="Property Image" class="w-full h-full object-cover">
              <div class="absolute bottom-2 left-2 flex gap-2">
                <span class="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-camera"></i> ${p.cameraCount}
                </span>
              </div>
              <div class="absolute bottom-2 right-2 flex gap-2">
                <span class="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-location-dot"></i><i class="fa-solid fa-heart"></i>
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-4 flex flex-col justify-between w-full">
              <div>
                <div class="flex  items-baseline gap-1">
                  <span class="text-lg font-semibold">PKR</span>
                  <span class="text-2xl font-bold">${p.price}</span>
                </div>
                <div class="text-gray-500 text-sm mt-1">${p.location}</div>

                <!-- Property Details -->
                <div class="flex gap-4 mt-2 text-gray-600 text-sm flex-wrap">
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
                  ${p.description} <a href="#" class="text-blue-900">More</a>
                </div>
                <span class="text-xs text-gray-500">Added: ${p.added}</span>
              </div>

              
                 
                  <button class="bg-blue-900 mt-2 mb-1 justify-center hover:bg-blue-800 items-center flex text-white py-2 rounded-lg px-4 text-[13px] w-full font-medium leading-[20px]">
                    <i class="fa-solid fa-phone text-white me-1 "></i> Show Phone Number
                  </button>
             
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch((err) => console.error("Error loading properties:", err));
