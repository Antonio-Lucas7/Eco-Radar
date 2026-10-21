/*
  ==========================================================================
  ECORADAR - ACCESSIBILITY.JS
  Painel de Acessibilidade, Fontes, Alto Contraste e localStorage
  ==========================================================================
*/

(function () {
  'use strict';

  // Chaves de localStorage
  const STORAGE_KEYS = {
    FONT_SIZE: 'ecoradar_font_size',
    HIGH_CONTRAST: 'ecoradar_high_contrast',
    REDUCE_MOTION: 'ecoradar_reduce_motion'
  };

  // Configurações padrão
  let currentSettings = {
    fontSize: localStorage.getItem(STORAGE_KEYS.FONT_SIZE) || 'md',
    highContrast: localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true',
    reduceMotion: localStorage.getItem(STORAGE_KEYS.REDUCE_MOTION) === 'true'
  };

  /*
    Aplica as configurações ativas ao DOM
  */
  function applyAccessibilitySettings() {
    const body = document.body;
    if (!body) return;

    // 1. Aplica tamanho da fonte
    body.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    body.classList.add(`font-${currentSettings.fontSize}`);

    // 2. Aplica alto contraste
    if (currentSettings.highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    // 3. Aplica redução de movimento
    if (currentSettings.reduceMotion) {
      body.classList.add('reduce-motion');
    } else {
      body.classList.remove('reduce-motion');
    }

    // Atualiza botões no painel se ele ja existir no DOM
    updatePanelUI();
  }

  /*
    Atualiza a interface visual dos botões no painel de acessibilidade
  */
  function updatePanelUI() {
    // Atualiza botões de fonte
    document.querySelectorAll('[data-font]').forEach(btn => {
      const font = btn.getAttribute('data-font');
      if (font === currentSettings.fontSize) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Atualiza botão de alto contraste
    const contrastBtn = document.getElementById('acc-contrast-toggle');
    if (contrastBtn) {
      if (currentSettings.highContrast) {
        contrastBtn.classList.add('active');
        contrastBtn.setAttribute('aria-pressed', 'true');
      } else {
        contrastBtn.classList.remove('active');
        contrastBtn.setAttribute('aria-pressed', 'false');
      }
    }

    // Atualiza botão de redução de movimento
    const motionBtn = document.getElementById('acc-motion-toggle');
    if (motionBtn) {
      if (currentSettings.reduceMotion) {
        motionBtn.classList.add('active');
        motionBtn.setAttribute('aria-pressed', 'true');
      } else {
        motionBtn.classList.remove('active');
        motionBtn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  /**
   * Altera o tamanho da fonte
   * @param {string} size - 'sm', 'md', 'lg', 'xl'
   */
  function setFontSize(size) {
    currentSettings.fontSize = size;
    localStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
    applyAccessibilitySettings();
  }

  /**
   * Alterna modo de alto contraste
   */
  function toggleHighContrast() {
    currentSettings.highContrast = !currentSettings.highContrast;
    localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, currentSettings.highContrast);
    applyAccessibilitySettings();
  }

  /**
   * Alterna redução de animações
   */
  function toggleReduceMotion() {
    currentSettings.reduceMotion = !currentSettings.reduceMotion;
    localStorage.setItem(STORAGE_KEYS.REDUCE_MOTION, currentSettings.reduceMotion);
    applyAccessibilitySettings();
  }

  /**
   * injeta o HTML do painel de acessibilidade no final da pagina se não estiver presente
   */
  function createAccessibilityModal() {
    if (document.getElementById('accessibility-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'accessibility-overlay';
    overlay.className = 'accessibility-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <div class="accessibility-panel" role="dialog" aria-labelledby="acc-panel-title" aria-modal="true">
        <div class="acc-header">
          <h2 id="acc-panel-title" class="acc-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="7.5" r="1.5" fill="currentColor"/>
              <path d="M7 11h10M12 11v8M9 19l3-4 3 4"/>
            </svg>
            Acessibilidade
          </h2>
          <button id="close-acc-modal" class="acc-close-btn" aria-label="Fechar painel de acessibilidade">&times;</button>
        </div>

        <div class="acc-section">
          <div class="acc-section-title">Tamanho do Texto</div>
          <div class="acc-btn-group" role="group" aria-label="Opções de tamanho do texto">
            <button class="acc-btn" data-font="sm" aria-label="Texto Pequeno">A-</button>
            <button class="acc-btn" data-font="md" aria-label="Texto Normal">A</button>
            <button class="acc-btn" data-font="lg" aria-label="Texto Grande">A+</button>
            <button class="acc-btn" data-font="xl" aria-label="Texto Muito Grande">A++</button>
          </div>
        </div>

        <div class="acc-section">
          <div class="acc-section-title">Visualização & Contraste</div>
          <div class="acc-toggle-item">
            <span class="acc-toggle-label">Alto Contraste</span>
            <button id="acc-contrast-toggle" class="acc-btn" style="flex: initial; padding: 0.5rem 1rem;">
              Ativar
            </button>
          </div>
        </div>

        <div class="acc-section">
          <div class="acc-section-title">Animações & Movimento</div>
          <div class="acc-toggle-item">
            <span class="acc-toggle-label">Reduzir Animações</span>
            <button id="acc-motion-toggle" class="acc-btn" style="flex: initial; padding: 0.5rem 1rem;">
              Ativar
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Eventos do painel
    document.getElementById('close-acc-modal').addEventListener('click', closeAccessibilityModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeAccessibilityModal();
    });

    // Eventos dos botões do painel
    overlay.querySelectorAll('[data-font]').forEach(btn => {
      btn.addEventListener('click', () => {
        setFontSize(btn.getAttribute('data-font'));
      });
    });

    document.getElementById('acc-contrast-toggle').addEventListener('click', toggleHighContrast);
    document.getElementById('acc-motion-toggle').addEventListener('click', toggleReduceMotion);
  }

  function openAccessibilityModal() {
    createAccessibilityModal();
    const overlay = document.getElementById('accessibility-overlay');
    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      updatePanelUI();
      // Foco no botão de fechar para usabilidade com teclado
      const closeBtn = document.getElementById('close-acc-modal');
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeAccessibilityModal() {
    const overlay = document.getElementById('accessibility-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  // Inicialização no DOM
  document.addEventListener('DOMContentLoaded', () => {
    applyAccessibilitySettings();

    // Event Listeners em botões de abertura de acessibilidade
    document.querySelectorAll('.btn-accessibility, [data-action="open-accessibility"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openAccessibilityModal();
      });
    });
  });

  // Expõe API para uso global
  window.EcoAccessibility = {
    setFontSize,
    toggleHighContrast,
    toggleReduceMotion,
    openModal: openAccessibilityModal,
    closeModal: closeAccessibilityModal
  };

})();
