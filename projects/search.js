fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const articleGrid = document.getElementById('article-grid');
        const searchInput = document.getElementById('search-input');
        const sortSelect = document.getElementById('sort-select');
        const tagFilters = document.querySelectorAll('.tag-filter');

        let articles = data;

        function renderArticles(filteredArticles) {
            articleGrid.innerHTML = '';
        
            filteredArticles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article-container');
                articleElement.innerHTML = `
                    <div class="article-card">
                        <a href="${article.link}"><img src="${article.image}" alt="${article.title}"></a>
                    </div>
                    <div class="article-details">
                        <div class="article-title">
                            <a href="${article.link}">${article.title}</a>
                        </div>
                        <div class="article-tags">
                            ${article.tags.map(tag => `<span class="tag-link" data-tag="${tag}">${tag}</span>`).join(' • ')}
                        </div>
                    </div>
                `;
                articleGrid.appendChild(articleElement);
            });
        
            // Add event listeners to tag links
            document.querySelectorAll('.article-tags .tag-link').forEach(span => {
                span.addEventListener('click', function() {
                    document.querySelectorAll('.tag-filter').forEach(btn => btn.classList.remove('active'));
                    document.querySelector(`.tag-filter[data-tag="${this.dataset.tag}"]`)?.classList.add('active');
                    filterArticlesByTag(this.dataset.tag);
                });
            });
        }
        
        // Function to filter articles based on the clicked tag
        function filterArticlesByTag(tag) {
            const filteredArticles = articles.filter(article => article.tags.includes(tag));
            renderArticles(filteredArticles);
        }
        
        
        // Function to filter articles based on the clicked tag
        function filterArticlesByTag(tag) {
            const filteredArticles = articles.filter(article => article.tags.includes(tag));
            renderArticles(filteredArticles);
        }
        
        function filterArticles() {
            let query = searchInput.value.toLowerCase();
            let selectedTag = document.querySelector('.tag-filter.active')?.dataset.tag || '';
            let sortedArticles = [...articles];

            if (query) {
                sortedArticles = sortedArticles.filter(article =>
                    article.title.toLowerCase().includes(query) || 
                    article.tags.some(tag => tag.toLowerCase().includes(query))
                );
            }

            if (selectedTag) {
                sortedArticles = sortedArticles.filter(article =>
                    article.tags.includes(selectedTag)
                );
            }

            if (sortSelect.value === 'newest') {
                sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else {
                sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
            }

            renderArticles(sortedArticles);
        }

        // Initial render
        renderArticles(articles);

        // Search event
        searchInput.addEventListener('input', filterArticles);

        // Sort event
        sortSelect.addEventListener('change', filterArticles);

        // Tag filter event
        tagFilters.forEach(button => {
            button.addEventListener('click', function() {
                tagFilters.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterArticles();
            });
        });
    })
    .catch(error => console.error('Error loading articles:', error));

document.getElementById('clear-filters').addEventListener('click', function () {
    // Remove active class from all filters
    document.querySelectorAll('.tag-filter').forEach(btn => btn.classList.remove('active'));

    // Clear the search input field
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';

    // Manually trigger input event to reapply search filtering logic
    searchInput.dispatchEvent(new Event('input'));

    // Reset to show all articles
    renderArticles(articles);
});

    
