/*
  ==========================================================================
  ECORADAR - MAIN.JS
  Inicialização Geral, Menu Mobile, Navegação e Interações Globais
  ==========================================================================
*/

(function () {
  'use strict';

  /*
    Inicializa o menu hamburguer responsivo para telas mobile
  */
  function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('primary-nav-menu');

    if (!mobileBtn || !navMenu) return;

    mobileBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');

      if (isOpen) {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      } else {
        navMenu.classList.add('open');
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      }
    });

    // Fecha o menu ao clicar em qualquer link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /*
    Destaca o link de navegação ativo com base na URL atual
  */
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (
        (currentPath.endsWith('/') || currentPath.endsWith('index.html')) && href.includes('index.html') ||
        currentPath.includes('catalog.html') && href.includes('catalog.html') ||
        currentPath.includes('explorar.html') && href.includes('explorar.html') ||
        currentPath.includes('sobre.html') && href.includes('sobre.html') ||
        currentPath.includes('noticia.html') && href.includes('catalog.html')
      ) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /*
    Suporte a atalhos de teclado para acessibilidade (Ex: Alt + A abre acessibilidade)
  */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Alt + A abre o painel de acessibilidade
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (window.EcoAccessibility) {
          window.EcoAccessibility.openModal();
        }
      }
    });
  }

  // DOMReady Dispatcher
  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    highlightActiveNavLink();
    initKeyboardShortcuts();
  });

})();
