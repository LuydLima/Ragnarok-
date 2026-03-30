// =========================================
// Apple TV+ Layout — app.js
// =========================================

// -------- DATA --------
const CONTENT = {
  severance: {
    title: "Severance",
    badge: "Apple Original",
    emoji: "🏢",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    year: "2022", rating: "★ 8.7", genre: "Thriller • Sci-Fi • Drama",
    duration: "1 Temporada",
    desc: "Funcionários da Lumon Industries passam por um procedimento cirúrgico radical: separação completa de memórias entre vida profissional e pessoal. O que parece uma solução perfeita logo revela segredos perturbadores.",
    cast: "Adam Scott, Zach Cherry, Britt Lower, Tramell Tillman",
    episodes: [
      { num: 1, name: "Bienvenidos a Helly!", time: "56min", desc: "Helly acorda sem memórias do passado e precisa descobrir quem realmente é dentro da Lumon." },
      { num: 2, name: "O Arquivo Morto", time: "44min", desc: "Mark investiga um misterioso colega que foi refinado recentemente." },
      { num: 3, name: "Em Algum Lugar Agradável", time: "48min", desc: "A equipe enfrenta um prazo impossível enquanto tensões aumentam." },
      { num: 4, name: "A Noite Festiva Anual", time: "52min", desc: "A tão esperada celebração da empresa revela mais do que todos esperavam." },
    ]
  },
  tedlasso: {
    title: "Ted Lasso",
    badge: "Apple Original",
    emoji: "⚽",
    bg: "linear-gradient(135deg, #2d5a27, #4a7c59, #7fb069)",
    year: "2020", rating: "★ 8.8", genre: "Comédia • Drama",
    duration: "3 Temporadas",
    desc: "Ted Lasso, um treinador de futebol americano sem experiência no esporte europeu, é contratado para treinar um time de futebol inglês de primeira divisão. Com seu otimismo inabalável, ele conquista corações.",
    cast: "Jason Sudeikis, Hannah Waddingham, Brett Goldstein, Juno Temple",
    episodes: [
      { num: 1, name: "Piloto", time: "38min", desc: "Ted Lasso chega à Inglaterra e conhece o AFC Richmond pela primeira vez." },
      { num: 2, name: "Diretor de Futebol", time: "30min", desc: "Ted tenta conquistar a confiança dos jogadores com sua filosofia única." },
      { num: 3, name: "Trent Crimm: The Independent", time: "32min", desc: "Um jornalista passa um dia inteiro com Ted para escrever um perfil." },
    ]
  },
  foundation: {
    title: "Foundation",
    badge: "Apple Original",
    emoji: "🌌",
    bg: "linear-gradient(135deg, #0d1b2a, #1b4332, #40916c)",
    year: "2021", rating: "★ 7.4", genre: "Sci-Fi • Drama",
    duration: "2 Temporadas",
    desc: "Baseado na série de livros de Isaac Asimov. Um matemático prevê a queda do Império Galáctico e trabalha para preservar o conhecimento da humanidade por meio da Fundação.",
    cast: "Jared Harris, Lee Pace, Lou Llobell, Leah Harvey",
    episodes: [
      { num: 1, name: "O Destino da Galáxia", time: "60min", desc: "Hari Seldon revela suas previsões sobre o colapso do Império." },
      { num: 2, name: "Chegando a Terminus", time: "55min", desc: "Os fundadores chegam ao planeta distante onde devem construir o futuro." },
    ]
  },
  morning: {
    title: "The Morning Show",
    badge: "Apple Original",
    emoji: "📺",
    bg: "linear-gradient(135deg, #f39c12, #e74c3c, #c0392b)",
    year: "2019", rating: "★ 8.3", genre: "Drama",
    duration: "3 Temporadas",
    desc: "Uma olhada nos bastidores de um programa matinal de TV ao vivo, explorando as vidas complexas das pessoas que trabalham para acordar a América todos os dias.",
    cast: "Jennifer Aniston, Reese Witherspoon, Steve Carell, Billy Crudup",
    episodes: [
      { num: 1, name: "Bonjour, America!", time: "56min", desc: "O escândalo que abala o programa mais assistido da manhã dos EUA." },
      { num: 2, name: "Haveria um Problema?", time: "48min", desc: "Alex tenta manter o controle enquanto tudo ao redor desmorona." },
    ]
  },
  slowhorses: {
    title: "Slow Horses",
    badge: "Apple Original",
    emoji: "🕵️",
    bg: "linear-gradient(135deg, #2c2c54, #474787, #aaa69d)",
    year: "2022", rating: "★ 8.1", genre: "Thriller • Espionagem",
    duration: "4 Temporadas",
    desc: "Agentes do MI5 inglês que cometeram erros ou fizeram algo para cair em desgraça são relegados ao Slough House, um escritório decadente chefiado pelo brilhante e horroroso Jackson Lamb.",
    cast: "Gary Oldman, Jack Lowden, Kristin Scott Thomas, Olivia Cooke",
    episodes: [
      { num: 1, name: "Erros dos Outros", time: "44min", desc: "Um agente é enviado para o Slough House após um grave erro operacional." },
      { num: 2, name: "A Arma de Slow Horse", time: "46min", desc: "Uma operação mal planejada coloca todos os agentes em perigo." },
    ]
  },
  pachinko: {
    title: "Pachinko",
    badge: "Apple Original",
    emoji: "🌸",
    bg: "linear-gradient(135deg, #b7410e, #e67e22, #f1c40f)",
    year: "2022", rating: "★ 8.4", genre: "Drama",
    duration: "2 Temporadas",
    desc: "Saga épica de uma família coreana que vive no Japão ao longo de várias gerações, enfrentando esperanças, amores e sacrifícios durante um dos períodos mais turbulentos da história asiática.",
    cast: "Youn Yuh-jung, Lee Min-ho, Kim Min-ha, Soji Arai",
    episodes: [
      { num: 1, name: "Uma Família, Uma Decisão", time: "58min", desc: "Sunja encontra o homem que mudará o destino de toda sua família." },
    ]
  },
  monarch: {
    title: "Monarch",
    badge: "Apple Original",
    emoji: "👑",
    bg: "linear-gradient(135deg, #3d0000, #7b1111, #c0392b)",
    year: "2022", rating: "★ 6.0", genre: "Drama",
    duration: "1 Temporada",
    desc: "A família Roman, a maior dinastia da música country da América, começa a desmoronar quando segredos sombrios sobre sua fundação vêm à tona.",
    cast: "Susan Sarandon, Trace Adkins, Anna Friel, Joshua Sasse",
    episodes: []
  },
  blackbird: {
    title: "Black Bird",
    badge: "Apple Original",
    emoji: "🐦",
    bg: "linear-gradient(135deg, #1a1a1a, #2d2d2d, #444)",
    year: "2022", rating: "★ 8.3", genre: "Crime • Thriller",
    duration: "Minissérie",
    desc: "Baseado em uma história real, um traficante é enviado para uma prisão de segurança máxima para obter uma confissão de um suposto serial killer em troca de uma pena reduzida.",
    cast: "Taron Egerton, Paul Walter Hauser, Ray Liotta, Sepideh Moafi",
    episodes: []
  },
  schmigadoon: {
    title: "Schmigadoon!",
    badge: "Apple Original",
    emoji: "🎭",
    bg: "linear-gradient(135deg, #6c3483, #a569bd, #f1948a)",
    year: "2021", rating: "★ 7.5", genre: "Comédia • Musical",
    duration: "2 Temporadas",
    desc: "Um casal perdido encontra uma cidade de livro de contos que é presa no tempo de musicais da Broadway dos anos 1940. Eles só podem partir quando encontrarem o amor verdadeiro.",
    cast: "Cecily Strong, Keegan-Michael Key, Kristen Chenoweth, Aaron Tveit",
    episodes: []
  },
  killers: {
    title: "Killers of the Flower Moon",
    badge: "Filme",
    emoji: "🔫",
    bg: "linear-gradient(135deg, #1c1c1c, #8B0000, #DC143C)",
    year: "2023", rating: "★ 7.6", genre: "Drama • Crime • Histórico",
    duration: "3h 26min",
    desc: "Nos anos 1920, membros da nação Osage, que ficaram ricos com o petróleo, foram assassinados sistematicamente. A investigação levou à criação do FBI moderno.",
    cast: "Leonardo DiCaprio, Lily Gladstone, Robert De Niro, Jesse Plemons",
    episodes: null
  },
  napoleon: {
    title: "Napoleon",
    badge: "Filme",
    emoji: "⚔️",
    bg: "linear-gradient(135deg, #2c3e50, #3498db, #ecf0f1)",
    year: "2023", rating: "★ 6.5", genre: "Histórico • Drama",
    duration: "2h 38min",
    desc: "Um olhar épico na ascensão explosiva de Napoleão Bonaparte e em sua posse implacável de poder através do prisma de seu relacionamento amoroso e volátil com Josefina.",
    cast: "Joaquin Phoenix, Vanessa Kirby, Tahar Rahim, Rupert Everett",
    episodes: null
  },
  coda: {
    title: "CODA",
    badge: "Filme • Oscar",
    emoji: "🎵",
    bg: "linear-gradient(135deg, #1a3a4a, #2980b9, #aed6f1)",
    year: "2021", rating: "★ 7.6", genre: "Drama • Música",
    duration: "1h 51min",
    desc: "Ruby é a única pessoa ouvinte de sua família de surdos. Dividida entre a obrigação à família e seu sonho de seguir carreira na música, ela se vê num impasse transformador.",
    cast: "Emilia Jones, Troy Kotsur, Marlee Matlin, Daniel Durant",
    episodes: null
  },
  tetris: {
    title: "Tetris",
    badge: "Filme",
    emoji: "🎮",
    bg: "linear-gradient(135deg, #1a0533, #6c3483, #e91e8c)",
    year: "2023", rating: "★ 7.1", genre: "Drama • Thriller",
    duration: "1h 58min",
    desc: "A história surpreendentemente emocionante de como Henk Rogers descobriu o Tetris e arriscou tudo para trazer o famoso jogo para o mundo, em plena Guerra Fria.",
    cast: "Taron Egerton, Nikita Efremov, Sofya Lebedeva, Anthony Boyle",
    episodes: null
  },
  ghosted: {
    title: "Ghosted",
    badge: "Filme",
    emoji: "💨",
    bg: "linear-gradient(135deg, #0d4c73, #1e8bc3, #5dade2)",
    year: "2023", rating: "★ 5.7", genre: "Ação • Comédia • Romance",
    duration: "1h 56min",
    desc: "Cole, um simples agricultor, se apaixona por Sadie, que logo descobre ser uma agente secreta. Ele acaba no meio de uma conspiração internacional enquanto tenta reconquistá-la.",
    cast: "Chris Evans, Ana de Armas, Adrien Brody, Amy Sedaris",
    episodes: null
  },
  raymond: {
    title: "Raymond & Ray",
    badge: "Filme",
    emoji: "🌿",
    bg: "linear-gradient(135deg, #2e4a1e, #5d8a3c, #a8c97f)",
    year: "2022", rating: "★ 6.7", genre: "Drama • Comédia",
    duration: "1h 48min",
    desc: "Dois meio-irmãos, Raymond e Ray, se reúnem no funeral de seu pai abusivo para finalmente enterrar o passado de ambos.",
    cast: "Ewan McGregor, Ethan Hawke, Sophie Okonedo, Maribel Verdú",
    episodes: null
  },
  finch: {
    title: "Finch",
    badge: "Filme",
    emoji: "🤖",
    bg: "linear-gradient(135deg, #1a2a4a, #2c4a8a, #4a7bc0)",
    year: "2021", rating: "★ 7.3", genre: "Sci-Fi • Drama",
    duration: "1h 55min",
    desc: "Em um mundo pós-apocalíptico, um engenheiro cria um robô para cuidar de seu cão fiel, depois que ele se for. Os três partem em uma jornada que transforma o robô em algo muito mais.",
    cast: "Tom Hanks, Caleb Landry Jones",
    episodes: null
  },
  palmer: {
    title: "Palmer",
    badge: "Filme",
    emoji: "🏈",
    bg: "linear-gradient(135deg, #2d2d2d, #4a4a4a, #8a6a3c)",
    year: "2021", rating: "★ 7.4", genre: "Drama",
    duration: "1h 51min",
    desc: "Um ex-jogador de futebol americano recém-saído da prisão se torna guardião de uma criança rejeitada, descobrindo uma nova razão para viver.",
    cast: "Justin Timberlake, Juno Temple, Ryder Allen, June Squibb",
    episodes: null
  },
  hero: {
    title: "Severance",
    badge: "Apple Original",
    emoji: "🏢",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    year: "2022", rating: "★ 8.7", genre: "Thriller • Sci-Fi",
    duration: "1 Temporada",
    desc: "Funcionários da Lumon Industries passam por um procedimento cirúrgico que separa suas memórias entre vida profissional e pessoal. O que parece perfeito logo revela segredos perturbadores.",
    cast: "Adam Scott, Zach Cherry, Britt Lower, Tramell Tillman",
    episodes: null
  }
};

