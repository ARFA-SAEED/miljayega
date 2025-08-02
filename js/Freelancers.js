fetch("miljaega-freelancers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const bcardsContainer = document.getElementById("mycardsfreelancers");
    for (let i = 0; i < data.length; i++) {
      const bcard = data[i];

      bcardsContainer.innerHTML += `
<div class="card overflow-hidden rounded-lg shadow border border-gray-200 bg-white transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
  <div class="relative">
    <img
      alt="Car for sale"
      class="w-full h-48 object-cover"
      src="${bcard.image}"
    />
      
    <div class="absolute top-3 left-0">
    <div class="relative">
  ${getbgColor(bcard.label)}
      </div>
    </div>
    
    <button
      class="absolute top-3 right-4 inline-flex items-center gap-1 bg-white/10 text-black px-3 py-1 rounded-full shadow-lg backdrop-blur-sm hover:text-red-500 transition" aria-label="Add to favorites">
      <span class="material-icons text-base">favorite_border</span>
      <span class="text-xs font-medium">favorite</span>
    </button>
  </div>
  <div class="p-4 flex flex-col flex-grow">
    <div class="flex justify-between items-center mb-1">
      <div class="flex items-center space-x-2">
        <img
          src="${bcard.image2}"
          alt="User ${bcard.name}"
          class="w-6 h-6 rounded-full object-cover" />
        <span class="text-sm font-medium text-gray-700">${bcard.name}</span>
      </div>
      <div class="flex items-center space-x-2">
        <span class="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">
          ${bcard.verified}
        </span>
        <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded">
          ${bcard.trusted}
        </span>
      </div>
    </div>
    <h3 class="text-md font-semibold text-gray-800 mt-2">${bcard.title}</h3>
    <p class="text-xl font-bold text-gray-900 mt-2">${bcard.price}</p>
    <p class="text-sm text-gray-500 mt-1">${bcard.address}</p>
    <div class="flex-grow"></div>
    <p class="text-xs text-gray-400 mt-5 text-right">${bcard.day}</p>
  </div>
</div>
`;
    }
  })
  .catch((error) => {
    console.error("Error loading cards:", error);
  });
function getbgColor(label){
  const bgcolors = {
  "Used": `yellow`,
  "New": `blue`,
  "Rental": `orange`,
  "Exchange": `purple`};
  
  return ` <div
           class="bg-${bgcolors[label]}-500 text-white text-[10px] font-bold px-3 py-1 pr-4 rounded-r-full shadow-md relative z-10">
           ${label}
           </div> `
}
