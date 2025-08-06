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
        <div class="flex justify-between items-start w-88 ps-4 pb-2 pt-4 pe-4">
          <div>
            <h2 class="text-lg font-semibold text-blue-900">${item.title}</h2>
            <p class="text-xs text-gray-500">${item.posted}</p>
          </div>
          <span class="flex-shrink-0 h-6 ps-4 w-[90px] hover:text-red-600 hover:bg-red-100 flex items-center bg-[#f0f5ff] text-xs font-bold px-3 py-1.5 rounded-full text-blue-900 shadow-sm hover:shadow-md transition-all duration-200 ml-2">
            <i class="fa-solid fa-heart me-3 ps-1"></i> Save
          </span>
        </div>
<div class="w-full px-4">
  <div class="w-full h-[110px] rounded-md overflow-hidden">
    <img src="${item.mainImage}" alt="Main Image" class="main-image w-full h-full object-cover" />
  </div>
</div>

<div class="flex gap-[10px] xl:gap-1 mt-2 mb-3 ms-4 sm:ms-[15px] lg:ms-[20px] xl:ms-4 flex-wrap">
  ${item.images.map((img, imgIndex) => `
    <div 
      onclick="toggleThumbnailOverlay(this, '${cardId}')"
      class="relative w-[73px] sm:w-[55px] md:w-[71px] lg:w-[70px] xl:w-[76.5px] h-12 rounded-md overflow-hidden cursor-pointer group flex-shrink-0"
      data-active="false"
    >
      <img 
        src="${img.thumb}" 
        data-image="${img.image}" 
        class="w-full h-full object-cover rounded-md" 
      />
      <div class="thumbnail-overlay absolute inset-0 bg-black bg-opacity-60"></div>
      ${imgIndex === 3 ? `<span class="absolute top-3 left-6 text-white text-md font-bold z-10">+2</span>` : ''}
    </div>
  `).join('')}
</div>


        <div class="flex ps-3 mb-4 gap-1">
          ${item.badges.includes("verified") ? `
            <span class="bg-[#f0f5ff] w-[84px] text-blue-900 h-[20px] px-1 py-[2px] rounded-full text-[10px] font-bold leading-[18px] flex">
              <img src="./images/verified.svg" class="pe-1 ps-2" alt="">Verified
            </span>` : ''}
          ${item.badges.includes("trusted") ? `
            <span class="bg-[#f0f9eb] w-[80px] text-[#4e9a19] ps-[7px]  py-[2px] rounded-full text-[10px] font-bold leading-[18px] flex">
              <img src="./images/trusted.svg" class="pe-1 ps-2" alt=""> Trusted
            </span>` : ''}
        </div>
<div class="flex justify-between px-4">  <p class="text-lg font-bold text-blue-900 mt-[35px]">${item.price}</p> <img src="./images/vector.jpg" class="h-10" /> </div>
        <div class="px-4 pb-2">
        
          <p class="text-sm text-gray-600">Fix Price</p>
          <p class="text-sm text-blue-900 font-bold mt-1">${item.location}</p>
        </div>

        <div class="px-4 pb-4">
          <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-opacity-95">
            <i class="fa-solid fa-phone text-white me-1 text-[13px]"></i> Show Phone Number
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load cards:", err));
function toggleThumbnailOverlay(element, cardId) {
  // Get all thumbnails in this card
  const thumbnails = document.querySelectorAll(`#${cardId} .thumbnail-overlay`);
  
  // Remove active state from all thumbnails
  thumbnails.forEach(overlay => {
    overlay.classList.remove('hidden');
    overlay.parentElement.setAttribute('data-active', 'false');
  });
  
  // Add active state to clicked thumbnail
  const overlay = element.querySelector('.thumbnail-overlay');
  overlay.classList.add('hidden');
  element.setAttribute('data-active', 'true');
  
  // Change main image
  changeMainImage(element.querySelector('img'), cardId);
}