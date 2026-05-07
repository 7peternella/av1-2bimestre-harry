// Script para carregar e exibir jogadores do Barcelona FC
// Usando a API pública: https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739

// Variável global para armazenar os jogadores
let allPlayers = [];

// Função assíncrona para buscar os dados da API
async function fetchPlayers() {
    // Elementos do DOM para controle da interface
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const content = document.getElementById('content');

    // Mostra o loading e esconde erro e conteúdo
    loading.classList.remove('d-none');
    error.classList.add('d-none');
    content.classList.add('d-none');

    try {
        // Faz a requisição para a API do Barcelona
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739');

        // Verifica se a resposta foi ok
        if (!response.ok) {
            throw new Error('Falha na requisição para a API');
        }

        // Converte a resposta para JSON
        const data = await response.json();
        allPlayers = data.player || []; // Armazena os jogadores

        // Exibe os jogadores na página
        displayPlayers(allPlayers);

    } catch (err) {
        // Em caso de erro, loga no console e mostra mensagem
        console.error('Erro ao buscar jogadores:', err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
    }
}

// Função para renderizar os jogadores no DOM
function displayPlayers(players) {
    // Elementos para esconder loading e mostrar conteúdo
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.classList.add('d-none');
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
        // Cria o elemento do card
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6 mb-4';

        // Monta o HTML do card com os dados do jogador
        card.innerHTML = `
            <div class="card h-100 player-card" data-player-id="${player.idPlayer}" style="cursor: pointer;">
                <img src="${player.strThumb || 'https://via.placeholder.com/300x200?text=Foto+não+disponível'}" class="card-img-top" alt="${player.strPlayer}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text"><strong>Posição:</strong> ${player.strPosition || 'Não informado'}</p>
                    <p class="card-text"><strong>Nacionalidade:</strong> ${player.strNationality || 'Não informado'}</p>
                    <p class="card-text"><strong>Data de nascimento:</strong> ${player.dateBorn || 'Não informado'}</p>
                </div>
            </div>
        `;

        // Adiciona evento de clique para abrir modal
        card.querySelector('.player-card').addEventListener('click', () => showPlayerDetails(player));

        // Adiciona o card ao container
        content.appendChild(card);
    });
}

// Função para mostrar detalhes do jogador em um modal
function showPlayerDetails(player) {
    const modalBody = document.getElementById('playerModalBody');
    const modalLabel = document.getElementById('playerModalLabel');

    // Preenche o título do modal
    modalLabel.textContent = `Detalhes de ${player.strPlayer}`;

    // Preenche o corpo do modal com mais informações
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="${player.strThumb || 'https://via.placeholder.com/300x200?text=Foto+não+disponível'}" class="img-fluid rounded" alt="${player.strPlayer}">
            </div>
            <div class="col-md-8">
                <h4>${player.strPlayer}</h4>
                <p><strong>Posição:</strong> ${player.strPosition || 'Não informado'}</p>
                <p><strong>Nacionalidade:</strong> ${player.strNationality || 'Não informado'}</p>
                <p><strong>Data de nascimento:</strong> ${player.dateBorn || 'Não informado'}</p>
                <p><strong>Altura:</strong> ${player.strHeight || 'Não informado'}</p>
                <p><strong>Peso:</strong> ${player.strWeight || 'Não informado'}</p>
                <p><strong>Time:</strong> ${player.strTeam || 'Barcelona FC'}</p>
                <p><strong>Descrição:</strong> ${player.strDescriptionEN || 'Sem descrição disponível.'}</p>
            </div>
        </div>
    `;

    // Mostra o modal
    const modal = new bootstrap.Modal(document.getElementById('playerModal'));
    modal.show();
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

// Quando a página carrega, inicia a busca dos jogadores
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, iniciando busca de jogadores do Barça...');
    fetchPlayers();

    // Adiciona event listeners para busca e ordenação
    document.getElementById('searchInput').addEventListener('input', filterPlayers);
    document.getElementById('sortSelect').addEventListener('change', sortPlayers);
});