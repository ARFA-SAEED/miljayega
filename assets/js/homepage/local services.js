fetch("http://127.0.0.1:5501/assets/json/miljaega-localservices.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("mycardslocal");
    container.innerHTML = ""; // clear previous content if any

    // Show only first 4 cards
    data.slice(0, 4).forEach((service) => {
      const card = document.createElement("div");
      card.className =
        "w-full bg-white hover:shadow-lg rounded-lg shadow-sm overflow-hidden border border-[#e5e5e5] transform transition-transform duration-300 ease-in-out hover:scale-[1.02] relative";

      const stars = Array(5)
        .fill("")
        .map((_, i) => {
          return `<span class="w-[18px] h-[18px] flex items-center justify-center rounded mb-1 ${
            i < service.stars
              ? "bg-[#f59e0b] text-white"
              : "bg-[#d1d5db] text-white"
          }">★</span>`;
        })
        .join("");

      const servicesHTML = service.services
        .map((item) => {
          return `<span class="bg-[#e7f0fd] rounded-full text-[10px] text-blue-900 font-bold h-[24px] flex items-center justify-center px-2">${item}</span>`;
        })
        .join("");

      card.innerHTML = `
        <!-- Badge -->
        <div class="absolute top-5 pe-4 right-0 inline-flex items-center px-2 py-[2px] border border-l-[#f6c865] border-t-[#f6c865] border-b-[#f6c865] rounded-l-full bg-[#fffcf1] text-[12px] font-medium text-[#b7791f]">
          <img src="${service.badge.icon}" class="ms-1 me-1" alt="">
          ${service.badge.level}
        </div>

        <!-- Card Content -->
        <div class="p-3">
          <div class="flex flex-col items-center gap-2">
            <img src="${
              service.image
            }" alt="" class=" object-cover rounded-full w-[120px]  mt-4 h-[120px] shadow-[0_0_7px_#1E3A8A] transform transition-transform duration-300 ease-in-out hover:scale-[1.02]" />
            <h3 class="text-[20px] font-bold text-blue-900 mt-2 ">${
              service.name
            }</h3>
            <span class="font-semibold text-gray-600 leading-[10px] font-[Poppins] text-center">${service.service.replace(
              " ",
              ""
            )}</span>

            <!-- Labels -->
            <div class="flex justify-center sm:justify-start gap-1 mt-3">
              <span class="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-check-circle mr-1 text-[10px]"></i> ${
                  service.labels[0]
                }
              </span>
              <span class="bg-green-900 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center shadow-sm whitespace-nowrap">
                <i class="fa-solid fa-shield-alt mr-1 text-[10px]"></i>${
                  service.labels[1]
                }
              </span>
            </div>
          </div>
        </div>

        <!-- Services and Rating -->
        <div class="ps-5">
          <div>
            <div class="mt-3 mb-9">
              <div class="flex flex-wrap gap-3 justify-center sm:justify-start">${servicesHTML}</div>
            </div>

            <p class="text-[12px] text-gray-600 mt-4 ps-1 text-center sm:text-left">${
              service.orders
            } Orders</p>

            <div class="flex items-center text-[14px] font-medium justify-center sm:justify-start">
              <div class="flex space-x-[2px] mt-1 ps-1">${stars}</div>
              <span class="ml-2 text-black text-[12px]">${service.rating}</span>
            </div>
          </div>

          <p class="text-[12px] font-bold text-blue-900 ps-1 text-center sm:text-left mt-2">${
            service.location
          }</p>
        </div>

        <!-- Button -->
        <button class="w-full mt-3 bg-blue-900 hover:bg-blue-800 text-white py-4 px-4 text-[13px] font-medium leading-[20px]">
          <i class="fa-solid fa-phone text-white me-1"></i> Show Phone Number
        </button>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading services:", error);
  });
