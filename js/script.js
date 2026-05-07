// Script para carregar e exibir jogadores do Barcelona FC
// Elenco atual aproximado de 2024/25 (simulado para 2026)

// Dados dos jogadores (simulando API com elenco atual)
const allPlayers = [
    { idPlayer: 1, strPlayer: "Marc-André ter Stegen", strPosition: "Goleiro", strNationality: "Alemanha", dateBorn: "1992-04-30", strHeight: "187 cm", strWeight: "85 kg", strTeam: "Barcelona FC", strDescriptionEN: "Goleiro alemão, capitão do time, conhecido por suas defesas incríveis.", strThumb: "https://example.com/terstegen.jpg" },
    { idPlayer: 2, strPlayer: "Jules Koundé", strPosition: "Zagueiro", strNationality: "França", dateBorn: "1998-11-12", strHeight: "178 cm", strWeight: "70 kg", strTeam: "Barcelona FC", strDescriptionEN: "Zagueiro francês, rápido e técnico.", strThumb: "https://example.com/kounde.jpg" },
    { idPlayer: 3, strPlayer: "Ronald Araújo", strPosition: "Zagueiro", strNationality: "Uruguai", dateBorn: "1999-03-07", strHeight: "188 cm", strWeight: "79 kg", strTeam: "Barcelona FC", strDescriptionEN: "Zagueiro uruguaio, forte no jogo aéreo.", strThumb: "https://example.com/araujo.jpg" },
    { idPlayer: 4, strPlayer: "Andreas Christensen", strPosition: "Zagueiro", strNationality: "Dinamarca", dateBorn: "1996-04-10", strHeight: "188 cm", strWeight: "82 kg", strTeam: "Barcelona FC", strDescriptionEN: "Zagueiro dinamarquês, experiente.", strThumb: "https://example.com/christensen.jpg" },
    { idPlayer: 5, strPlayer: "Jordi Alba", strPosition: "Lateral", strNationality: "Espanha", dateBorn: "1989-03-21", strHeight: "170 cm", strWeight: "68 kg", strTeam: "Barcelona FC", strDescriptionEN: "Lateral espanhol, ídolo do clube.", strThumb: "https://example.com/alba.jpg" },
    { idPlayer: 6, strPlayer: "Alejandro Balde", strPosition: "Lateral", strNationality: "Espanha", dateBorn: "2003-10-18", strHeight: "175 cm", strWeight: "69 kg", strTeam: "Barcelona FC", strDescriptionEN: "Jovem lateral espanhol, promessa.", strThumb: "https://example.com/balde.jpg" },
    { idPlayer: 7, strPlayer: "Pedri", strPosition: "Meio-campo", strNationality: "Espanha", dateBorn: "2002-11-25", strHeight: "174 cm", strWeight: "60 kg", strTeam: "Barcelona FC", strDescriptionEN: "Meio-campista espanhol, craque jovem.", strThumb: "https://example.com/pedri.jpg" },
    { idPlayer: 8, strPlayer: "Frenkie de Jong", strPosition: "Meio-campo", strNationality: "Holanda", dateBorn: "1997-05-12", strHeight: "180 cm", strWeight: "74 kg", strTeam: "Barcelona FC", strDescriptionEN: "Meio-campista holandês, visão de jogo.", strThumb: "https://example.com/dejong.jpg" },
    { idPlayer: 9, strPlayer: "Gavi", strPosition: "Meio-campo", strNationality: "Espanha", dateBorn: "2004-08-05", strHeight: "173 cm", strWeight: "68 kg", strTeam: "Barcelona FC", strDescriptionEN: "Meio-campista espanhol, revelação.", strThumb: "https://example.com/gavi.jpg" },
    { idPlayer: 10, strPlayer: "Lamine Yamal", strPosition: "Atacante", strNationality: "Espanha", dateBorn: "2007-07-13", strHeight: "180 cm", strWeight: "70 kg", strTeam: "Barcelona FC", strDescriptionEN: "Jovem atacante espanhol, talento precoce.", strThumb: "https://example.com/yamal.jpg" },
    { idPlayer: 11, strPlayer: "Robert Lewandowski", strPosition: "Atacante", strNationality: "Polônia", dateBorn: "1988-08-21", strHeight: "185 cm", strWeight: "81 kg", strTeam: "Barcelona FC", strDescriptionEN: "Atacante polonês, artilheiro.", strThumb: "https://example.com/lewandowski.jpg" },
    { idPlayer: 12, strPlayer: "Raphinha", strPosition: "Atacante", strNationality: "Brasil", dateBorn: "1996-12-14", strHeight: "176 cm", strWeight: "68 kg", strTeam: "Barcelona FC", strDescriptionEN: "Atacante brasileiro, driblador.", strThumb: "https://example.com/raphinha.jpg" },
    { idPlayer: 13, strPlayer: "João Cancelo", strPosition: "Lateral", strNationality: "Portugal", dateBorn: "1994-05-27", strHeight: "182 cm", strWeight: "74 kg", strTeam: "Barcelona FC", strDescriptionEN: "Lateral português, versátil.", strThumb: "https://example.com/cancelo.jpg" },
    { idPlayer: 14, strPlayer: "Ilkay Gündoğan", strPosition: "Meio-campo", strNationality: "Alemanha", dateBorn: "1990-10-24", strHeight: "180 cm", strWeight: "80 kg", strTeam: "Barcelona FC", strDescriptionEN: "Meio-campista alemão, experiente.", strThumb: "https://example.com/gundogan.jpg" },
    { idPlayer: 15, strPlayer: "Ferran Torres", strPosition: "Atacante", strNationality: "Espanha", dateBorn: "2000-02-29", strHeight: "184 cm", strWeight: "77 kg", strTeam: "Barcelona FC", strDescriptionEN: "Atacante espanhol, rápido.", strThumb: "https://example.com/torres.jpg" }
];

// Função para simular carregamento (já que dados são locais)
function loadPlayers() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.classList.remove('d-none');
    content.classList.add('d-none');

    // Simula delay de carregamento
    setTimeout(() => {
        loading.classList.add('d-none');
        displayPlayers(allPlayers);
    }, 1000);
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

// Quando a página carrega, inicia o carregamento dos jogadores
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, carregando elenco do Barça...');
    loadPlayers();

    // Adiciona event listeners para busca e ordenação
    document.getElementById('searchInput').addEventListener('input', filterPlayers);
    document.getElementById('sortSelect').addEventListener('change', sortPlayers);
});