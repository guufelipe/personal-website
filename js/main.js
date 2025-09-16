document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section');

    // Mapeamento dos projetos para os detalhes do modal
    const projectsData = {
        'project-1': {
            title: 'HASCHATBOT',
            description: 'Chatbot capaz de auxiliar pacientes com Hipertensão Arterial Sistêmica com as suas rotinas, incluindo auxilio para aferir pressão, lembretes para medicamentos e duvidas sobre o tratamento e prontuário. Foi desenvolvido durante 1 ano no NUTES/HC-UFPE orientado pelo professor Dr. Amadeu Campos. O projeto foi financiado pela FACEPE - Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco, viabilizado pelo edital BIA, que destinava bolsas para alunos da graduação no primeiro ano.',
            techs: ['Dialogflow', 'JavaScript', 'Simpósio'],
            images: ['images/HASCHATBOT1img.png', 'images/HASCHATBOT2img.png']
        },
        'project-2': {
            title: 'Integração de Dados da CTTU-RECIFE',
            description: 'Projeto desenvolvido em equipe durante a disciplina Banco de Dados, para aplicar e comparar os dois pipelines de integração de dados. Para isso utilizamos os ultimos dados disponibilizados pela prefeitura do Recife de multas registradas pela CTTU. No projeto integramos os dados disponibilizados em CSV, passando pra um banco relacional tanto no PostgreSQL quanto no SupaBase. Quando abordamos o pipeline de ETL utilizamos o Postgree e quando abordamos o ELT utilizamos o SupaBase.',
            techs: ['SQL', 'Python', 'PostgreSQL', 'SupaBase', 'Pandas'],
            images: ['images/CTTU-Img.png', 'images/resultado_integracao.png']
        },
        'project-3': {
            title: 'Algoritmos de Ordenação',
            description: 'Na disciplina de Algoritmos e Estruturas de Dados, desenvolvi diversos algoritmos de ordenação, como Quick Sort, Merge Sort e Bubble Sort. O objetivo era entender a eficiência e complexidade de cada algoritmo, além de implementar testes para comparar seu desempenho em diferentes conjuntos de dados. Nesse repositório você poderá encontrar as implementações em Python, bem como análises de complexidade.',
            techs: ['Python'],
            images: ['images/Algoritmos-Estudo.png']
        },
        'project-4': {
            title: 'Bomberman Game',
            description: 'Na disciplina de Introdução à Programação, para colocar em prática os conceitos aprendidos sobre Orientação a Objetos, desenvolvi em equipe uma releitura do clássico jogo Bomberman utilizando Python e Pygame. O jogo inclui funcionalidades como movimentação, colocação de bombas, explosões e inimigos. Este projeto me ajudou a consolidar meus conhecimentos em programação orientada a objetos e aprender um pouco mais sobre desenvolvimento de jogos.',
            techs: ['Python', 'Pygame', 'OOP'],
            images: ['images/Bomberman-img.png', 'images/Bomberman-img2.png', 'images/Bomberman-img3.png']
        },
        'project-5': {
            title: 'Colheita Conectada',
            description: 'Projeto desenvolvido para a disciplin de Interação Humano-Máquina, onde descutíamos noções de usabilidade e design centrado no usuário. O projeto consistia em criar um artefato digital que fosse capaz de acompanhar agricultores familiares ofertando apoio tecnológico que muitas vezes foram criadas para grandes produtores rurais. O projeto foi desenvolvido em equipe e utilizamos metodologias ágeis para o desenvolvimento do protótipo de alta fidelidade.',
            techs: ['Lovable', 'Figma', 'Design Thinking'],
            images: ['images/ColheitaConectada1.png', 'images/ColheitaConectada2.png', 'images/ColheitaConectada3.png']
        },
        'project-6': {
            title: 'e.tal - HackaPride 2024',
            description: 'E.tal é uma plataforma web desenvolvida durante o HackaPride 2024, um hackaton focado em soluções para a comunidade LGBTQIA+. A plataforma tem objetivo de mapear e disponibilizar informações sobre editais de fomento e opotunidades financeiras voltadas para empreendedores LGBTQIA\+. O projeto foi desenvolvido em equipe e conquistou o primeiro lugar na competição. Sem dúvidas foi uma experiência que marcou minha jornada enquanto estudante de computação.',
            techs: ['Figma', 'Canva'],
            images: ['images/HackaPride00.jpeg', 'images/HackaPride1.jpg', 'images/HackaPride2.jpg', 'images/HackaPride3.jpg', 'images/HackaPride4.jpg', 'images/HackaPride5.jpg', 'images/HackaPride6.jpeg']
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

    // Lógica para o formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const mailtoLink = `mailto:seu.email@exemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nome: " + name + "\nE-mail: " + email + "\n\n" + message)}`;
            window.location.href = mailtoLink;
            contactForm.reset();
        });
    }

    // Lógica do Modal
    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechList = document.getElementById('modal-tech-list');
    const modalImage = document.getElementById('modal-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    projectCards.forEach((card, index) => {
        const link = card.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = `project-${index + 1}`;
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
                modalImage.src = currentProjectImages[currentImageIndex];

                // Exibe o modal
                modal.style.display = 'block';
            }
        });
    });

    // Função para navegar na galeria
    function navigateGallery(direction) {
        if (direction === 'prev') {
            currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        } else {
            currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
        }
        modalImage.src = currentProjectImages[currentImageIndex];
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