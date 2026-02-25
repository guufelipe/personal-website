document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section');

    // Mapeamento dos projetos para os detalhes do modal
    const projectsData = {
        'project-1': {
            title: 'HASCHATBOT',
            description: 'Chatbot capaz de auxiliar pacientes com Hipertensão Arterial Sistêmica com as suas rotinas, incluindo auxilio para aferir pressão, lembretes para medicamentos e duvidas sobre o tratamento e prontuário. Foi desenvolvido durante 1 ano no NUTES/HC-UFPE orientado pelo professor Dr. Amadeu Campos. O projeto foi financiado pela FACEPE - Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco, viabilizado pelo edital BIA, que destinava bolsas para alunos da graduação no primeiro ano.',
            techs: ['Dialogflow', 'JavaScript', 'Simpósio'],
            images: ['images/HASCHATBOT1img.png', 'images/HASCHATBOT2img.png'],
            link: 'https://t.me/haaschatbot',
            linkLabel: 'Testar no Telegram'
        },
        'project-2': {
            title: 'Integração de Dados da CTTU-RECIFE',
            description: 'Projeto desenvolvido em equipe durante a disciplina Banco de Dados, para aplicar e comparar os dois pipelines de integração de dados. Para isso utilizamos os ultimos dados disponibilizados pela prefeitura do Recife de multas registradas pela CTTU. No projeto integramos os dados disponibilizados em CSV, passando pra um banco relacional tanto no PostgreSQL quanto no SupaBase. Quando abordamos o pipeline de ETL utilizamos o Postgree e quando abordamos o ELT utilizamos o SupaBase.',
            techs: ['SQL', 'Python', 'PostgreSQL', 'PostgreSQL', 'Pandas'],
            images: ['images/CTTU-Img.png', 'images/resultado_integracao.png'],
            link: 'https://github.com/guufelipe/CTTU-RECIFE-ETL-ELT',
            linkLabel: 'Ver repositório'
        },
        'project-3': {
            title: 'Algoritmos de Ordenação',
            description: 'Na disciplina de Algoritmos e Estruturas de Dados, desenvolvi diversos algoritmos de ordenação, como Quick Sort, Merge Sort e Bubble Sort. O objetivo era entender a eficiência e complexidade de cada algoritmo, além de implementar testes para comparar seu desempenho em diferentes conjuntos de dados. Nesse repositório você poderá encontrar as implementações em Python, bem como análises de complexidade.',
            techs: ['Python', 'Algoritmos', 'Estrutura de Dados'],
            images: ['images/Algoritmos-Estudo.png'],
            link: 'https://github.com/guufelipe/Algoritmos-de-Ordenacao',
            linkLabel: 'Ver repositório'
        },
        'project-4': {
            title: 'Bomberman Game',
            description: 'Na disciplina de Introdução à Programação, para colocar em prática os conceitos aprendidos sobre Orientação a Objetos, desenvolvi em equipe uma releitura do clássico jogo Bomberman utilizando Python e Pygame. O jogo inclui funcionalidades como movimentação, colocação de bombas, explosões e inimigos. Este projeto me ajudou a consolidar meus conhecimentos em programação orientada a objetos e aprender um pouco mais sobre desenvolvimento de jogos.',
            techs: ['Python', 'Pygame', 'OOP'],
            images: ['images/Bomberman-img.png', 'images/Bomberman-img2.png', 'images/Bomberman-img3.png'],
            link: 'https://github.com/guufelipe/Game-Projeto-IP',
            linkLabel: 'Ver repositório'
        },
        'project-5': {
            title: 'Colheita Conectada',
            description: 'Projeto desenvolvido para a disciplin de Interação Humano-Máquina, onde descutíamos noções de usabilidade e design centrado no usuário. O projeto consistia em criar um artefato digital que fosse capaz de acompanhar agricultores familiares ofertando apoio tecnológico que muitas vezes foram criadas para grandes produtores rurais. O projeto foi desenvolvido em equipe e utilizamos metodologias ágeis para o desenvolvimento do protótipo de alta fidelidade.',
            techs: ['Lovable', 'Figma', 'Design Thinking'],
            images: ['images/ColheitaConectada1.png', 'images/ColheitaConectada2.png', 'images/ColheitaConectada3.png'],
            link: null
        },
        'project-6': {
            title: 'e.tal - HackaPride 2024',
            description: 'E.tal é uma plataforma web desenvolvida durante o HackaPride 2024, um hackaton focado em soluções para a comunidade LGBTQIA+. A plataforma tem objetivo de mapear e disponibilizar informações sobre editais de fomento e opotunidades financeiras voltadas para empreendedores LGBTQIA\+. O projeto foi desenvolvido em equipe e conquistou o primeiro lugar na competição. Sem dúvidas foi uma experiência que marcou minha jornada enquanto estudante de computação.',
            techs: ['Figma', 'Canva'],
            images: ['images/HackaPride00.jpeg', 'images/HackaPride1.jpg', 'images/HackaPride2.jpg', 'images/HackaPride3.jpg', 'images/HackaPride4.jpg', 'images/HackaPride5.jpg', 'images/HackaPride6.jpeg'],
            link: null
        },

        'project-7': {
            title: 'ARIS - Regulação Inteligente',
            description: 'Sistema de IA em desenvolvimento (fase piloto) para otimizar a triagem de leitos na Rede Ebserh e HC-UFPE. Atuo como pesquisador e cientista de dados, sendo responsável pela estruturação da base de dados, treinamento do modelo de Machine Learning e desenvolvimento da interface. O sistema utiliza NLP para analisar solicitações e prever a aderência aos perfis hospitalares.',
            techs: ['Python', 'Machine Learning', 'NLP', 'Data Science'],
            images: ['images/ARIS_1.png', 'images/ARIS_2.png', 'images/ARIS_3.png', 'images/ARIS_4.png'],
            link: 'https://github.com/guufelipe/ARIS-Regulacao-Inteligente',
            linkLabel: 'Ver repositório'
        },
        'project-8': {
            title: 'CAPIBAFIT',
            description: 'Webapp focado no engajamento da moeda digital de Recife, a "Capiba". O projeto converte atividades físicas e visitas a pontos turísticos em recompensas virtuais. Desenvolvido como uma Prova de Conceito (PoC) em parceria entre o CIn-UFPE e a Prefeitura do Recife, aplicando rigorosas técnicas de Engenharia de Software para garantir um fluxo de desenvolvimento funcional.',
            techs: ['React', 'Node.js', 'JavaScript', 'Engenharia de Software'],
            images: ['images/CAPIBA_01.png', 'images/CAPIBA_02.png', 'images/CAPIBA_03.png', 'images/CAPIBA_04.jpg', 'images/CAPIBA_05.jpg', 'images/CAPIBA_06.jpg'],
            link: 'https://github.com/guufelipe/CAPIBAFIT-devsoft',
            linkLabel: 'Ver repositório'
        },
        'project-9': {
            title: 'Monitoramento de Eventos Corporativos',
            description: 'Projeto de Engenharia de Dados focado na consolidação de fontes heterogêneas de duas unidades de uma empresa em uma base única. Realizei o processo de ETL, análise de volumetria, criação de heatmaps e identificação de gargalos de performance. Todo o fluxo de análise e tratamento dos dados foi documentado detalhadamente em Jupyter Notebooks.',
            techs: ['Python', 'Pandas', 'Jupyter Notebook', 'ETL', 'Matplotlib/Seaborn'],
            images: ['images/LOGS_1.png', 'images/LOGS_2.png', 'images/LOGS_3.png','images/LOGS_4.png', 'images/LOGS_5.png'],
            link: 'https://github.com/guufelipe/monitoramento-eventos-corporativos',
            linkLabel: 'Ver repositório'
        }
    };

    // Função para o scroll suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Função para destacar o menu durante o scroll
    function highlightNavMenu() {
        const headerHeight = document.querySelector('.header').offsetHeight;
        let currentSectionId = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    // Adiciona o evento de scroll para chamar a função
    window.addEventListener('scroll', highlightNavMenu);
    highlightNavMenu();


    // Lógica do Modal
    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechList = document.getElementById('modal-tech-list');
    const modalProjectLink = document.getElementById('modal-project-link');
    const modalImage = document.getElementById('modal-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentProjectImages = [];
    let currentImageIndex = 0;
    const brokenImagePaths = new Set();
    const modalImageFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="#f4f4f4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#666" font-family="Poppins, Arial" font-size="24">Imagem indisponível</text></svg>'
    )}`;

    function findNextAvailableImageIndex(startIndex, direction = 1) {
        if (!currentProjectImages.length) {
            return -1;
        }

        for (let attempts = 0; attempts < currentProjectImages.length; attempts++) {
            const candidateIndex = (startIndex + (attempts * direction) + currentProjectImages.length) % currentProjectImages.length;
            const candidatePath = currentProjectImages[candidateIndex];
            if (!brokenImagePaths.has(candidatePath)) {
                return candidateIndex;
            }
        }

        return -1;
    }

    function updateGalleryButtonsVisibility() {
        const availableImages = currentProjectImages.filter(path => !brokenImagePaths.has(path));
        const showButtons = availableImages.length > 1;
        prevBtn.style.display = showButtons ? 'block' : 'none';
        nextBtn.style.display = showButtons ? 'block' : 'none';
    }

    function renderCurrentImage() {
        const nextValidIndex = findNextAvailableImageIndex(currentImageIndex, 1);

        if (nextValidIndex === -1) {
            modalImage.src = modalImageFallback;
            updateGalleryButtonsVisibility();
            return;
        }

        currentImageIndex = nextValidIndex;
        modalImage.src = currentProjectImages[currentImageIndex];
        updateGalleryButtonsVisibility();
    }

    modalImage.addEventListener('error', () => {
        const failedImage = currentProjectImages[currentImageIndex];
        if (failedImage) {
            brokenImagePaths.add(failedImage);
        }

        const replacementIndex = findNextAvailableImageIndex(currentImageIndex + 1, 1);

        if (replacementIndex === -1) {
            modalImage.src = modalImageFallback;
            updateGalleryButtonsVisibility();
            return;
        }

        currentImageIndex = replacementIndex;
        modalImage.src = currentProjectImages[currentImageIndex];
        updateGalleryButtonsVisibility();
    });

    projectCards.forEach((card) => {
        const link = card.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.dataset.projectId;
            const project = projectsData[projectId];

            if (project) {
                // Popula o modal com os dados do projeto
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                modalTechList.innerHTML = '';
                project.techs.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    modalTechList.appendChild(li);
                });

                // Configura a galeria de imagens
                currentProjectImages = project.images;
                currentImageIndex = 0;
                renderCurrentImage();

                if (project.link) {
                    modalProjectLink.href = project.link;
                    modalProjectLink.textContent = project.linkLabel || 'Ver projeto';
                    modalProjectLink.style.display = 'inline-block';
                } else {
                    modalProjectLink.style.display = 'none';
                }

                // Exibe o modal
                modal.style.display = 'block';
            }
        });
    });

    // Função para navegar na galeria
    function navigateGallery(direction) {
        if (!currentProjectImages.length) {
            return;
        }

        const step = direction === 'prev' ? -1 : 1;
        const nextIndex = findNextAvailableImageIndex(currentImageIndex + step, step);

        if (nextIndex === -1) {
            modalImage.src = modalImageFallback;
            updateGalleryButtonsVisibility();
            return;
        }

        currentImageIndex = nextIndex;
        modalImage.src = currentProjectImages[currentImageIndex];
        updateGalleryButtonsVisibility();
    }

    // Eventos para navegação da galeria
    prevBtn.addEventListener('click', () => navigateGallery('prev'));
    nextBtn.addEventListener('click', () => navigateGallery('next'));

    // Eventos para fechar o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});