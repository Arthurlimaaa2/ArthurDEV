const posts = [
    {
        id: 1,
        title: "Tendências Modernas no Desenvolvimento Frontend",
        content: "O mundo do desenvolvimento frontend está em constante evolução, com novas ferramentas e frameworks surgindo regularmente para atender às crescentes demandas de desempenho, usabilidade e eficiência. Em 2025, tecnologias como React, Vue.js e Svelte continuam a dominar o cenário, graças à sua flexibilidade e capacidade de criar interfaces de usuário dinâmicas e reativas.\n\nEnquanto isso, os Web Components estão ganhando popularidade por sua capacidade de permitir que desenvolvedores criem componentes reutilizáveis e de encapsulamento perfeito, melhorando a manutenção e escalabilidade dos projetos. Adicionalmente, frameworks CSS como TailwindCSS estão se destacando por sua abordagem de utilitários, que facilita a criação de designs consistentes e responsivos com menos código e maior controle sobre o estilo.\n\nPara se manter atualizados em um ambiente tão dinâmico, os desenvolvedores devem investir em aprendizado contínuo, participando de comunidades online, conferências e workshops. Também é crucial acompanhar as atualizações dos principais frameworks e explorar novas bibliotecas que possam otimizar o processo de desenvolvimento. A adoção de práticas de desenvolvimento modernas, como Design Systems e Atomic Design, pode também contribuir para a eficiência e qualidade do trabalho.",
        date: "2025-02-20",
        image: "https://example.com/frontend.jpg",
        category: "Frontend",
        views: 10
    },
    {
        id: 2,
        title: "Backend com Node.js: Desempenho e Escalabilidade",
        content: "O Node.js tem se consolidado como uma escolha popular para o desenvolvimento backend devido à sua capacidade de lidar com um grande número de conexões simultâneas de maneira eficiente. Com sua arquitetura baseada em eventos e o motor V8 JavaScript, o Node.js permite a construção de aplicações rápidas e escaláveis.\n\nEste post aborda as melhores práticas para otimizar o desempenho e a escalabilidade de aplicações Node.js. Entre as técnicas recomendadas, a utilização de clusters se destaca, pois permite que uma aplicação Node.js seja executada em múltiplos núcleos do processador, distribuindo a carga e melhorando a performance. O balanceamento de carga é outra estratégia essencial para garantir que o tráfego seja distribuído de maneira uniforme entre os servidores, evitando sobrecargas e garantindo alta disponibilidade.\n\nAlém disso, o caching é uma técnica crucial para acelerar o acesso a dados frequentemente requisitados, reduzindo o tempo de resposta e a carga no banco de dados. Ferramentas como Redis e Memcached são amplamente utilizadas para implementar caching eficaz. A integração do Node.js com bancos de dados modernos como MongoDB e PostgreSQL também é fundamental para construir aplicações robustas e escaláveis, permitindo o armazenamento e a recuperação eficiente de dados.",
        date: "2025-02-22",
        image: "https://example.com/nodejs.jpg",
        category: "Backend",
        views: 20
    },
    {
        id: 3,
        title: "DevOps: Automatizando o Ciclo de Vida do Software",
        content: "A prática de DevOps continua a transformar a maneira como as equipes de desenvolvimento entregam software, promovendo a colaboração entre desenvolvedores e operações e acelerando o ciclo de vida de entrega de software. Este post examina as ferramentas e técnicas mais recentes para automação de pipelines CI/CD (Integração Contínua/Entrega Contínua), gerenciamento de infraestrutura como código (IaC) e monitoramento contínuo.\n\nTecnologias como Docker e Kubernetes são essenciais para a criação de ambientes de desenvolvimento e produção consistentes, permitindo que as aplicações sejam empacotadas e executadas de maneira eficiente em diferentes plataformas. O Docker facilita a criação de contêineres leves e portáteis, enquanto o Kubernetes oferece poderosos recursos de orquestração para gerenciar clusters de contêineres e garantir a escalabilidade e resiliência das aplicações.\n\nFerramentas de IaC como Terraform e Ansible permitem que as equipes definam e gerenciem a infraestrutura de maneira automatizada e reprodutível, reduzindo o risco de erros manuais e aumentando a eficiência. Para monitoramento contínuo, soluções como Prometheus e Grafana fornecem insights valiosos sobre o desempenho e a saúde das aplicações, permitindo que as equipes identifiquem e resolvam problemas rapidamente.",
        date: "2025-02-24",
        image: "https://example.com/devops.jpg",
        category: "DevOps",
        views: 15
    },
    {
        id: 4,
        title: "Tendências Emergentes no DevOps para 2025",
        content: "O mundo do DevOps está em constante evolução, com novas tecnologias e práticas surgindo para melhorar a eficiência e a colaboração entre equipes de desenvolvimento e operações. Em 2025, algumas tendências emergentes estão moldando o futuro do DevOps:\n\nObservabilidade Avançada: Ferramentas de observabilidade estão se tornando mais sofisticadas, oferecendo insights detalhados sobre o desempenho e a saúde das aplicações. Soluções como Grafana, Prometheus e ELK Stack estão sendo aprimoradas para melhor visualização e análise de dados em tempo real, permitindo que as equipes identifiquem e resolvam problemas antes que afetem os usuários finais.\n\nAdoção de IaC (Infraestrutura como Código): A infraestrutura como código continua a ganhar força, permitindo que as equipes gerenciem e provisionem recursos de forma eficiente e automatizada. Ferramentas como Terraform, Ansible e AWS CloudFormation são essenciais para a implementação de IaC, possibilitando que as equipes definam a infraestrutura de maneira declarativa e reproduzível, aumentando a consistência e a confiabilidade.\n\nAutomação de Segurança (DevSecOps): Integrar práticas de segurança ao ciclo de vida do desenvolvimento é fundamental. O DevSecOps está crescendo, garantindo que a segurança seja incorporada desde o início, com ferramentas como Snyk, Checkmarx e Aqua Security. Essas ferramentas ajudam a identificar e corrigir vulnerabilidades de segurança precocemente, reduzindo o risco de ataques e garantindo a integridade das aplicações.\n\nContêineres e Orquestração: O uso de contêineres, especialmente com Docker, e a orquestração com Kubernetes, estão se tornando padrão na implantação de aplicações. A gestão de clusters e a escalabilidade automática são componentes críticos dessa tendência, permitindo que as aplicações se adaptem dinamicamente às demandas variáveis e garantindo alta disponibilidade.\n\nInteligência Artificial e Machine Learning: A IA e o ML estão sendo aplicados no DevOps para prever falhas, otimizar processos e automatizar tarefas repetitivas. Plataformas que utilizam essas tecnologias ajudam a identificar anomalias e a melhorar a eficiência operacional, permitindo que as equipes se concentrem em tarefas mais estratégicas e de alto valor.\n\nEssas tendências estão moldando a maneira como as equipes de DevOps operam, garantindo que as aplicações sejam entregues de forma mais rápida, segura e eficiente. Ficar atualizado com essas inovações é essencial para qualquer profissional de DevOps que deseja se manter competitivo no mercado.",
        date: "2025-02-26",
        image: "https://example.com/emerging-devops.jpg",
        category: "DevOps",
        views: 25
    }
];

function displayPosts(postsArray) {
    const container = document.querySelector('.posts-container');
    container.innerHTML = '';
    postsArray.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <img src="${post.image}" alt="Imagem do post">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <p>Data: ${post.date}</p>
            <p>Categoria: ${post.category}</p>
            <p>Visualizações: ${post.views}</p>
        `;
        postCard.addEventListener('click', () => {
            window.location.href = `post.html?id=${post.id}`;
        });
        container.appendChild(postCard);
    });
}

function filterPosts(category) {
    if (category === 'all') {
        displayPosts(posts);
    } else {
        const filteredPosts = posts.filter(post => post.category === category);
        displayPosts(filteredPosts);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayPosts(posts);
});

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
    const post = posts.find(p => p.id == postId);
    if (post) {
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-date').textContent = post.date;
        document.getElementById('post-image').src = post.image;
        document.getElementById('post-content').textContent = post.content;
        document.getElementById('category-name').textContent = post.category;
        document.getElementById('views-count').textContent = post.views;
        post.views += 1;
    }
}