const HEROES = [
  {
    title: "Severance",
    desc: "Funcionários de uma corporação misteriosa passam por um procedimento cirúrgico que divide sua memória entre vida profissional e pessoal.",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    meta: ["18+", "2022", "Sci-Fi • Drama", "★ 8.7"]
  },
  {
    title: "Ted Lasso",
    desc: "Um treinador de futebol americano otimista chega à Inglaterra para treinar um time sem qualquer experiência no futebol europeu — e conquista muito mais do que esperava.",
    bg: "linear-gradient(135deg, #1a2f1a 0%, #2d5a27 50%, #3d7a37 100%)",
    meta: ["Livre", "2020", "Comédia • Drama", "★ 8.8"]
  },
  {
    title: "Foundation",
    desc: "Em uma galáxia de um trilhão de almas, um matemático prevê o colapso da civilização. A missão: preservar o conhecimento humano a qualquer custo.",
    bg: "linear-gradient(135deg, #050a14 0%, #0d1b2a 50%, #1a3040 100%)",
    meta: ["14+", "2021", "Sci-Fi • Épico", "★ 7.4"]
  },
  {
    title: "Killers of the Flower Moon",
    desc: "Nos anos 1920, a nação Osage foi sistematicamente assassinada por sua riqueza em petróleo. Uma história real de ganância, poder e justiça.",
    bg: "linear-gradient(135deg, #0a0000 0%, #3a0a00 50%, #6b1a00 100%)",
    meta: ["18+", "2023", "Crime • Histórico", "★ 7.6"]
  }
];

