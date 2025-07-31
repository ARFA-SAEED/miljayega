fetch("miljaega-motors.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("mycardsmotors");
    container.innerHTML = "";

    data.slice(0, 2).forEach((car) => {
      container.innerHTML += `
        <div class="w-full lg:w-[48%] mb-6">
          <div class="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">

            <!-- Top: badges and favourite aligned right -->
            <div class="flex items-center justify-between gap-3">
              <div class="flex gap-3 items-center">
                ${car.Verified ? `<span class="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded">${car.Verified}</span>` : ""}
                ${car.Trusted ? `<span class="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">${car.Trusted}</span>` : ""}
              </div>
              <span class="ml-auto flex items-center text-[12px] font-bold px-3 py-1 rounded-[20px] shadow-lg backdrop-blur-sm hover:text-red-500 cursor-pointer transition">
                <i class="fa-solid fa-heart me-2"></i>Favourite
              </span>
            </div>

            <!-- Middle: image left, content aligned under heading -->
            <div class="flex flex-col sm:flex-row items-start gap-5 mt-6">
              <img
                src="${car.Pictures[0]}"
                alt="${car.Name}"
                class="h-[130px] lg:h-[230px] w-auto object-cover rounded-lg"
              />
              <div class="flex flex-col flex-grow">
                <h2 class="text-lg font-bold text-gray-800">${car.Name}</h2>
                <p class="text-sm text-gray-600 mt-2">${car.Details}</p>
                <p class="text-sm text-gray-800 mt-1">${car.Address}</p>
                <div class="grid grid-cols-2 gap-3 mt-3 text-sm text-gray-700 max-w-xs">
                  <div><span class="font-semibold">Model:</span> ${car.Model}</div>
                  <div><span class="font-semibold">KM Driven:</span> ${car.KMDriven}</div>
                  <div><span class="font-semibold">Fuel Type:</span> ${car.FuelType}</div>
                  <div><span class="font-semibold">Engine:</span> ${car.EngineCapacity}</div>
                  <div><span class="font-semibold">Transmission:</span> ${car.Transmission}</div>
                </div>
              </div>
            </div>

            <!-- Bottom: time, price & call button -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6">
              <p class="text-xs text-gray-500">${car.AdPostedTime || "Recently posted"}</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-15">
                <span class="text-lg font-bold text-gray-900">${car.Price}</span>
                <button class=" flex bg-blue-900 text-white px-7 py-2 rounded-md text-[13px] font-medium hover:bg-opacity-90 transition">
               <i class="fa-solid fa-phone me-3  mt-1"></i>  ${car.Phone}
                </button>
              </div>
            </div>

          </div>
        </div>
      `;
    });
  })
  .catch((err) => console.error("Error loading cars:", err));
