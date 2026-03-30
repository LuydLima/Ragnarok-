# 🍎 Apple TV+ Layout Clone

Interface inspirada no Apple TV+, construída com HTML, CSS e JavaScript puro — sem dependências externas.

## 📁 Estrutura

```
appletv-layout/
├── index.html    # Estrutura HTML completa
├── style.css     # Estilos (dark theme, animações, responsividade)
├── app.js        # Lógica JavaScript e dados de conteúdo
└── README.md     # Este arquivo
```

## 🚀 Como usar

Basta abrir o arquivo `index.html` em qualquer navegador moderno — sem servidor, sem instalação!

```bash
# Mac / Linux
open index.html

# Windows
start index.html
```

## ✨ Funcionalidades

### Navegação
- **Sidebar** com 6 seções: Início, Filmes, Séries, Kids, Buscar e Configurações
- Menu responsivo: colapsa em ícones em telas menores

### Seção Início
- **Hero slider** com 4 destaques em rotação automática (5s)
- **Continuar Assistindo** com barra de progresso por item
- **Apple Originals** e **Filmes em Destaque** com scroll horizontal

### Filmes & Séries
- Grade responsiva com pôsteres
- Filtros por gênero (Ação, Drama, Comédia, Sci-Fi, Thriller)

### Busca
- Campo de busca com resultados em tempo real
- 8 categorias visuais com filtro rápido

### Configurações
- Perfil com plano da conta
- Controles de reprodução (qualidade, legendas, áudio, autoplay)
- Gerenciamento de conta e forma de pagamento
- Notificações individuais com toggles
- Privacidade e controle dos pais
- Seção "Sobre" com links úteis

### Modal de Conteúdo
- Informações detalhadas: sinopse, elenco, gênero, ano, avaliação
- Lista de episódios clicável (para séries)
- Botão "Minha Lista" com estado persistente na sessão
- Compartilhar com feedback via toast

### Player de Vídeo
- Tela cheia simulada
- Barra de progresso animada em tempo real
- Controles: play/pause, avançar, voltar, volume, legenda
- Atalho de teclado: `Space` = play/pause, `Esc` = fechar

## 🎨 Design

- **Tema**: Dark mode (inspirado no Apple TV+)
- **Paleta**: Preto profundo, cinzas escuros, branco como acento
- **Tipografia**: Inter / system-ui
- **Animações**: Transições suaves, hover states, fade-in nas seções

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Esc` | Fechar modal / player |
| `Space` | Play / Pause (no player) |

## 📱 Responsividade

- **Desktop**: Sidebar expandida com texto
- **Tablet / Mobile**: Sidebar colapsa para apenas ícones
