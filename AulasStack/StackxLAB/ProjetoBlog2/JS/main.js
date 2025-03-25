document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = window.posts || [];

    // Debug inicial
    console.log('Posts carregados:', posts);

    const sanitizeExcerpt = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    const checkPosts = () => {
        if (!posts || posts.length === 0) {
            console.error('Nenhum post encontrado');
            postsContainer.innerHTML = '<p class="error">Erro ao carregar posts</p>';
            return false;
        }
        return true;
    };

    const handleFilter = (button) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.dataset.filter;
        const filteredPosts = category === 'all' 
            ? posts 
            : posts.filter(post => 
                post.category.toLowerCase() === category.toLowerCase()
            );
        
        console.log('Posts filtrados:', filteredPosts);
        renderPosts(filteredPosts);
    };

    const renderPosts = (postsArray) => {
        if (!checkPosts()) return;

        try {
            postsContainer.innerHTML = postsArray.map(post => `
                <article class="post-card" data-id="${post.id}">
                    <img src="${post.image}" alt="${post.title}" class="post-image"
                         onerror="this.src='img/placeholder.jpg'">
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="post-category ${post.category.toLowerCase()}">${post.category}</span>
                            <time>${new Date(post.date).toLocaleDateString('pt-BR')}</time>
                        </div>
                        <h2 class="post-title">${post.title}</h2>
                        <div class="post-excerpt">
                            ${sanitizeExcerpt(post.content).substring(0, 150).trim()}...
                        </div>
                        <div class="post-footer">
                            <span class="post-views">👁️ ${localStorage.getItem(`views_${post.id}`) || 0} visualizações</span>
                        </div>
                    </div>
                </article>
            `).join('');

            if (postsArray.length === 0) {
                postsContainer.innerHTML = '<p class="no-posts">Nenhum post encontrado nesta categoria</p>';
            }

            addCardClickHandlers();

        } catch (error) {
            console.error('Erro ao renderizar posts:', error);
        }
    };

    const init = () => {
        if (checkPosts()) {
            filterButtons.forEach(button => {
                button.addEventListener('click', () => handleFilter(button));
            });
            renderPosts(posts); // Renderiza todos inicialmente
        }
    };

    init();
});

// Funções auxiliares
function addCardClickHandlers() {
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', () => {
            const postId = card.dataset.id;
            localStorage.setItem(`views_${postId}`, (parseInt(localStorage.getItem(`views_${postId}`) || 0) + 1);
            window.location.href = `post.html?id=${postId}`;
        });
    });
}