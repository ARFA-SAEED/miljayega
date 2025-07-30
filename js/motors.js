fetch("miljaega-motors.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const cardsContainer = document.getElementById("mycardsmotors"); 

    for (let i = 0; i < data.length; i++) {
      const mcards = data[i];

      cardsContainer.innerHTML += `
                      <div class="bg-white p-5 rounded-[20px] shadow-md shadow-[rgb(220,228,245)] w-full max-w-[725px] mx-auto">
  <!-- Top: Badges and Title -->
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div class="flex flex-wrap gap-3 items-center">
      <span class="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded">
        ${mcards.verified}
      </span>
      <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
        ${mcards.trusted}
      </span>
      <span class="flex items-center pt-1 pb-1 rounded-[20px] text-black px-3 font-bold text-[12px] shadow-lg backdrop-blur-sm hover:text-red-500 transition cursor-pointer">
        <i class="fa-solid fa-heart me-2"></i>${mcards.favourite}
      </span>
    </div>

    <h2 class="text-lg font-bold text-gray-800 text-center sm:text-left mt-5 md:mt-0 sm:ml-4">
      ${mcards.title}
    </h2>
  </div>

  <!-- Middle: Image and Content -->
  <div class="flex flex-col sm:flex-row items-start gap-5 mt-6">
  <img 
  src="./images/car.jpg" 
  alt="Car"
  class="h-[120px] mt-0 md:mt-8 ms-22 md:ms-10"
/>

    <!-- Text Content -->
    <div class="flex-grow   ms-0  md:ms-10">
      <p class="text-sm text-gray-600">${mcards.description}</p>
      <p class="text-sm text-gray-800 mt-2">${mcards.location}</p>
      <div class="grid grid-cols-2 gap-3 mt-3 text-sm text-gray-700 max-w-xs">
        <div>${mcards.year}</div>
        <div>${mcards.miljeage_km}</div>
        <div>${mcards.fuel_type}</div>
        <div>${mcards.engine_cc}</div>
        <div>${mcards.transmission}</div>
      </div>
    </div>
  </div>

  <!-- Bottom: Update Time + Price + Button -->
  <div class="flex flex-col sm:flex-row sm:items-center  sm:gap-37 md:gap-65  mt-6">
    <p class="text-xs text-gray-500 ">${mcards.updated}</p>
    <div class="flex flex-col sm:flex-row sm:items-center gap-4">
      <span class="text-lg font-bold text-gray-900">${mcards.price_pkr}</span>
      <button class="bg-blue-900 hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-[13px] font-medium">
        ${mcards.Show_phone}
      </button>
    </div>
  </div>
</div>

`;
    }
  })
  .catch((error) => {
    console.error("Error loading cards:", error);
  });
