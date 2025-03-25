document.addEventListener('DOMContentLoaded', () => {
    // Configurar tema
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Carregar post
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = posts.find(post => post.id === postId);

    if (post) {
        const postContent = document.getElementById('postContent');
        postContent.innerHTML = `
            <h1>${post.title}</h1>
            <img src="${post.image}" class="featured-image">
            <div class="post-body">${post.content}</div>
            <div class="post-meta">
                <span>👁️ ${localStorage.getItem(`views_${post.id}`) || 0} visualizações</span>
            </div>
        `;
        
        // Incrementar visualizações
        const currentViews = parseInt(localStorage.getItem(`views_${post.id}`)) || 0;
        localStorage.setItem(`views_${post.id}`, currentViews + 1);
    }
});