/**
 * ==========================================================================
 * ECORADAR - SPEECH.JS
 * Módulo de Síntese de Voz (Leitura Assistida) e Reconhecimento de Voz
 * ==========================================================================
 */

(function () {
  'use strict';

  // State da Síntese de Voz
  let synth = window.speechSynthesis;
  let currentUtterance = null;
  let isSpeaking = false;
  let isPaused = false;
  let currentRate = 1.0;

  /**
   * Obtem o texto a ser lido com base na pagina atual e no modo selecionado (Simples/Avançado)
   * @returns {string}
   */
  function getActiveTextToRead() {
    // se estiver em noticia.html com container de conteudo
    const articleTitle = document.getElementById('article-title');
    const simpleContainer = document.getElementById('content-simple-view');
    const advancedContainer = document.getElementById('content-advanced-view');
    const activeMode = localStorage.getItem('ecoradar_mode') || 'simple';

    let titleText = articleTitle ? articleTitle.innerText : '';
    let bodyText = '';

    if (activeMode === 'simple' && simpleContainer && simpleContainer.style.display !== 'none') {
      bodyText = simpleContainer.innerText;
    } else if (activeMode === 'advanced' && advancedContainer && advancedContainer.style.display !== 'none') {
      bodyText = advancedContainer.innerText;
    } else {
      // Fallback para seleção de texto visivel na pagina
      const mainElement = document.querySelector('main');
      bodyText = mainElement ? mainElement.innerText : document.body.innerText;
    }

    return `${titleText}. ${bodyText}`.trim();
  }

  /*
    inicia a leitura do texto atual
  */
  function speakText(customText) {
    if (!synth) {
      alert('Seu navegador não suporta a API de Síntese de Voz (SpeechSynthesis).');
      return;
    }

    // cancela leituras anteriores
    stopSpeaking();

    const text = customText || getActiveTextToRead();
    if (!text) return;

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'pt-BR';
    currentUtterance.rate = currentRate;

    // seleciona uma voz em portugues se disponivel
    const voices = synth.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
    if (ptVoice) {
      currentUtterance.voice = ptVoice;
    }

    currentUtterance.onstart = () => {
      isSpeaking = true;
      isPaused = false;
      updateSpeechUI();
    };

    currentUtterance.onend = () => {
      isSpeaking = false;
      isPaused = false;
      updateSpeechUI();
    };

    currentUtterance.onerror = (e) => {
      console.error('Erro na síntese de voz:', e);
      isSpeaking = false;
      isPaused = false;
      updateSpeechUI();
    };

    synth.speak(currentUtterance);
  }

  /*
    Pausa a leitura
  */
  function pauseSpeaking() {
    if (synth && isSpeaking && !isPaused) {
      synth.pause();
      isPaused = true;
      updateSpeechUI();
    }
  }

  /*
    Continua a leitura pausada
  */
  function resumeSpeaking() {
    if (synth && isSpeaking && isPaused) {
      synth.resume();
      isPaused = false;
      updateSpeechUI();
    } else if (!isSpeaking) {
      speakText();
    }
  }

  /*
    Para a leitura completamente
  */
  function stopSpeaking() {
    if (synth) {
      synth.cancel();
      isSpeaking = false;
      isPaused = false;
      updateSpeechUI();
    }
  }

  /**
   * Altera a velocidade da leitura (0.8x a 2x)
   * @param {number} rate
   */
  function setSpeechRate(rate) {
    currentRate = parseFloat(rate);
    if (isSpeaking) {
      // reinicia com a nova velocidade
      speakText();
    }
  }

  /*
    Atualiza a interface visual dos controles de fala (botões)
  */
  function updateSpeechUI() {
    const playBtn = document.getElementById('btn-speech-play');
    const pauseBtn = document.getElementById('btn-speech-pause');
    const stopBtn = document.getElementById('btn-speech-stop');
    const statusIndicator = document.getElementById('speech-status-indicator');

    if (playBtn) {
      playBtn.style.display = isSpeaking && !isPaused ? 'none' : 'inline-flex';
    }

    if (pauseBtn) {
      pauseBtn.style.display = isSpeaking && !isPaused ? 'inline-flex' : 'none';
    }

    if (stopBtn) {
      stopBtn.disabled = !isSpeaking && !isPaused;
    }

    if (statusIndicator) {
      if (isSpeaking && !isPaused) {
        statusIndicator.innerText = '🔊 Lendo em voz alta...';
        statusIndicator.classList.add('active');
      } else if (isPaused) {
        statusIndicator.innerText = '⏸️ Leitura pausada';
        statusIndicator.classList.remove('active');
      } else {
        statusIndicator.innerText = '';
        statusIndicator.classList.remove('active');
      }
    }
  }

  // ==========================================================================
  // RECONHECIMENTO DE VOZ (VOZ PARA TEXTO)
  // ==========================================================================

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let isListening = false;

  function initVoiceRecognition() {
    if (!SpeechRecognition) return null;

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'pt-BR';

    rec.onstart = () => {
      isListening = true;
      updateVoiceSearchUI(true);
    };

    rec.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const searchInput = document.getElementById('news-search-input');
      if (searchInput) {
        searchInput.value = transcript;
        // Dispara evento de busca
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    rec.onerror = (event) => {
      console.warn('Erro de reconhecimento de voz:', event.error);
      isListening = false;
      updateVoiceSearchUI(false);
    };

    rec.onend = () => {
      isListening = false;
      updateVoiceSearchUI(false);
    };

    return rec;
  }

  function startVoiceSearch() {
    if (!SpeechRecognition) {
      alert('Seu navegador não oferece suporte ao reconhecimento de voz.');
      return;
    }

    if (!recognition) {
      recognition = initVoiceRecognition();
    }

    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        console.error('Erro ao iniciar reconhecimento:', err);
      }
    }
  }

  function updateVoiceSearchUI(listening) {
    const voiceBtn = document.getElementById('btn-voice-search');
    if (voiceBtn) {
      if (listening) {
        voiceBtn.classList.add('listening');
        voiceBtn.innerHTML = '🔴 Ouvindo... (fale agora)';
      } else {
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '🎙️ Falar';
      }
    }
  }

  // Event listeners globais de fala
  document.addEventListener('DOMContentLoaded', () => {
    // Botões de Sintese
    const playBtn = document.getElementById('btn-speech-play');
    const pauseBtn = document.getElementById('btn-speech-pause');
    const stopBtn = document.getElementById('btn-speech-stop');
    const rateSelect = document.getElementById('speech-rate-select');

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (isPaused) resumeSpeaking();
        else speakText();
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', pauseSpeaking);
    }

    if (stopBtn) {
      stopBtn.addEventListener('click', stopSpeaking);
    }

    if (rateSelect) {
      rateSelect.addEventListener('change', (e) => {
        setSpeechRate(e.target.value);
      });
    }

    // Botão de Pesquisa por Voz
    const voiceBtn = document.getElementById('btn-voice-search');
    if (voiceBtn) {
      voiceBtn.addEventListener('click', startVoiceSearch);
    }

    // Garante o carregamento previo das vozes do navegador
    if (synth && synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = () => synth.getVoices();
    }
  });

  // Parar a voz se o usuario sair da pagina
  window.addEventListener('beforeunload', stopSpeaking);

  // Expõe API para uso global
  window.EcoSpeech = {
    speakText,
    pauseSpeaking,
    resumeSpeaking,
    stopSpeaking,
    setSpeechRate,
    startVoiceSearch
  };

})();
