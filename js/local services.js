
  fetch('miljaega-localservices.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('mycardslocal');
      container.innerHTML = ''; // clear previous content if any

      data.forEach(service => {
        const stars = Array(5)
          .fill('')
          .map((_, i) => {
            return `<span class="w-[18px] h-[18px] flex items-center justify-center rounded mb-1 ${
              i < service.stars
                ? 'bg-[#f59e0b] text-white'
                : 'bg-[#d1d5db] text-white'
            }">★</span>`;
          })
          .join('');

        const servicesHTML = service.services
          .map(item => {
            return `<span class="bg-[#e7f0fd] rounded-full text-[10px] text-blue-900 font-bold h-[24px] flex items-center justify-center px-3">${item}</span>`;
          })
          .join('');

        container.innerHTML += `
        <div class="relative w-full max-w-[360px] mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-[#e5e5e5] transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          
          <!-- Badge -->
          <div class="absolute top-5 pe-4 right-0 inline-flex items-center px-2 py-[2px] border border-l-[#f6c865] border-t-[#f6c865] border-b-[#f6c865] rounded-l-full bg-[#fffcf1] text-[12px] font-medium text-[#b7791f]">
            <img src="${service.badge.icon}" class="ms-1 me-1" alt="">
            ${service.badge.level}
          </div>

          <!-- Card Content -->
          <div class="p-3">
            <div class="flex sm:block xl:flex gap-4">
              <div>
                <img src="${service.image}" alt="" class="mt-2  sm:ms-10  sm:mt-10 lg:mt-10 xl:ms-2 md:ms-20 md:mt-7 lg:ms-8 ms-1 object-cover rounded-full w-[130px] h-[130px] shadow-[0_0_7px_#1E3A8A] transform transition-transform duration-300 ease-in-out hover:scale-[1.02]" />
              </div>
              <div class="mt-9 sm:mt-2 lg:mt-[60px]">
                <span class="text-[18px] font-bold text-blue-900 leading-[10px] font-[Poppins]">${service.service.replace(' ', '<br>')}</span>
                <div class="flex gap-1 mt-3">
                  <span class="bg-[#f0f5ff] w-[84px] text-blue-900 h-[20px] px-2 py-[2px] rounded-full text-[8px] font-medium leading-[18px] flex">
                    <img src="${service.labelIcons[0]}" class="pe-1 ps-2" alt="">${service.labels[0]}
                  </span>
                  <span class="bg-[#f0f9eb] w-[80px] text-[#4e9a19] px-2 py-[2px] rounded-full text-[8px] font-medium leading-[18px] flex">
                    <img src="${service.labelIcons[1]}" class="pe-1 ps-2" alt="">${service.labels[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="justify-between items-start ps-5">
            <div>
              <h3 class="text-[15px] font-bold text-blue-900 ps-1">${service.name}</h3>
              
              <div class="space-y-2 mt-3 mb-9">
                <!-- Service Tags -->
                <div class="flex flex-wrap gap-1">${servicesHTML}</div>
              </div>

              <p class="text-[12px] text-gray-600 mt-4 ps-1">${service.orders} Orders</p>

              <div class="flex items-center text-[14px] font-medium">
                <div class="flex space-x-[2px] mt-1 ps-1">${stars}</div>
                <span class="ml-2 text-black text-[12px]">${service.rating}</span>
              </div>
            </div>

            <p class="text-[12px] font-bold text-blue-900 ps-1">${service.location}</p>
          </div>

          <!-- Button -->
          <button class="w-full mt-3 bg-blue-900  hover:bg-opacity-95 text-white py-4 px-4 text-[13px] font-medium leading-[20px]">
            <i class="fa-solid fa-phone text-white me-1"></i> Show Phone Number
          </button>
        </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error loading services:', error);
    });

