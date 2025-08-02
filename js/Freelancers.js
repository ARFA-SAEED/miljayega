document.addEventListener('DOMContentLoaded', function() {
    fetchFreelancers();
});

function fetchFreelancers() {
    fetch('miljaega-freelancers.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderFreelancers(data);
        })
        .catch(error => {
            console.error('Error fetching freelancers:', error);
            // Fallback or error handling
        });
}

function renderFreelancers(freelancers) {
    const container = document.getElementById('freelancers-container');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Limit to 4 cards as requested
    const limitedFreelancers = freelancers.slice(0, 4);
    
    limitedFreelancers.forEach(freelancer => {
        const card = createFreelancerCard(freelancer);
        container.appendChild(card);
    });
}

function createFreelancerCard(freelancer) {
    const card = document.createElement('div');
    card.className = 'max-w-md bg-white rounded-lg shadow-sm transform transition-transform duration-300 ease-in-out hover:scale-[1.02] border border-gray-200 p-4';
    
    // Generate star rating HTML
    const stars = Array(freelancer.rating).fill('<i class="fa-solid fa-star text-yellow-400 text-sm"></i>').join('');
    
    // Generate badges HTML
    const badges = freelancer.badges.map(badge => {
        const isVerified = badge === 'Verified';
        const isTrusted = badge === 'Trusted';
        const bgClass = isVerified ? 'bg-blue-50 text-blue-600' : 
                        isTrusted ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600';
        const iconPath = isVerified ? 
            '<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>' : 
            '<path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>';
        
        return `
            <span class="${bgClass} text-xs font-medium px-2 py-1 rounded-full flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    ${iconPath}
                </svg>
                ${badge}
            </span>
        `;
    }).join('');
    
    card.innerHTML = `
        <!-- User info and timestamp -->
        <div class="flex justify-between items-start mb-3">
            <div class="flex items-center">
                <!-- Avatar -->
                <div class="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
                    <img src="${freelancer.avatar}" class="w-full h-full object-cover" alt="${freelancer.name}">
                </div>
                <div>
                    <h3 class="font-medium text-blue-900">${freelancer.name}</h3>
                    <p class="text-sm text-gray-500">${freelancer.action}</p>
                </div>
            </div>
            <span class="text-sm text-gray-400">${freelancer.time}</span>
        </div>
        
        <!-- Featured image with hover zoom -->
        <div class="overflow-hidden rounded-lg mb-5 group">
            <img src="${freelancer.featuredImage}" 
                class="w-full h-[150px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="${freelancer.business}">
        </div>
        
        <!-- Business name -->
        <h4 class="font-bold text-blue-900 mb-2">${freelancer.business}</h4>
        
        <!-- Star rating -->
        <div class="flex mb-3">
            ${stars}
        </div>
        
        <!-- Review text -->
        <p class="text-gray-600 text-sm mb-2">
            ${freelancer.review}
        </p>
        
        <!-- Read more link -->
        <a href="#" class="text-blue-900 hover:text-blue-600 text-sm font-medium inline-block mb-3">Read more</a>
        
        <!-- Modern interactive footer -->
        <div class="flex justify-between items-center pt-3 border-t border-gray-200">
            <!-- Verification badges -->
            <div class="flex gap-2">
                ${badges}
            </div>
            
            <!-- Interaction buttons -->
            <div class="flex items-center space-x-4">
                <button class="flex items-center text-gray-500 hover:text-blue-500 transition-colors group">
                    <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span class="ml-1 text-xs">${freelancer.stats.comments}</span>
                </button>
                
                <button class="flex items-center text-gray-500 hover:text-red-500 transition-colors group">
                    <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span class="ml-1 text-xs">${freelancer.stats.likes}</span>
                </button>
                
                <button class="text-gray-500 hover:text-gray-700 transition-colors group">
                    <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    return card;
}