function renderArticles(data) {
    const container = document.getElementById('articles-container'); // Adjust this ID to match your HTML container's ID
  
    data.forEach(article => {
      const articleElement = document.createElement('section');
      articleElement.classList.add('article');
      articleElement.innerHTML = `
        <img src="${article.imgSrc}" alt="${article.title}" class="all-articles-image">

        <section class="articles-category-date-container"> 
          <h4>${article.category}</h4>
          <h4>${article.date}</h4>
        </section>

        <section class="articles-title-description-container"> 
          <h2>${article.title}</h2>
          <p> ${article.description}</p>
        </section>

      `;
  
      container.appendChild(articleElement);
    });
  }
  
  // Assuming 'articlesData' is your JSON array of articles
  // You can fetch this data or import it directly if it's stored locally
  fetch('./blog_data.json')
    .then(response => response.json())
    .then(data => renderArticles(data))
    .catch(error => console.error('Could not load articles:', error));
  