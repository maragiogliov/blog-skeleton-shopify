fetch('blog_data.json')
  .then(response => response.json())
  .then(data => {
    const featuredContainer = document.querySelector('.featured'); // Adjust if needed
    const recentContainer = document.querySelector('.recent'); // Adjust if needed

    data.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `
        <img src="${article.imgSrc}" class="${article.type === 'featured' ? 'featured-image' : 'recent-image'}">
        <hr>
        <section class="${article.type}-category-date-container">
            <h4>${article.category}</h4>
            <h4>${article.date}</h4>
        </section>
        <section class="${article.type}-title-description-container">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        </section>
      `;

      if (article.type === 'featured') {
        featuredContainer.appendChild(articleElement);
      } else if (article.type === 'recent') {
        recentContainer.appendChild(articleElement);
      }
      // Add an else if or else block if you have a standard or other types of articles
    });
  })
  .catch(error => console.error('Error loading the blog data:', error));