// -------- STATE --------
let currentHero = 0;
let heroTimer;
let playerPlaying = false;
let playerProgress = 0;
let playerInterval;
let wishlist = [];

// -------- NAVIGATION --------
function showSection(name, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  if (el) el.classList.add('active');
  document.querySelector('.main-content').scrollTop = 0;
}

// -------- HERO SLIDER --------
function changeHero(index) {
  currentHero = index;
  const h = HEROES[index];
  document.getElementById('heroBg').style.background = h.bg;
  document.getElementById('heroTitle').textContent = h.title;
  document.getElementById('heroDesc').textContent = h.desc;

  const meta = document.getElementById('heroMeta');
  meta.innerHTML = h.meta.map((m, i) =>
    i === 0 ? `<span class="badge">${m}</span>` : `<span>${m}</span>`
  ).join('');

  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    currentHero = (currentHero + 1) % HEROES.length;
    changeHero(currentHero);
  }, 5000);
}
startHeroTimer();

// -------- MODAL --------
function openModal(id) {
  const content = CONTENT[id];
  if (!content) return;

  document.getElementById('modalBg').style.background = content.bg;
  document.getElementById('modalEmoji').textContent = content.emoji;
  document.getElementById('modalBadge').textContent = content.badge;
  document.getElementById('modalTitle').textContent = content.title;
  document.getElementById('modalDesc').textContent = content.desc;
  document.getElementById('modalCast').innerHTML = `<strong>Elenco:</strong> ${content.cast}`;

  const meta = document.getElementById('modalMeta');
  meta.innerHTML = [content.year, content.rating, content.genre, content.duration]
    .map(m => `<span>${m}</span>`).join('');

  // Wishlist btn
  const wBtn = document.getElementById('wishlistBtn');
  if (wishlist.includes(id)) {
    wBtn.classList.add('added');
    wBtn.querySelector('svg').style.fill = '#ff453a';
  } else {
    wBtn.classList.remove('added');
    wBtn.querySelector('svg').style.fill = '';
  }
  wBtn.dataset.contentId = id;

  // Episodes
  const episodesContainer = document.getElementById('modalEpisodes');
  if (content.episodes && content.episodes.length > 0) {
    episodesContainer.innerHTML = `
      <h3 class="episodes-title">Episódios</h3>
      <div class="episode-list">
        ${content.episodes.map(ep => `
          <div class="episode-item" onclick="startPlay()">
            <span class="episode-num">${ep.num}</span>
            <div class="episode-info">
              <div class="episode-name">${ep.name}</div>
              <div class="episode-desc">${ep.desc}</div>
            </div>
            <span class="episode-time">${ep.time}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    episodesContainer.innerHTML = '';
  }

  // Store current for player title
  document.getElementById('playerTitle').textContent = `Reproduzindo: ${content.title}`;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  overlay.style.display = 'flex';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  overlay.style.display = 'none';
}

