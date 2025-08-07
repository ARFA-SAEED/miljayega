fetch('../properties.json') // Fetch the property data
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("mycardsproperties");
    container.innerHTML = ''; // Clear previous content

    data.forEach((property, index) => {
      const card = document.createElement("div");
      card.className = `
        w-full bg-white rounded-lg shadow-md overflow-hidden 
        transformtransform transition-transform duration-300 ease-in-out hover:scale-[1.02]
      `.trim();

      card.innerHTML = `
        <!-- Image with HOT Badge -->
        <div class="relative">
          <img src="${property.image}" alt="${property.title}" 
               class="w-full h-48 object-cover rounded-t-lg">
          ${property.isHot ? `
            <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
              HOT
            </div>` : ''}
        </div>

        <!-- Property Content -->
        <div class="p-4">
          <!-- Price Range -->
          <p class="text-lg font-bold text-blue-900">
            ${property.priceRange}
          </p>

          <!-- Title -->
          <h3 class="text-base font-semibold text-[#EA9D39] mb-1 leading-snug">
            ${property.title}
          </h3>

          <!-- Sub-location -->
          <p class="text-xs text-gray-500 mb-2 mt-3">${property.location}</p>

          <!-- Features -->
          <div class="flex flex-col mt-3 gap-1 text-sm text-gray-700">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-shop w-4 h-4 text-blue-900"></i>
              <span class="font-bold">${property.type}</span>
            </div>
            <div class="flex items-center gap-2 mt-1">
              <i class="fa-solid fa-chart-area w-4 h-4 text-blue-900"></i>
              <span class="font-bold">${property.area}</span>
            </div>
          </div>

          <!-- Badges -->
          <div class="flex ps-0 mb-2 gap-2 flex-wrap mt-4">
            ${property.features.map(feature => `
              <span class="bg-[#f0f5ff] text-blue-900 h-[20px] px-2 py-[2px] rounded-full text-[10px] font-bold flex items-center">
                ${feature}
              </span>
            `).join('')}
          </div>

          <!-- Contact Button -->
          <div class="px-0 pb-2 mt-4">
            <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-opacity-95">
              <i class="fa-solid fa-phone me-1 text-[13px]"></i> Contact Agent
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load properties:", err));