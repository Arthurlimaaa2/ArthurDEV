document.addEventListener('DOMContentLoaded', () => {
    // Configuração do tema
    const themeToggle = document.querySelector('.theme-toggle');
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    };
    applyTheme();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme();
        });
    }

    // Lógica da página inicial
    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filteredPosts = filter === 'all' 
                    ? posts 
                    : posts.filter(post => post.category === filter);
                renderPosts(filteredPosts);
            });
        });

        renderPosts(posts);
    }

    function renderPosts(postsArray) {
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = postsArray.map(post => `
            <article class="post-card" data-id="${post.id}">
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <div class="post-meta">
                        <span>${post.category}</span>
                        <span>👁️ ${localStorage.getItem(`views_${post.id}`) || 0}</span>
                    </div>
                </div>
            </article>
        `).join('');

        addPostClickHandlers();
    }

    function addPostClickHandlers() {
        document.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', () => {
                const postId = card.dataset.id;
                incrementViews(postId);
                window.location.href = `post.html?id=${postId}`;
            });
        });
    }

    function incrementViews(postId) {
        const currentViews = parseInt(localStorage.getItem(`views_${postId}`)) || 0;
        localStorage.setItem(`views_${postId}`, currentViews + 1);
    }
});