function toggleWishlist() {
  const id = document.getElementById('wishlistBtn').dataset.contentId;
  const wBtn = document.getElementById('wishlistBtn');
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    wBtn.classList.remove('added');
    wBtn.querySelector('svg').style.fill = '';
    showToast('Removido da lista');
  } else {
    wishlist.push(id);
    wBtn.classList.add('added');
    wBtn.querySelector('svg').style.fill = '#ff453a';
    showToast('Adicionado à sua lista ❤️');
  }
}

// -------- PLAYER --------
function startPlay() {
  closeModal();
  document.getElementById('playerOverlay').style.display = 'flex';
  document.getElementById('playerOverlay').classList.add('open');
  playerPlaying = true;
  playerProgress = 0;
  document.getElementById('playerFill').style.width = '0%';
  document.getElementById('playerCurrent').textContent = '0:00';
  document.getElementById('playerTotal').textContent = '1:45:30';
  document.getElementById('playPauseBtn').textContent = '⏸';
  startPlayerProgress();
}

function closePlayer() {
  document.getElementById('playerOverlay').style.display = 'none';
  document.getElementById('playerOverlay').classList.remove('open');
  playerPlaying = false;
  clearInterval(playerInterval);
}

function startPlayerProgress() {
  clearInterval(playerInterval);
  const totalSecs = 6330; // 1h 45m 30s
  let elapsed = 0;
  playerInterval = setInterval(() => {
    if (!playerPlaying) return;
    elapsed += 1;
    const pct = (elapsed / totalSecs) * 100;
    document.getElementById('playerFill').style.width = pct + '%';
    document.getElementById('playerCurrent').textContent = formatTime(elapsed);
    if (elapsed >= totalSecs) {
      clearInterval(playerInterval);
      document.getElementById('playPauseBtn').textContent = '▶';
    }
  }, 1000);
}

