fetch("http://127.0.0.1:5501/assets/json/classifiedads.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("mycardsclassified");

    data.slice(0, 4).forEach((item, index) => {
      const cardId = `card-${index}`;
      const card = document.createElement("div");

      card.className = `
        w-full bg-white hover:shadow-lg rounded-lg shadow-md overflow-hidden 
        transform transition-transform duration-300 ease-in-out 
        hover:scale-[1.02]
      `.trim();
      card.id = cardId;

      card.innerHTML = `
<!-- Top Section -->
<div class="flex justify-between items-start w-full px-4 pt-4 pb-2">
  <div>
    <h2 class="text-lg font-semibold text-blue-900">${
      item.title.length < 22
        ? item.title.includes(" ")
          ? item.title.replace(/ (?!.* )/, "<br>")
          : item.title
        : item.title.slice(0, 22) + "..."
    }</h2>
    <p class="text-xs text-gray-500">${item.posted}</p>
  </div>
  <span class="flex-shrink-0 h-6 w-[90px] hover:text-red-600 hover:bg-red-100 flex items-center bg-[#f0f5ff] text-xs font-bold px-3 py-1.5 rounded-full text-blue-900 shadow-sm hover:shadow-md transition-all duration-200 ml-2">
    <i class="fa-solid fa-heart me-3 ps-1"></i> Save
  </span>
</div>

<!-- Main Image -->
<div class="px-4 mb-4">
  <div class="rounded-md overflow-hidden">
    <img 
      src="${item.mainImage}" 
      alt="Main Image" 
      class="main-image w-full h-[150px] object-cover" 
    />
  </div>
</div>

<!-- Thumbnails -->
<div class="mt-[-4px] mb-3">
  <div class="flex gap-1 flex-wrap justify-start ms-4">
    ${item.images
      .slice(0, 4)
      .map(
        (img, imgIndex) => `
      <div 
        onclick="toggleThumbnailOverlay(this, '${cardId}')"
        class="relative w-[85px] sm:w-[55px] md:w-[72px] lg:w-[41px] xl:w-[73px] h-12 rounded-md overflow-hidden cursor-pointer flex-shrink-0"
        data-active="false"
      >
        <img 
          src="${img.thumb}" 
          data-image="${img.image}" 
          class="w-full h-full object-cover rounded-md" 
        />
        <div class="thumbnail-overlay absolute inset-0 bg-black bg-opacity-60"></div>
        ${
          imgIndex === 3
            ? `<span class="absolute top-4 left-8 md:left-10 sm:top-4 sm:left-4 md:top-4 md:left-2 xl:top-4 xl:left-6 text-white text-sm font-bold z-10">+2</span>`
            : ""
        }
      </div>
    `
      )
      .join("")}
  </div>
</div>

<!-- Badges + Vector Row -->
<div class="flex items-center justify-between px-4 mb-4">
  <div class="flex gap-2 flex-wrap">
    ${
      item.badges.includes("verified")
        ? `<span class="bg-[#f0f5ff] text-blue-900 h-[20px] px-2 py-1 rounded-full text-[12px] font-bold flex items-center">
             <img src="./images/verified.svg" class="me-1" alt="">Verified
           </span>`
        : ""
    }
    ${
      item.badges.includes("trusted")
        ? `<span class="bg-[#f0f9eb] text-[#4e9a19] px-2 py-1 rounded-full text-[12px] font-bold flex items-center">
             <img src="./images/trusted.svg" class="me-1" alt="">Trusted
           </span>`
        : ""
    }
  </div>
  <img src="../../assets/images/vector.jpg" class="h-10" alt="vector" />
</div>

<!-- Price -->
<div class="flex justify-between px-4 items-center mb-2">
  <p class="text-lg font-bold text-blue-900">${item.price}</p>
</div>

<!-- Location -->
<div class="px-4 pb-2">
  <p class="text-sm text-gray-600">Fix Price</p>
  <p class="text-sm text-blue-900 font-bold mt-1">${item.location}</p>
</div>

<!-- Phone Button -->
<div class="px-4 pb-4">
  <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-blue-800">
    <i class="fa-solid fa-phone me-1 text-[13px]"></i> Show Phone Number
  </button>
</div>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Failed to load cards:", err));

// Image switching logic
function toggleThumbnailOverlay(element, cardId) {
  const thumbnails = document.querySelectorAll(`#${cardId} .thumbnail-overlay`);

  thumbnails.forEach((overlay) => {
    overlay.classList.remove("hidden");
    overlay.parentElement.setAttribute("data-active", "false");
  });

  const overlay = element.querySelector(".thumbnail-overlay");
  overlay.classList.add("hidden");
  element.setAttribute("data-active", "true");

  changeMainImage(element.querySelector("img"), cardId);
}

function changeMainImage(thumbnail, cardId) {
  const mainImage = document.querySelector(`#${cardId} .main-image`);
  const newSrc = thumbnail.getAttribute("data-image");
  if (mainImage) mainImage.src = newSrc;
}
