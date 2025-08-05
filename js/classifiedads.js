function changeMainImage(thumbnail, cardId) {
  const mainImage = document.querySelector(`#${cardId} .main-image`);
  const newSrc = thumbnail.getAttribute("data-image");
  if (mainImage) mainImage.src = newSrc;
}

fetch('../classifiedads.json') // from /js/ folder, go up to root
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("mycardsclassified");

    data.forEach((item, index) => {
      const cardId = `card-${index}`;

      const card = document.createElement("div");
      card.className = "max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-[1.02]";
      card.id = cardId;

      card.innerHTML = `
        <div class="flex justify-between items-start p-4">
          <div>
            <h2 class="text-lg font-semibold text-blue-900">${item.title}</h2>
            <p class="text-xs text-gray-500">${item.posted}</p>
          </div>
          <span class="flex-shrink-0 h-6 ps-4 w-[90px] hover:text-red-600 hover:bg-red-100 flex items-center bg-[#f0f5ff] text-xs font-bold px-3 py-1.5 rounded-full text-blue-900 shadow-sm hover:shadow-md transition-all duration-200 ml-2">
            <i class="fa-solid fa-heart me-3 ps-2"></i> Save
          </span>
        </div>

        <img src="${item.mainImage}" alt="Main Image" class="main-image object-cover w-[400px] h-[110px] px-4" />

        <div class="flex gap-[10px] xl:gap-1 mt-2 mb-3  ms-4 sm:ms-[15px] lg:ms-[20px] xl:ms-3 flex-wrap">
          ${item.images.map((img, imgIndex) => `
            <img 
              src="${img.thumb}" 
              data-image="${img.image}" 
              onclick="changeMainImage(this, '${cardId}')" 
              class="thumbnail w-[85px] sm:w-[55px] md:w-[71px] lg:w-[70px] xl:w-[77px] h-12 object-cover border rounded cursor-pointer hover:border-blue-400 ${imgIndex === 3 ? 'relative' : ''}" />
            ${imgIndex === 3 ? `<span class="rounded absolute text-white font-bold z-10 top-52 left-70">+2</span>` : ''}
          `).join('')}
        </div>

        <div class="flex ps-3 mb-4 gap-1">
          ${item.badges.includes("verified") ? `
            <span class="bg-[#f0f5ff] w-[84px] text-blue-900 h-[20px] px-1 py-[2px] rounded-full text-[10px] font-bold leading-[18px] flex">
              <img src="./images/verified.svg" class="pe-1 ps-2" alt="">Verified
            </span>` : ''}
          ${item.badges.includes("trusted") ? `
            <span class="bg-[#f0f9eb] w-[80px] text-[#4e9a19] px-2 py-[2px] rounded-full text-[10px] font-bold leading-[18px] flex">
              <img src="./images/trusted.svg" class="pe-1 ps-2" alt=""> Trusted
            </span>` : ''}
        </div>
<div class="flex justify-between px-4">  <p class="text-lg font-bold text-blue-900 mt-[40px]">${item.price}</p> <img src="./images/vector.jpg" class="h-10" /> </div>
        <div class="px-4 pb-2">
        
          <p class="text-sm text-gray-600">Fix Price</p>
          <p class="text-sm text-blue-900 font-bold mt-1">${item.location}</p>
        </div>

        <div class="px-4 pb-4">
          <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-opacity-95">
            <i class="fa-solid fa-phone text-white me-1"></i> Show Phone Number
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load cards:", err));
