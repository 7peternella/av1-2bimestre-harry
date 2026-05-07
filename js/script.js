// Script para carregar e exibir jogadores do Barcelona FC
// Usando a API pública: https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739

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
        const players = data.player;

        // Exibe os jogadores na página
        displayPlayers(players);

    } catch (err) {
        // Em caso de erro, loga no cojogadorestra mensagem
        console.error('Erro ao buscar personagens:', err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
    }
}
jogadores no DOM
function displayPlayers(playnagens no DOM
function displayCharacters(characters) {
    // Elementos para esconder loading e mostrar conteúdo
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.classList.add('d-none');
    content.classList.remove('d-none');

    // Limpa o conteúdo anterior
    content.innerHTML = '';
jogador, cria um card
    players.forEach(player => {
        // Cria o elemento do card
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6';

        // Monta o HTML do card com os dados do jogador
        card.innerHTML = `
            <div class="card h-100">
                <img src="${player.strThumb || 'https://via.placeholder.com/300x200?text=Foto+não+disponível'}" class="card-img-top" alt="${player.strPlayer}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text"><strong>Posição:</strong> ${player.strPosition || 'Não informado'}</p>
                    <p class="card-text"><strong>Nacionalidade:</strong> ${player.strNationality || 'Não informado'}</p>
                    <p class="card-text"><strong>Data de nascimento:</strong> ${player.dateBorn || 'Não informado'}</p>
                    <p class="card-text"><strong>Altura:</strong> ${player.strHeight || 'Não informado'}</p>
                    <p class="card-text"><strong>Peso:</strong> ${player.strWeightmado'}</p>
                    <p class="card-text"><strong>Data de nascimento:</strong> ${character.dateOfBirth || 'Não informado'}</p>
                </div>
            </div>
        `;

        // Adiciona o card ao container
        content.appendChild(card);
    });
}

// Quando a página carrega, inicia a busca dos personagens
document.addEventListener('DOMContentLoaded', () => {jogadores do Barça...');
    fetchPlay'Página carregada, iniciando busca de personagens...');
    fetchCharacters();
});