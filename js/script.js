// Script para carregar e exibir jogadores do Barcelona FC
// Dados são carregados da API TheSportsDB em tempo real

// URL da API para os jogadores do Barcelona FC (ID: 133739)
const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739';

// Variável global para armazenar os jogadores
let allPlayers = [];

// Função para carregar jogadores da API
async function loadPlayers() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    const error = document.getElementById('error');

    loading.classList.remove('d-none');
    content.classList.add('d-none');
    error.classList.add('d-none');

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Verifica se a API retornou dados
        if (!data.results || data.results.length === 0) {
            throw new Error('Nenhum jogador encontrado na API');
        }

        allPlayers = data.results;

        loading.classList.add('d-none');
        displayPlayers(allPlayers);

    } catch (err) {
        console.error('Erro ao carregar jogadores:', err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
    }
}

// Função para renderizar os jogadores no DOM
function displayPlayers(players) {
    const content = document.getElementById('content');

    content.classList.remove('d-none');

    // Limpa o conteúdo anterior
    content.innerHTML = '';

    // Se não há jogadores, mostra mensagem
    if (players.length === 0) {
        content.innerHTML = '<p class="text-center">Nenhum jogador encontrado.</p>';
        return;
    }

    // Para cada jogador, cria um card
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6 mb-4';

        // Monta o HTML do card com os dados do jogador
        card.innerHTML = `
            <div class="card h-100 player-card" data-player-id="${player.idPlayer}" style="cursor: pointer;">
                <img src="${player.strThumb}" onerror="this.style.backgroundColor='#e0e0e0'; this.style.height='220px'" class="card-img-top" alt="${player.strPlayer}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text"><strong>Posição:</strong> ${player.strPosition || 'Não informado'}</p>
                    <p class="card-text"><strong>Nacionalidade:</strong> ${player.strNationality || 'Não informado'}</p>
                    <p class="card-text"><strong>Data de nascimento:</strong> ${player.dateBorn || 'Não informado'}</p>
                </div>
            </div>
        `;

        // Adiciona evento de clique para navegar para a página de detalhes
        card.querySelector('.player-card').addEventListener('click', () => {
            window.location.href = `detalhes.html?id=${player.idPlayer}`;
        });

        // Adiciona o card ao container
        content.appendChild(card);
    });
}

// Função para filtrar jogadores baseado na busca
function filterPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredPlayers = allPlayers.filter(player =>
        player.strPlayer.toLowerCase().includes(searchTerm)
    );
    displayPlayers(filteredPlayers);
}

// Função para ordenar jogadores
function sortPlayers() {
    const sortBy = document.getElementById('sortSelect').value;
    let sortedPlayers = [...allPlayers];

    if (sortBy === 'name') {
        sortedPlayers.sort((a, b) => a.strPlayer.localeCompare(b.strPlayer));
    } else if (sortBy === 'position') {
        sortedPlayers.sort((a, b) => (a.strPosition || '').localeCompare(b.strPosition || ''));
    } else if (sortBy === 'nationality') {
        sortedPlayers.sort((a, b) => (a.strNationality || '').localeCompare(b.strNationality || ''));
    }

    displayPlayers(sortedPlayers);
}

// Quando a página carrega, inicia o carregamento dos jogadores
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, carregando elenco do Barça...');
    loadPlayers();

    // Adiciona event listeners para busca e ordenação
    document.getElementById('searchInput').addEventListener('input', filterPlayers);
    document.getElementById('sortSelect').addEventListener('change', sortPlayers);
});