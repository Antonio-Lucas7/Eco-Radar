/*
  ==========================================================================
  ECORADAR - CATALOG.JS
  Dataset Simulado de Notícias, Renderização, Filtros, Busca e Alternância de Modo
  ==========================================================================
*/

(function () {
  'use strict';

  // Dataset simulado preparado para futura integração com REST API / Backend
  const NOTICIAS_DATA = [
    {
      id: 1,
      titulo: "Aquecimento dos Oceanos Atinge Novo Recorde e Altera Correntes Marítimas",
      categoria: "Oceanos",
      data: "14 de Setembro, 2026",
      resumo: "Temperaturas extremas nas águas afetam a vida marinha e alteram os padrões climáticos globais.",
      conteudoSimples: "Os oceanos do planeta estão ficando mais quentes. Isso acontece porque a Terra está retendo mais calor do que o normal. Quando a água esquenta demais, os peixes e corais sofrem para sobreviver e o clima muda em várias regiões, provocando tempestades mais fortes ou secas intensas. Proteger os oceanos ajuda a equilibrar o clima de todo o planeta.",
      conteudoAvancado: "A temperatura média da superfície do mar atingiu um pico histórico de 21.2°C no último trimestre. O aumento térmico reduz a capacidade de absorção de CO₂ pelos oceanos e provoca o branqueamento em massa de 72% dos recifes de coral monitorados. A desaceleração da Circulação Meridional do Atlântico (AMOC) é estimada em 15%, aumentando a frequência de eventos meteorológicos extremos no Hemisfério Norte.",
      imagem: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        variacaoTemperatura: "+1.35°C acima da média pré-industrial",
        absorcaoCarbono: "-12% de eficiência na absorção anual",
        recifesAfetados: "72% em estado de alerta crítico",
        fonteMeteo: "NOAA & Copernicus Marine Service"
      }
    },
    {
      id: 2,
      titulo: "Tecnologia de Satélites Reduz Desmatamento Ilegal em 40% na Amazônia",
      categoria: "Florestas",
      data: "12 de Setembro, 2026",
      resumo: "Novos sistemas de monitoramento em tempo real com radar ajudam fiscais a proteger a floresta densa.",
      conteudoSimples: "Satélites no espaço agora conseguem ver árvores sendo cortadas mesmo quando há nuvens no céu. Isso ajuda as equipes de proteção a chegarem rápido nos locais de desmatamento ilegal e impedir a destruição da floresta.",
      conteudoAvancado: "A implementação de satélites com radar de abertura sintética (SAR) em banda C e inteligência artificial preditiva permitiu identificar alertas de desmatamento a partir de 0.1 hectare. O tempo de resposta para fiscalização em campo caiu de 14 dias para apenas 6 horas, resultando em uma queda de 40% na degradação florestal não autorizada.",
      imagem: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        resolucaoImagem: "Resolução espacial de 50cm por pixel",
        tempoDetecao: "< 6 horas de latência de alerta",
        areaPreservada: "450.000 hectares protegidos no ciclo",
        tecnologiaUsada: "Radar SAR + Algoritmos de Visão Computacional"
      }
    },
    {
      id: 3,
      titulo: "Avanço da Energia Solar Transforma Cidades e Reduz Emissões Urbanas",
      categoria: "Energia",
      data: "10 de Setembro, 2026",
      resumo: "Painéis de nova geração com maior eficiência tornam a energia limpa acessível e viável para comunidades.",
      conteudoSimples: "A energia que vem do Sol está mais barata e eficiente. Mais casas, escolas e empresas estão usando placas solares no telhado para gerar sua própria eletricidade limpa, diminuindo a poluição do ar nas cidades.",
      conteudoAvancado: "Células fotovoltaicas de perovskita sobre silício atingiram eficiência recorde de 31.8% em testes comerciais. A descentralização da rede elétrica com microredes inteligentes (smart grids) reduziu a dependência de termelétricas a fóssil em 28% nos grandes centros urbanos durante os picos de consumo.",
      imagem: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        eficienciaCelula: "31.8% de conversão fotovoltaica",
        reducaoGases: "-4.2 Gigatoneladas de CO₂ eq/ano",
        capacidadeInstalada: "+145 GW integrados à rede",
        vidaUtil: "Estimada em 35 anos com degradação < 0.4%/ano"
      }
    },
    {
      id: 4,
      titulo: "Relatório Aponta Riscos da Poluição por Microplásticos na Fauna Aquática",
      categoria: "Poluição",
      data: "08 de Setembro, 2026",
      resumo: "Partículas microscópicas de plástico foram encontradas na cadeia alimentar e exigem filtragem rigorosa.",
      conteudoSimples: "Pedaços minúsculos de plástico que descartamos estão parando nos rios e mares. Peixes e outros animais acabam engolindo esse material sem querer. Cientistas pedem a redução urgente do uso de plásticos descartáveis.",
      conteudoAvancado: "A concentração média de microplásticos (< 5mm) na água potável e estuários atingiu 140 partículas por litro. Estudos ecotoxicológicos demonstram bioacumulação de aditivos químicos (como ftalatos e bisfenóis) em tecidos orgânicos de espécies aquíferas, alterando a função endócrina e a biodiversidade local.",
      imagem: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        tamanhoParticula: "De 1 micrômetro a 5 milímetros",
        densidadeDetectada: "140 partículas/litro",
        taxaBioacumulacao: "Aumento de 3.5x no topo da cadeia trófica",
        metodoFiltragem: "Membranas de grafeno e biorremediação por fungos"
      }
    },
    {
      id: 5,
      titulo: "Iniciativas de Economia Circular Reduzem Lixo Urbano e Geram Empregos",
      categoria: "Sustentabilidade",
      data: "05 de Setembro, 2026",
      resumo: "Cidades adotam reuso de materiais, compostagem orgânica e design de embalagens biodegradáveis.",
      conteudoSimples: "Em vez de jogar tudo fora no lixo comum, comunidades estão aprendendo a reutilizar e reciclar quase tudo. Os restos de comida viram adubo para plantas e as embalagens velhas viram novos produtos, criando novos trabalhos.",
      conteudoAvancado: "A transição de modelos lineares para a Economia Circular evitou o envio de 1.8 milhão de toneladas de resíduos sólidos para aterros sanitários no último ano. A logística reversa de eletrônicos recuperou 65% de metais raros (lítio, cobalto e cobre), reduzindo os impactos da mineração virgem.",
      imagem: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        desvioAterros: "1.8 mi de toneladas recicladas/compostadas",
        taxaRecuperacaoMetais: "65% dos componentes eletrônicos",
        reducaoMetano: "-32% na emissão de aterros urbanos",
        impactoEconomico: "+12.000 postos de trabalho verdes criados"
      }
    },
    {
      id: 6,
      titulo: "Sensores IoT e Inteligência Artificial Preveem Mudanças Climáticas Locais",
      categoria: "Tecnologia Ambiental",
      data: "02 de Setembro, 2026",
      resumo: "Rede de sensores de baixo custo envia dados ao vivo sobre qualidade do ar, umidade e risco de queimadas.",
      conteudoSimples: "Pequenos aparelhos espalhados pelas florestas e cidades medem o ar, a temperatura e o vento o tempo todo. Se um incêndio começar ou o ar ficar poluído, o sistema avisa as autoridades na mesma hora.",
      conteudoAvancado: "A implantação de redes de sensores IoT alimentados por painéis solares miniatura e processamento Edge AI permite detectar focos de calor em raio de 5 km em menos de 90 segundos. Os modelos preditivos alimentados por dados microclimáticos locais aumentaram a precisão do alerta de tempestades repentinas em 85%.",
      imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        tempoAlertaIncendio: "< 90 segundos de detecção",
        precisaoPrevisao: "85% de acerto microclimático",
        densidadeSensores: "1 nó sensor a cada 2 km²",
        protocoloComunicacao: "LoRaWAN & Redes de Satélites LEO"
      }
    },
    {
      id: 7,
      titulo: "Espécies Ameaçadas Mostram Sinais de Recuperação em Reservas Protegidas",
      categoria: "Biodiversidade",
      data: "28 de Agosto, 2026",
      resumo: "Projetos de conservação e restauração de habitats trazem de volta espécies nativas de animais e plantas.",
      conteudoSimples: "Graças ao cuidado com parques naturais e florestas protegidas, animais que estavam quase sumindo estão nascendo com segurança e voltando para a natureza. Isso mostra que quando cuidamos da natureza, ela se recupera.",
      conteudoAvancado: "Programas de reintrodução de fauna associados à restauração de corredores ecológicos registraram um aumento de 22% no tamanho populacional de espécies-chave em ecossistemas de mata atlântica e cerrado. O monitoramento por bioacústica e armadilhas fotográficas inteligentes confirmou o nascimento de novos indivíduos sem intervenção humana direta.",
      imagem: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        crescimentoPopulacional: "+22% em espécies monitoradas",
        areaCorredores: "120.000 hectares reconectados",
        monitoramentoBioacustico: "24/7 com inteligência de áudio",
        indiceBiodiversidade: "Elevação de 0.42 para 0.68 na escala Shannon-Wiener"
      }
    },
    {
      id: 8,
      titulo: "O Papel da Floresta Urbana no Combate às Ilhas de Calor nas Metrópoles",
      categoria: "Clima",
      data: "25 de Agosto, 2026",
      resumo: "Plantio estratégico de árvores reduz a temperatura das cidades em até 4°C em dias quentes.",
      conteudoSimples: "Plantando mais árvores e criando jardins nos prédios, o ar das cidades fica mais fresco e agradável. As sombras e as plantas funcionam como um ar-condicionado natural para as ruas.",
      conteudoAvancado: "A evapotranspiração da vegetação urbana combinada ao aumento do albedo de superfícies públicas reduziu o efeito de ilha de calor urbana em até 4.2°C nos bairros densamente povoados. O estudo demonstra redução direta de 18% nos casos de internação por doenças cardiorrespiratórias em períodos de ondas de calor extrema.",
      imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      dadosTecnicos: {
        reducaoTemperatura: "Até -4.2°C de pico nas ilhas de calor",
        evapotranspiracaoDiaria: "400 litros de água por árvore adulta",
        absorcaoParticulados: "35kg de poeira fina/ano por árvore",
        reducaoHospitalizacao: "-18% de casos respiratórios"
      }
    }
  ];

  // Estado atual dos filtros e modo
  let state = {
    categoriaAtiva: 'Todas',
    termoBusca: '',
    modo: localStorage.getItem('ecoradar_mode') || 'simple' // 'simple' | 'advanced'
  };

  /**
   * Salva o modo no localStorage e atualiza os botões e textos ((ERRO AQUI))
   * @param {string} modo - 'simple' ou 'advanced'
  */
  function setMode(modo) {
    state.modo = modo;
    localStorage.setItem('ecoradar_mode', modo);
    updateModeUI();

    // Notifica atualização em componentes de noticia ou catalogo
    renderCatalog();
    renderSingleArticle();
  }

  /*
    Atualiza a interface visual dos botões de modo
  */
  function updateModeUI() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      const mode = btn.getAttribute('data-mode');
      if (mode === state.modo) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Atualiza badges visuais do modo
    document.querySelectorAll('.current-mode-label').forEach(el => {
      el.innerText = state.modo === 'simple' ? 'Modo Simples' : 'Modo Avançado';
    });
  }

  /*
    Filtra o dataset de noticias com base na categoria e busca
  */
  function getFilteredNoticias() {
    return NOTICIAS_DATA.filter(n => {
      const matchCategoria = state.categoriaAtiva === 'Todas' || n.categoria.toLowerCase() === state.categoriaAtiva.toLowerCase();
      const q = state.termoBusca.toLowerCase().trim();
      const matchBusca = !q || 
        n.titulo.toLowerCase().includes(q) ||
        n.resumo.toLowerCase().includes(q) ||
        n.categoria.toLowerCase().includes(q) ||
        n.conteudoSimples.toLowerCase().includes(q) ||
        n.conteudoAvancado.toLowerCase().includes(q);

      return matchCategoria && matchBusca;
    });
  }

  /*
    Renderiza a grade de cards no catalogo (catalog.html e seções na Home)
  */
  function renderCatalog() {
    const gridContainer = document.getElementById('news-grid-container');
    if (!gridContainer) return;

    const noticias = getFilteredNoticias();

    if (noticias.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">Nenhum conteúdo encontrado</h3>
          <p class="empty-state-text">Não encontramos resultados para "${state.termoBusca}". Tente pesquisar por outros termos ou selecionar outra categoria.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = noticias.map(n => {
      const textoExibido = state.modo === 'simple' ? n.conteudoSimples : n.conteudoAvancado;
      const categoriaSlug = n.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      return `
        <article class="news-card">
          <div class="news-card-img-wrapper">
            <img src="${n.imagem}" alt="${n.titulo}" class="news-card-img" loading="lazy">
            <span class="badge badge-${categoriaSlug} news-card-badge">${n.categoria}</span>
          </div>
          <div class="news-card-body">
            <span class="news-card-date"> ${n.data}</span>
            <h3 class="news-card-title">${n.titulo}</h3>
            <p class="news-card-summary">
              ${state.modo === 'simple' ? n.resumo : (textoExibido.substring(0, 140) + '...')}
            </p>
            <div class="news-card-footer">
              <span class="mode-indicator-tag">${state.modo === 'simple' ? ' Leitura Clara' : ' Dados & Métricas'}</span>
              <a href="${getRelativePath('pages/noticia.html')}?id=${n.id}" class="btn btn-outline btn-sm">
                Ler Matéria &rarr;
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /*
    Helper para ajustar caminhos relativos de links conforme a pagina atual
  */
  function getRelativePath(targetPath) {
    const isSubFolder = window.location.pathname.includes('/pages/');
    if (isSubFolder) {
      return targetPath.replace('pages/', '');
    }
    return targetPath;
  }

  /*
    Renderiza a pagina individual de noticia (noticia.html)
  */
  function renderSingleArticle() {
    const articleContainer = document.getElementById('single-article-view');
    if (!articleContainer) return;

    // Obtem ID da noticia via parametro na URL (?id=X)
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    const noticia = NOTICIAS_DATA.find(n => n.id === id) || NOTICIAS_DATA[0];

    // Preenche titulos e metadados
    const categoryBadge = document.getElementById('article-category');
    const dateSpan = document.getElementById('article-date');
    const titleHeader = document.getElementById('article-title');
    const summaryLead = document.getElementById('article-summary');
    const bannerImg = document.getElementById('article-image');

    if (categoryBadge) {
      categoryBadge.innerText = noticia.categoria;
      const slug = noticia.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      categoryBadge.className = `badge badge-${slug}`;
    }
    if (dateSpan) dateSpan.innerText = ` ${noticia.data}`;
    if (titleHeader) titleHeader.innerText = noticia.titulo;
    if (summaryLead) summaryLead.innerText = noticia.resumo;
    if (bannerImg) {
      bannerImg.src = noticia.imagem;
      bannerImg.alt = noticia.titulo;
    }

    // Gerencia exibição do conteudo Simples vs Avançado
    const simpleContainer = document.getElementById('content-simple-view');
    const advancedContainer = document.getElementById('content-advanced-view');
    const techDataBox = document.getElementById('technical-data-box');

    if (simpleContainer && advancedContainer) {
      if (state.modo === 'simple') {
        simpleContainer.style.display = 'block';
        advancedContainer.style.display = 'none';
        simpleContainer.innerHTML = `<p>${noticia.conteudoSimples}</p>`;
        if (techDataBox) techDataBox.style.display = 'none';
      } else {
        simpleContainer.style.display = 'none';
        advancedContainer.style.display = 'block';
        advancedContainer.innerHTML = `<p>${noticia.conteudoAvancado}</p>`;

        // Renderiza caixa de dados técnicos no modo avançado
        if (techDataBox && noticia.dadosTecnicos) {
          techDataBox.style.display = 'block';
          const techList = document.getElementById('tech-data-list');
          if (techList) {
            techList.innerHTML = Object.entries(noticia.dadosTecnicos).map(([key, val]) => `
              <div class="technical-data-item">
                <div class="tech-item-val">${val}</div>
                <div class="tech-item-lbl">${formatTechKey(key)}</div>
              </div>
            `).join('');
          }
        }
      }
    }

    // Renderiza Noticias Relacionadas
    renderRelatedNews(noticia.id, noticia.categoria);
  }

  function formatTechKey(key) {
    const keysMap = {
      variacaoTemperatura: "Variação Térmica Registrada",
      absorcaoCarbono: "Capacidade de Absorção CO₂",
      recifesAfetados: "Recifes em Risco",
      fonteMeteo: "Órgão Responsável",
      resolucaoImagem: "Precisão dos Satélites",
      tempoDetecao: "Velocidade de Alerta",
      areaPreservada: "Área Total Protegida",
      tecnologiaUsada: "Sensores & Algoritmos",
      eficienciaCelula: "Eficiência Energética",
      reducaoGases: "Mitigação Estimada",
      capacidadeInstalada: "Novos Megawatts",
      vidaUtil: "Durabilidade Esperada",
      tamanhoParticula: "Dimensão dos Poluentes",
      densidadeDetectada: "Partículas por Litro",
      taxaBioacumulacao: "Acúmulo na Fauna",
      metodoFiltragem: "Tecnologia de Filtragem",
      desvioAterros: "Volume de Resíduos Reciclados",
      taxaRecuperacaoMetais: "Metais Estratégicos Recuperados",
      reducaoMetano: "Queda na Emissão de Metano",
      impactoEconomico: "Empregos Verdes Gerados",
      tempoAlertaIncendio: "Tempo Médio de Alerta",
      precisaoPrevisao: "Acurácia Microclimática",
      densidadeSensores: "Rede de Sensores IoT",
      protocoloComunicacao: "Conectividade de Dados",
      crescimentoPopulacional: "Recuperação Populacional",
      areaCorredores: "Corredores Ecológicos",
      monitoramentoBioacustico: "Sensores de Áudio Nativos",
      indiceBiodiversidade: "Índice de Biodiversidade",
      reducaoTemperatura: "Redução do Pico de Calor",
      evapotranspiracaoDiaria: "Resfriamento por Árvore",
      absorcaoParticulados: "Filtragem de Poeira Fina",
      reducaoHospitalizacao: "Redução de Casos de Saúde"
    };
    return keysMap[key] || key;
  }

  function renderRelatedNews(currentId, categoria) {
    const relatedContainer = document.getElementById('related-news-container');
    if (!relatedContainer) return;

    const relacionadas = NOTICIAS_DATA
      .filter(n => n.id !== currentId)
      .slice(0, 3);

    relatedContainer.innerHTML = relacionadas.map(n => `
      <article class="news-card">
        <div class="news-card-img-wrapper">
          <img src="${n.imagem}" alt="${n.titulo}" class="news-card-img" loading="lazy">
          <span class="badge news-card-badge">${n.categoria}</span>
        </div>
        <div class="news-card-body">
          <h4 class="news-card-title" style="font-size: 1.05rem;">${n.titulo}</h4>
          <p class="news-card-summary" style="font-size: 0.85rem;">${n.resumo}</p>
          <a href="noticia.html?id=${n.id}" class="btn btn-outline btn-sm" style="margin-top: auto;">
            Ler Artigo &rarr;
          </a>
        </div>
      </article>
    `).join('');
  }

  // Inicialização e Event Listeners
  document.addEventListener('DOMContentLoaded', () => {
    updateModeUI();

    // Event listener nos botões de alternancia de modo [Simples | Avançado]
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetMode = btn.getAttribute('data-mode');
        setMode(targetMode);
      });
    });

    // Event listener na barra de busca
    const searchInput = document.getElementById('news-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.termoBusca = e.target.value;
        renderCatalog();
      });
    }

    // Event listener nos filtros por categoria (Pill filters)
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.categoriaAtiva = pill.getAttribute('data-category') || 'Todas';
        renderCatalog();
      });
    });

    // Executa renderizações conforme a pagina atual
    renderCatalog();
    renderSingleArticle();
  });

  // Expõe API para uso global
  window.EcoCatalog = {
    NOTICIAS: NOTICIAS_DATA,
    setMode,
    renderCatalog,
    getFilteredNoticias
  };

})();
