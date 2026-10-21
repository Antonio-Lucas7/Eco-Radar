# EcoRadar — Plataforma de Informação e Conscientização Ambiental Acessível

O **EcoRadar** é uma plataforma web moderna, acessível e intuitiva criada para democratizar a informação ambiental. O sistema oferece dois modos de visualização (**Simples** e **Avançado**), permitindo que qualquer pessoa compreenda temas ecológicos, ao mesmo tempo em que disponibiliza análises técnicas, estatísticas e dados aprofundados para especialistas e estudantes.

---

##  Arquitetura do Projeto

O projeto foi construído respeitando estritamente a separação de responsabilidades no Front-End puro:

```
EcoRadar/
├── frontend/
│   ├── index.html                  # Página Principal (Home)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── content/
│   │   │   │   ├── content.css     # Estilos de seções, hero, cards e componentes gerais
│   │   │   │   └── news.css        # Estilos específicos de notícias, leitores e notícias relacionadas
│   │   │   ├── global/
│   │   │   │   ├── global.css      # Reset, variáveis CSS, tipografia e estilos globais
│   │   │   │   ├── header.css      # Estilos do cabeçalho, navegação e controles globais
│   │   │   │   └── footer.css      # Estilos do rodapé
│   │   │   ├── responsive/
│   │   │   │   ├── responsive.css  # Breakpoints responsivos (320px - 1440px+)
│   │   │   │   └── accessibility.css # Alto contraste, tamanho de fonte e movimento reduzido
│   │   │   └── style.css           # Ponto de carregamento centralizado dos estilos
│   │   ├── img/
│   │   │   ├── acessibilidade.svg  # Ícone do painel de acessibilidade
│   │   │   └── logo.svg            # Logo vetorial oficial do EcoRadar
│   │   └── js/
│   │       ├── accessibility.js    # Painel de acessibilidade, fontes, alto contraste e localStorage
│   │       ├── catalog.js          # Mock dataset, renderização, busca e filtros por categoria
│   │       ├── main.js             # Inicialização, menu mobile e navegação
│   │       └── speech.js           # Síntese de Voz (SpeechSynthesis) e Reconhecimento de Voz (SpeechRecognition)
│   └── pages/
│       ├── catalog.html            # Catálogo de notícias com busca e filtros
│       ├── explorar.html           # Hub interativo pelos 7 eixos ambientais
│       ├── noticia.html            # Leitura individual de notícia com alternador Simples/Avançado
│       └── sobre.html              # Sobre o projeto, missão e acessibilidade
├── README.md
└── TODO.md
```

---

##  Funcionalidades Principais

1. **Modo Simples vs. Modo Avançado**:
   - **Simples**: Exposição direta, clara, sem vocabulário técnico excessivo.
   - **Avançado**: Dados científicos, métricas, contexto aprofundado e vocabulário especializado.
   - Alternância dinâmica via JavaScript sem recarregamento da página.

2. **Leitura Assistida por Voz (Síntese de Voz)**:
   - Utiliza a `SpeechSynthesis API` do navegador.
   - Permite **Iniciar**, **Pausar**, **Continuar**, **Parar** e ajustar a **Velocidade** (0.8x a 2x).
   - Lê dinamicamente o texto do modo ativo (Simples ou Avançado).

3. **Voz para Texto (Pesquisa por Voz)**:
   - Utiliza a `Web Speech API` (botão 🎙️ **Falar**).
   - Converte a fala do usuário em texto para o campo de busca.
   - Notifica adequadamente caso o navegador não possua suporte.

4. **Painel de Acessibilidade Completo**:
   - Ajuste de tamanho de texto: `A-`, `A`, `A+`.
   - Modo de **Alto Contraste**.
   - Opção de **Reduzir Animações**.
   - Persistência das preferências do usuário no `localStorage`.

5. **Busca e Filtragem por Categoria**:
   - Categorias: *Clima*, *Florestas*, *Oceanos*, *Biodiversidade*, *Energia*, *Poluição*, *Sustentabilidade*.
   - Busca em tempo real por título, resumo, conteúdo e categoria.

---

##  Tecnologias Utilizadas

- **HTML5**: Estruturação semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3**: Variáveis CSS, Flexbox, CSS Grid, Média Queries e Animações Acessíveis.
- **JavaScript (ES6+)**: Vanilla JS sem frameworks ou dependências externas.

---

##  Como Executar

Não é necessário instalar pacotes Node.js nem rodar servidores backend.

1. Abra a pasta do projeto.
2. Dê um duplo clique no arquivo `frontend/index.html` para abrir diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

---

##  Preparação para Backend Futuro

O arquivo `catalog.js` possui os dados de notícias estruturados em formato JSON/Array. Para conectar a uma API futuramente, basta substituir o array estático por uma função `async fetch('/api/noticias')`.
