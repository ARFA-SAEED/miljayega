<<<<<<< HEAD
fetch("http://127.0.0.1:5501/assets/json/classifiedads.json")
=======
fetch("../classifiedads.json") // Fetch the classified ad data
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("mycardsclassified");

<<<<<<< HEAD
    data.slice(0, 4).forEach((item, index) => {
=======
    data.forEach((item, index) => {
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
      const cardId = `card-${index}`;
      const card = document.createElement("div");

      card.className = `
        w-full bg-white hover:shadow-lg rounded-lg shadow-md overflow-hidden 
        transform transition-transform duration-300 ease-in-out 
        hover:scale-[1.02]
      `.trim();
      card.id = cardId;

      card.innerHTML = `
<<<<<<< HEAD
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
=======
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

>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
    <p class="text-xs text-gray-500">${item.posted}</p>
  </div>
  <span class="flex-shrink-0 h-6 w-[90px] hover:text-red-600 hover:bg-red-100 flex items-center bg-[#f0f5ff] text-xs font-bold px-3 py-1.5 rounded-full text-blue-900 shadow-sm hover:shadow-md transition-all duration-200 ml-2">
    <i class="fa-solid fa-heart me-3 ps-1"></i> Save
  </span>
</div>

<!-- Main Image -->
<<<<<<< HEAD
<div class="px-4 mb-4">
  <div class="rounded-md overflow-hidden">
=======
<div class=" px-4 mb-4"> <!-- Removed any bottom spacing -->
  <div class=" rounded-md overflow-hidden">
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
    <img 
      src="${item.mainImage}" 
      alt="Main Image" 
      class="main-image w-full h-[150px] object-cover" 
    />
  </div>
</div>

<<<<<<< HEAD
<!-- Thumbnails -->
<div class="mt-[-4px] mb-3">
  <div class="flex gap-1 flex-wrap justify-start ms-4">
=======
<!-- Thumbnails (Aligned + Responsive) -->
<div class="mt-[-4px] mb-3"> <!-- Removed top spacing -->
  <div class="flex gap-2 flex-wrap justify-start ms-4">
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
    ${item.images
      .slice(0, 4)
      .map(
        (img, imgIndex) => `
      <div 
        onclick="toggleThumbnailOverlay(this, '${cardId}')"
<<<<<<< HEAD
        class="relative w-[85px] sm:w-[55px] md:w-[72px] lg:w-[41px] xl:w-[73px] h-12 rounded-md overflow-hidden cursor-pointer flex-shrink-0"
=======
        class="relative w-[99px] sm:w-[55px] md:w-[72px] lg:w-[41px] xl:w-[73px] h-12 rounded-md overflow-hidden cursor-pointer flex-shrink-0"
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
        data-active="false"
      >
        <img 
          src="${img.thumb}" 
          data-image="${img.image}" 
          class="w-full h-full object-cover rounded-md" 
        />
<<<<<<< HEAD
        <div class="thumbnail-overlay absolute inset-0 bg-black bg-opacity-60"></div>
        ${
          imgIndex === 3
            ? `<span class="absolute top-4 left-8 md:left-10 sm:top-4 sm:left-4 md:top-4 md:left-2 xl:top-4 xl:left-6 text-white text-sm font-bold z-10">+2</span>`
=======
            <div class="thumbnail-overlay absolute inset-0 bg-black bg-opacity-60"></div>
        ${
          imgIndex === 3
            ? ` <!-- Always show +2 on the 4th thumbnail -->
          <span class="absolute top-4 left-10 sm:top-4 sm:left-4 md:top-4 md:left-2 xl:top-4 xl:left-6 text-white text-sm font-bold z-10">+2</span>
        `
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
            : ""
        }
      </div>
    `
      )
      .join("")}
  </div>
</div>

<<<<<<< HEAD
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
=======
<!-- Badges -->
<div class="flex ps-4 mb-4 gap-2 flex-wrap">
  ${
    item.badges.includes("verified")
      ? `
    <span class="bg-[#f0f5ff] text-blue-900 h-[20px] px-2 py-[2px] rounded-full text-[10px] font-bold flex items-center">
      <img src="./images/verified.svg" class="me-1" alt="">Verified
    </span>`
      : ""
  }
  ${
    item.badges.includes("trusted")
      ? `
    <span class="bg-[#f0f9eb] text-[#4e9a19] px-2 py-[2px] rounded-full text-[10px] font-bold flex items-center">
      <img src="./images/trusted.svg" class="me-1" alt="">Trusted
    </span>`
      : ""
  }
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
</div>

<!-- Price -->
<div class="flex justify-between px-4 items-center mb-2">
  <p class="text-lg font-bold text-blue-900">${item.price}</p>
<<<<<<< HEAD
=======
  <img src="./images/vector.jpg" class="h-10" alt="vector" />
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
</div>

<!-- Location -->
<div class="px-4 pb-2">
  <p class="text-sm text-gray-600">Fix Price</p>
  <p class="text-sm text-blue-900 font-bold mt-1">${item.location}</p>
</div>

<!-- Phone Button -->
<div class="px-4 pb-4">
<<<<<<< HEAD
  <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-blue-800">
    <i class="fa-solid fa-phone me-1 text-[13px]"></i> Show Phone Number
  </button>
</div>
=======
  <button class="w-full bg-blue-900 text-white py-2 rounded text-[14px] transition hover:bg-opacity-95">
    <i class="fa-solid fa-phone me-1 text-[13px]"></i> Show Phone Number
  </button>
</div>

>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Failed to load cards:", err));

<<<<<<< HEAD
// Image switching logic
=======
// Function: Toggle Thumbnail Overlay & Update Main Image
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
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
