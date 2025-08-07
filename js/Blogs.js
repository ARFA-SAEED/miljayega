
  fetch('miljaega-Blogs.json')
    .then(res => res.json())
    .then(blogs => {
      const container = document.getElementById('mycardsblogs');
      blogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'w-88 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-[1.02]' ;

        card.innerHTML = `
          <!-- Blog Image -->
          <img src="${blog.image}" alt="${blog.title}" class="w-full h-48 object-cover">

          <!-- Blog Content -->
          <div class="p-5 flex flex-col justify-between flex-grow">

            <!-- Title -->
            <h3 class="text-lg font-bold text-blue-900 leading-snug mb-2">
              ${blog.title}
            </h3>

            <!-- Excerpt -->
            <p class="text-sm text-gray-600 mb-4">
              ${blog.excerpt}
            </p>

            <!-- Author Section -->
            <div class="flex items-center justify-between mt-auto border-t-gray border-t-2 pt-4">
              <div class="flex items-center space-x-2">
                <img src="${blog.avatar}" alt="${blog.author}" class="w-8 h-8 rounded-full">
                <div>
                  <p class="text-sm font-medium text-gray-800">${blog.author}</p>
                  <p class="text-xs text-gray-500">${blog.date}</p>
                </div>
              </div>
              <a href="#" class="text-blue-900 text-sm font-semibold hover:underline">Read More →</a>
            </div>

          </div>
        `;
        container.appendChild(card);
      });
    });

