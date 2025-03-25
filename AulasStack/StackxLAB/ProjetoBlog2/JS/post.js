document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = window.posts.find(p => p.id === postId);

    if(post) {
        const views = (parseInt(localStorage.getItem(`views_${postId}`)) || 0) + 1;
        localStorage.setItem(`views_${postId}`, views);
        renderPost(post);
    } else {
        window.location.href = 'index.html';
    }

    function renderPost(post) {
        const postContent = document.getElementById('postContent');
        postContent.innerHTML = `
            <article>
                <header class="post-header">
                    <div class="post-meta">
                        <span class="post-category ${post.category.toLowerCase()}">${post.category}</span>
                        <time>${new Date(post.date).toLocaleDateString('pt-BR')}</time>
                        <span class="post-views">👁️ ${localStorage.getItem(`views_${post.id}`)} visualizações</span>
                    </div>
                    <h1>${post.title}</h1>
                </header>
                <img src="${post.image}" alt="${post.title}" class="featured-image">
                <div class="post-body">${post.content}</div>
            </article>
        `;
    }
});