function playerAction(action) {
  if (action === 'play') {
    playerPlaying = !playerPlaying;
    document.getElementById('playPauseBtn').textContent = playerPlaying ? '⏸' : '▶';
    if (playerPlaying) startPlayerProgress();
  } else if (action === 'back') {
    showToast('10 segundos para trás');
  } else if (action === 'forward') {
    showToast('10 segundos para frente');
  } else if (action === 'volume') {
    showToast('Volume ajustado');
  } else if (action === 'sub') {
    showToast('Legendas: Português (Brasil)');
  } else if (action === 'full') {
    showToast('Modo tela cheia');
  }
}

function formatTime(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

// -------- SEARCH --------
function handleSearch(query) {
  const resultsContainer = document.getElementById('searchResults');
  const grid = document.getElementById('searchGrid');

  if (!query.trim()) {
    resultsContainer.style.display = 'none';
    return;
  }

  const q = query.toLowerCase();
  const results = Object.entries(CONTENT).filter(([id, c]) =>
    c.title.toLowerCase().includes(q) ||
    c.genre.toLowerCase().includes(q) ||
    (c.cast && c.cast.toLowerCase().includes(q))
  );

  if (results.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color: var(--text-secondary); padding: 40px;">Nenhum resultado para "${query}"</div>`;
  } else {
    grid.innerHTML = results.map(([id, c]) => `
      <div class="grid-card" onclick="openModal('${id}')">
        <div class="grid-thumb" style="background: ${c.bg}">
          <span>${c.emoji}</span>
        </div>
        <div class="grid-label">${c.title}</div>
        <div class="grid-meta">${c.year} • ${c.genre.split(' • ')[0]}</div>
      </div>
    `).join('');
  }

  resultsContainer.style.display = 'block';
}

function filterByCategory(category) {
  const input = document.getElementById('searchInput');
  input.value = category;
  handleSearch(category);
}

// -------- FILTER TABS --------
function filterContent(el) {
  el.closest('.filter-tabs').querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  showToast(`Filtrando: ${el.textContent}`);
}

// -------- TOAST --------
let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// -------- KEYBOARD SHORTCUTS --------
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closePlayer();
  }
  if (e.key === ' ' && document.getElementById('playerOverlay').classList.contains('open')) {
    e.preventDefault();
    playerAction('play');
  }
});

// -------- INIT --------
document.addEventListener('DOMContentLoaded', () => {
  showToast('Bem-vindo ao Apple TV+ 🍿');
  
  // Carregar perfil ativo do localStorage
  loadActiveProfile();
});

// -------- ACTIVE PROFILE --------
function loadActiveProfile() {
  const activeProfile = localStorage.getItem('activeProfile');
  if (activeProfile) {
    try {
      const profile = JSON.parse(activeProfile);
      const profileSection = document.getElementById('activeProfileSection');
      const profileImage = document.getElementById('activeProfileImage');
      const profileName = document.getElementById('activeProfileName');
      
      if (profile.name && profile.image) {
        profileImage.src = '../' + profile.image;
        profileName.textContent = profile.name;
        profileSection.style.display = 'flex';
      }
    } catch (e) {
      console.error('Erro ao carregar perfil:', e);
    }
  }
}
