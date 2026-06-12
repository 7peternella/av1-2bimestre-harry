// Script para exibir detalhes de um jogador específico do Barcelona FC
// Usa URLSearchParams para obter o ID da URL

// URL da API para buscar um jogador específico
const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=';

// Função para obter o ID do jogador da URL
function getPlayerIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Função para carregar detalhes do jogador
async function loadPlayerDetails() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const playerDetails = document.getElementById('playerDetails');

    const playerId = getPlayerIdFromURL();

    // Valida se o ID foi fornecido
    if (!playerId) {
        loading.classList.add('d-none');
        error.classList.remove('d-none');
        error.textContent = 'Erro: ID do jogador não fornecido. Volte à listagem e tente novamente.';
        return;
    }

    loading.classList.remove('d-none');
    error.classList.add('d-none');
    playerDetails.classList.add('d-none');

    try {
        // Carrega todos os jogadores para encontrar o específico
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739');

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('Nenhum jogador encontrado');
        }

        // Busca o jogador com o ID fornecido
        const player = data.results.find(p => p.idPlayer == playerId);

        if (!player) {
            throw new Error('Jogador não encontrado');
        }

        // Exibe os detalhes do jogador
        displayPlayerDetails(player);

        loading.classList.add('d-none');
        playerDetails.classList.remove('d-none');

    } catch (err) {
        console.error('Erro ao carregar detalhes:', err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
        error.textContent = `Erro: ${err.message}. Tente novamente.`;
    }
}

// Função para exibir os dados do jogador no DOM
function displayPlayerDetails(player) {
    // Preenche os campos de texto
    document.getElementById('playerName').textContent = player.strPlayer || 'Nome não disponível';
    document.getElementById('playerPosition').textContent = player.strPosition || 'Não informado';
    document.getElementById('playerNationality').textContent = player.strNationality || 'Não informado';
    document.getElementById('playerDateBorn').textContent = formatDate(player.dateBorn) || 'Não informado';
    document.getElementById('playerHeight').textContent = player.strHeight || 'Não informado';
    document.getElementById('playerWeight').textContent = player.strWeight || 'Não informado';
    document.getElementById('playerTeam').textContent = player.strTeam || 'Barcelona FC';
    document.getElementById('playerDescription').textContent = player.strDescriptionEN || 'Sem descrição disponível.';

    // Informações adicionais (podem estar vazias na API)
    if (player.strSalary) {
        document.getElementById('playerSalary').textContent = player.strSalary;
    }
    if (player.strBirthLocation) {
        document.getElementById('playerBornLocation').textContent = player.strBirthLocation;
    }

    // Exibe a imagem
    const playerImage = document.getElementById('playerImage');
    if (player.strThumb) {
        playerImage.src = player.strThumb;
        playerImage.onerror = function() {
            this.style.backgroundColor = '#e0e0e0';
            this.style.height = '300px';
        };
    } else {
        playerImage.style.backgroundColor = '#e0e0e0';
        playerImage.style.height = '300px';
        playerImage.alt = 'Imagem não disponível';
    }
}

// Função auxiliar para formatar data
function formatDate(dateString) {
    if (!dateString) return null;
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}

// Quando a página carrega, inicia o carregamento dos detalhes
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de detalhes carregada...');
    loadPlayerDetails();
});
