<<<<<<< HEAD
fetch("http://127.0.0.1:5501/assets/json/miljaega-Blogs.json")
  .then((res) => res.json())
  .then((blogs) => {
    const container = document.getElementById("mycardsblogs");
    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"; // added group
=======
fetch('miljaega-Blogs.json')
  .then(res => res.json())
  .then(blogs => {
    const container = document.getElementById('mycardsblogs');
    blogs.forEach(blog => {
      const card = document.createElement('div');
      card.className =
        'bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group'; // added group
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0

      card.innerHTML = `
        <!-- Blog Image -->
        <div class="overflow-hidden">
          <img src="${blog.image}" alt="${blog.title}" 
               class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110">
        </div>

        <!-- Blog Content -->
        <div class="p-5 flex flex-col justify-between flex-grow">

          <!-- Title -->
          <h3 class="text-lg font-bold text-blue-900 leading-snug mb-8">
            ${blog.title}
          </h3>

          <!-- Excerpt -->
          <p class="text-sm text-gray-600 mb-4">
            ${blog.excerpt}
          </p>

<<<<<<< HEAD
          <a href="#" class="text-blue-900 ms-32 md:ms-[180px] xl:ms-55 text-sm font-semibold hover:underline">Read More →</a>
=======
          <a href="#" class="text-blue-900 xl:ms-55 text-sm font-semibold hover:underline">Read More →</a>
>>>>>>> afad26b6945e61a3e41d1b249c9cc3a6380508e0
        </div>
      `;
      container.appendChild(card);
    });
  });
