# EcoRadar — Checklist de Desenvolvimento e Backlog

##  Etapa Front-End (Concluída / Em Execução)

- [x] Definição e validação da arquitetura estrita de pastas (`frontend/`, `assets/`, `pages/`).
- [x] Identidade visual e variaveis CSS em `global.css` (Preto, Verde Musgo, Azul Oceano, Azul Claro, Poppins & Inter).
- [x] Criação do logo vetorial `logo.svg` e icone de acessibilidade `acessibilidade.svg`.
- [x] Estilização modular em CSS (`header.css`, `footer.css`, `content.css`, `news.css`, `responsive.css`, `accessibility.css`, `style.css`).
- [x] Lógica de Acessibilidade (`accessibility.js`): redimensionamento de fonte, alto contraste, redução de movimento e `localStorage`.
- [x] Lógica de Voz (`speech.js`): Síntese de voz com controles de leitura (Play/Pause/Resume/Stop/Velocidade) e Reconhecimento de Voz (`Web Speech API`).
- [x] Catálogo e Pesquisa (`catalog.js`): Mock dataset de notícias ambientais, busca dinâmica, filtros por categoria e alternância Simples/Avançado.
- [x] Navegação Global e Menu Mobile (`main.js`): Menu hambúrguer responsivo, indicação visual de rotas ativas e acessibilidade por teclado.
- [x] Desenvolvimento de Páginas HTML:
  - [x] `index.html` (Hero com composição planeta/dados/tecnologia e estatísticas ambientais).
  - [x] `catalog.html` (Catálogo com pesquisa por voz, filtros e cards).
  - [x] `explorar.html` (Hub interativo dos 7 eixos ambientais).
  - [x] `noticia.html` (Página de leitura com modo simples/avançado e reprodutor de áudio).
  - [x] `sobre.html` (Missão, propósito e compromisso com acessibilidade).

---

##  Backlog para Integração Futura (API / Backend)

- [ ] Criar API RESTful em Node.js / Express para servir notícias dinâmicas.
- [ ] Conectar banco de dados (PostgreSQL / MongoDB) para armazenamento de artigos ambientais.
- [ ] Criar sistema de envio de dados de sensores de qualidade do ar e índice UV em tempo real.
- [ ] Implementar cadastro e newsletter ambiental com envio periódico por e-mail.
