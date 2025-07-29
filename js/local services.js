fetch("miljaega-localservices.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const lcardsContainer = document.getElementById("mycardslocal");

    for (let i = 0; i < data.length; i++) {
      const lcard = data[i];

      lcardsContainer.innerHTML += `

                <div class="card flex flex-col overflow-hidden rounded-lg shadow border border-gray-200 bg-white transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <div class="relative">
                        <img alt="Plot for sale in Mumtaz City" class="w-full h-48 object-cover"
                            src="${lcard.image}" />
                        <button
                            class="absolute top-3 right-4 inline-flex items-center gap-1 bg-white/10 text-black px-3 py-1 rounded-full shadow-lg backdrop-blur-sm hover:text-red-500 transition">
                            <span class="material-icons text-base">favorite_border</span>
                            <span class="text-xs font-medium">favorite</span>
                        </button>
                    </div>
                    <div class="p-4 flex flex-col">
                        <div class="flex justify-between items-start mb-1">
                            <div>
                                <div class="flex items-center space-x-2">
                                    <img src="${lcard.image2}" alt="User"
                                        class="w-6 h-6 rounded-full object-cover" />
                                    <span class="text-sm font-medium text-gray-700">${lcard.name}</span>
                                </div>
                                ${getColor(lcard.level)}
                            </div>
                            <div class="flex items-center space-x-2">
                                <span
                                    class="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">${lcard.verified}</span>
                                <span
                                    class="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded">${lcard.trusted}</span>
                            </div>
                        </div>
                        <h3 class="text-md font-semibold text-gray-800 mt-1">Electrician</h3>
                        <p class="text-sm text-gray-500">${lcard.address}/p>
                        <div class="flex items-center justify-between text-[11px] text-gray-600 mt-4">
                            <div class="flex items-center">
                                <span>125 Orders</span>
                                <div class="flex items-center space-x-0.5 ml-3">
                                    <span class="material-icons text-yellow-500 text-[13px]">star</span>
                                    <span class="font-medium">${lcard.ratings}</span>
                                </div>
                            </div>

                            <p class="text-xs text-gray-400">${lcard.day}</p>
                        </div>
                    </div>
                </div>
`;
    }
  })
  .catch((error) => {
    console.error("Error loading cards:", error);
  });


function getColor(level) {
  const colors = {
  "Level 1": `yellow`,
  "Level 2": `purple`,
  "Top Rated": `green`,
  "New": `orange`};
  
  return `<div class="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-${colors[level]}-50 text-${colors[level]}-800 border border-${colors[level]}-200">
                <i class="fa-solid fa-circle-check text-[12px] text-${colors[level]}-700"></i>
                  ${level}
            </div>`
}
