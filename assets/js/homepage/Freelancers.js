<<<<<<< HEAD
fetch("http://127.0.0.1:5501/assets/json/miljaega-freelancers.json")
  .then((res) => res.json())
  .then((freelancers) => {
    const container = document.getElementById("mycardsfreelancers");
    container.innerHTML = ""; // clear container first

    freelancers.slice(0, 4).forEach((f) => {
      const halfStar = f.rating % 1 >= 0.5;
      const fullStars = Math.floor(f.rating);
      const starHtml = [...Array(5)]
        .map((_, i) => {
=======

  fetch('miljaega-freelancers.json')
    .then(res => res.json())
    .then(freelancers => {
      const container = document.getElementById('mycardsfreelancers');
      freelancers.forEach(f => {
        const halfStar = f.rating % 1 >= 0.5;
        const fullStars = Math.floor(f.rating);
        const starHtml = [...Array(5)].map((_, i) => {
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
          if (i < fullStars) {
            return `
              <div class="relative w-5 h-5">
                <div class="absolute inset-0 bg-fiverr-orange rounded-sm"></div>
                <i class="absolute text-white ps-1 text-xs inset-0 flex items-center  fas fa-star"></i>
              </div>`;
          } else if (i === fullStars && halfStar) {
            return `
              <div class="relative w-5 h-5">
                <div class="absolute inset-y-0 left-0 w-1/2 bg-fiverr-orange rounded-l-sm"></div>
                <div class="absolute inset-y-0 right-0 w-1/2 bg-gray-300 rounded-r-sm"></div>
                <i class="absolute text-white ps-1 text-xs inset-0 flex items-center  fas fa-star"></i>
              </div>`;
          } else {
            return `
              <div class="relative w-5 h-5">
                <div class="absolute inset-0 bg-gray-300 rounded-sm"></div>
                <i class="absolute text-white ps-1 text-xs inset-0 flex items-center  fas fa-star"></i>
              </div>`;
          }
<<<<<<< HEAD
        })
        .join("");

      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow-sm border border-gray-200 p-4 card-hover";
      card.innerHTML = `
=======
        }).join('');

        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-sm border border-gray-200 p-4 card-hover';
        card.innerHTML = `
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
          <div class="flex justify-between items-start mb-3 ">
            <div class="flex items-center">
              <div class="relative">
                <div class="w-12 h-12 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
<<<<<<< HEAD
                  <img src="${
                    f.profileImage
                  }" class="w-full h-full object-cover" alt="${f.name}">
=======
                  <img src="${f.profileImage}" class="w-full h-full object-cover" alt="${f.name}">
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
                </div>
                <div class="status-dot"></div>
                <div class="status-pulse"></div>
              </div>
              <div>
                <h3 class="font-medium text-fiverr-blue">${f.name}</h3>
                <p class="text-sm text-gray-500">${f.status}</p>
              </div>
            </div>
<<<<<<< HEAD
            ${
              f.topRated
                ? `<div class="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-800 border border-green-200 badge">
                    <i class="fa-solid fa-circle-check text-[12px] text-green-700"></i> Top Rated
                  </div>`
                : ""
            }
          </div>

          <div class="overflow-hidden rounded-lg mb-5">
            <img src="${
              f.image
            }" class="w-full h-[150px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" alt="${
        f.title
      }">
          </div>

          <h4 class="font-bold text-fiverr-blue mb-2" style="color: #1e3a8a;">${
            f.title
          }</h4>
=======
            ${f.topRated ? `
              <div class="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-800 border border-green-200 badge">
                <i class="fa-solid fa-circle-check text-[12px] text-green-700"></i> Top Rated
              </div>` : ''
            }
          </div>

       <div class="overflow-hidden rounded-lg mb-5">
  <img src="${f.image}" class="w-full h-[150px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" alt="${f.title}">
</div>

          <h4 class="font-bold text-fiverr-blue mb-2" style="color: #1e3a8a;">${f.title}</h4>
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0

          <div class="flex items-center mb-1">
            <div class="flex space-x-1">${starHtml}</div>
            <div class="ml-2 text-gray-700">
<<<<<<< HEAD
              <span class="font-medium" style="color: #0c3168">${
                f.rating
              }</span>
=======
              <span class="font-medium" style="color: #0c3168">${f.rating}</span>
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
              <span class="text-gray-500">(${f.reviews} reviews)</span>
            </div>
          </div>

          <p class="text-gray-500 mt-6 mb-3">${f.location}</p>
<<<<<<< HEAD

          <div class="flex justify-between items-center pt-3 mt-2 border-t border-gray-200">
            <div class="flex gap-2">
              ${
                f.verified
                  ? `<span class="bg-blue-50 text-blue-600 text-xs font-medium pe-4 py-1 rounded-full flex items-center badge">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723..." clip-rule="evenodd"></path>
                      </svg>
                      Verified
                    </span>`
                  : ""
              }
              ${
                f.trusted
                  ? `<span class="bg-green-50 text-green-600 text-xs font-medium pe-4 py-1 rounded-full flex items-center badge">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265..." clip-rule="evenodd"></path>
                      </svg>
                      Trusted
                    </span>`
                  : ""
              }
            </div>

            <div class="flex items-center space-x-4">
              <!-- Heart Icon -->
              <button class="flex items-center text-gray-500 hover:text-red-500 transition-colors group">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                  </path>
                </svg>
              </button>

              <!-- Share Icon -->
              <button class="text-gray-500 hover:text-gray-700 transition-colors group">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        `;
      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Error loading freelancers:", err));
=======
<div class="flex justify-between items-center pt-3 mt-2 border-t border-gray-200">
  <div class="flex gap-2">
    ${f.verified ? `
      <span class="bg-blue-50 text-blue-600 text-xs font-medium pe-4 py-1 rounded-full flex items-center badge">
        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723..." clip-rule="evenodd"></path>
        </svg>
        Verified
      </span>` : ''}
    ${f.trusted ? `
      <span class="bg-green-50 text-green-600 text-xs font-medium pe-4 py-1 rounded-full flex items-center badge">
        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265..." clip-rule="evenodd"></path>
        </svg>
        Trusted
      </span>` : ''}
  </div>

  <div class="flex items-center space-x-4">
    <!-- Heart Icon -->
    <button class="flex items-center text-gray-500 hover:text-red-500 transition-colors group">
      <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
        </path>
      </svg>
    </button>

    <!-- Share Icon -->
    <button class="text-gray-500 hover:text-gray-700 transition-colors group">
      <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
        </path>
      </svg>
    </button>
  </div>
</div>

          
            
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading freelancers:", err));

>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
