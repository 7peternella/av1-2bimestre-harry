# AV1 - 2º Bimestre: Aplicação Web - Jogadores do Barcelona FC

Aplicação web dinâmica desenvolvida em HTML5, CSS3 (Bootstrap) e JavaScript puro, consumindo dados de uma API pública de futebol (TheSportsDB).

## 🎯 Objetivo Geral

Desenvolver uma aplicação web que consume dados de uma API pública, exibindo-os de forma organizada e visual, com navegação entre listagem e detalhes dos jogadores.

## 📋 Funcionalidades

### Parte 1 - Página de Listagem ✅
- ✅ Consumo de dados via API TheSportsDB com fetch e async/await
- ✅ Manipulação de dados em formato JSON
- ✅ Exibição dinâmica de jogadores em cards responsivos
- ✅ Layout responsivo com Bootstrap
- ✅ Feedback de carregamento (spinner)
- ✅ Tratamento robusto de erros
- ✅ Campo de busca por nome do jogador
- ✅ Ordenação por: Nome, Posição e Nacionalidade
- ✅ Organização em arquivos separados (HTML, CSS, JS)

### Parte 2 - Navegação e Detalhes ✅
- ✅ Página de detalhes (`detalhes.html`) com informações completas
- ✅ Navegação via URLSearchParams (passagem de ID via URL)
- ✅ Nova requisição à API para buscar detalhes específicos
- ✅ Feedback de carregamento e tratamento de erros na página de detalhes
- ✅ Código organizado em módulos (detalhes.js separado)
- ✅ Botão de navegação entre páginas
- ✅ Documentação completa (este README)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos personalizados com tema Barcelona FC
- **Bootstrap 5**: Layout responsivo e componentes
- **JavaScript Puro**: Sem frameworks (React, Vue, Angular)
- **Fetch API**: Requisições assíncronas
- **Async/Await**: Programação assíncrona
- **JSON**: Manipulação de dados
- **URLSearchParams**: Passagem de parâmetros entre páginas
- **Git/GitHub**: Versionamento

## 📂 Estrutura do Projeto

```
av1-2bimestre-harry/
├── index.html              # Página inicial com listagem de jogadores
├── detalhes.html           # Página de detalhes de um jogador
├── css/
│   └── style.css           # Estilos personalizados
├── js/
│   ├── script.js           # Lógica da página de listagem
│   └── detalhes.js         # Lógica da página de detalhes
├── README.md               # Documentação do projeto
└── .git/                   # Repositório Git
```

## 🚀 Como Usar

### Requisitos
- Navegador moderno com suporte a ES6+
- Conexão com internet (para consumir a API)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/av1-2bimestre-harry.git
   cd av1-2bimestre-harry
   ```

2. **Abra a página no navegador**:
   - Abra `index.html` diretamente no navegador, ou
   - Use um servidor local (recomendado):
   
   **Com Python 3**:
   ```bash
   python -m http.server 8000
   ```
   Depois acesse: `http://localhost:8000`

   **Com Python 2**:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Com Node.js (http-server)**:
   ```bash
   npx http-server
   ```

3. **Explore a aplicação**:
   - A página carrega automaticamente a lista de jogadores do Barcelona FC
   - Use a barra de busca para filtrar por nome
   - Use o dropdown para ordenar por Nome, Posição ou Nacionalidade
   - Clique em qualquer jogador para ver seus detalhes completos

## 📡 API Utilizada

**TheSportsDB** - API pública gratuita de esportes

- **Endpoint de listagem**: `https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739`
- **Barcelona FC ID**: 133739
- **Documentação**: https://www.thesportsdb.com/

## 💡 Fluxo de Uso

1. **Usuário acessa index.html**
2. **Script carrega dados da API** com async/await
3. **Cards são renderizados dinamicamente** no DOM
4. **Usuário pode buscar e ordenar** a lista
5. **Ao clicar em um jogador**, é redirecionado para `detalhes.html?id=XXX`
6. **Página de detalhes carrega dados específicos** do jogador via URLSearchParams
7. **Botão "Voltar" retorna** à listagem

## 🔧 Detalhes Técnicos

### Função assíncrona de carregamento
```javascript
async function loadPlayers() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayPlayers(data.results);
    } catch (err) {
        // Tratamento de erro
    }
}
```

### Navegação com URLSearchParams
```javascript
// Em script.js - navega para detalhes
window.location.href = `detalhes.html?id=${player.idPlayer}`;

// Em detalhes.js - recupera o ID
const params = new URLSearchParams(window.location.search);
const playerId = params.get('id');
```

## 📊 Critérios de Avaliação

### Parte 1 (5,0 pontos)
- ✅ Lógica de Consumo (2,0 pts): API e promessas
- ✅ Setup de Ambiente (1,5 pts): Organização de arquivos
- ✅ Interface (1,0 pt): Bootstrap responsivo
- ✅ GitHub (0,5 pt): Repositório público

### Parte 2 (5,0 pontos)
- ✅ Viabilidade Técnica (2,0 pts): Página de detalhes funcional
- ✅ Organização/UX (2,0 pts): Navegação e feedback
- ✅ GitHub e Docs (1,0 pt): README completo

## ⚠️ Restrições Respeitadas

- ❌ Nenhum framework JS (React, Vue, Angular)
- ✅ JavaScript puro
- ✅ Consumo de API com Fetch
- ✅ Async/Await
- ✅ HTML5 + CSS3
- ✅ Bootstrap para layout

## 📝 Notas

- A API TheSportsDB pode ter variações nos dados disponíveis
- Imagens podem não carregar se o servidor estiver indisponível (há fallback)
- Sem dependências externas além do Bootstrap CDN
- Totalmente responsivo em dispositivos móveis

## 👤 Autor

Desenvolvido para a AV1 do 2º Bimestre - Disciplina de Desenvolvimento Web

## 📅 Data

Junho de 2026
