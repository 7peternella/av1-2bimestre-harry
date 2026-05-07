// Script para carregar e exibir personagens de Harry Potter
// Usando a API pública: https://hp-api.herokuapp.com/api/characters

// Função assíncrona para buscar os dados da API
async function fetchCharacters() {
    // Elementos do DOM para controle da interface
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const content = document.getElementById('content');

    // Mostra o loading e esconde erro e conteúdo
    loading.classList.remove('d-none');
    error.classList.add('d-none');
    content.classList.add('d-none');

    try {
        // Faz a requisição para a API
        const response = await fetch('https://hp-api.herokuapp.com/api/characters');

        // Verifica se a resposta foi ok
        if (!response.ok) {
            throw new Error('Falha na requisição para a API');
        }

        // Converte a resposta para JSON
        const characters = await response.json();

        // Exibe os personagens na página
        displayCharacters(characters);

    } catch (err) {
        // Em caso de erro, loga no console e mostra mensagem
        console.error('Erro ao buscar personagens:', err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
    }
}

// Função para renderizar os personagens no DOM
function displayCharacters(characters) {
    // Elementos para esconder loading e mostrar conteúdo
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.classList.add('d-none');
    content.classList.remove('d-none');

    // Limpa o conteúdo anterior
    content.innerHTML = '';

    // Para cada personagem, cria um card
    characters.forEach(character => {
        // Cria o elemento do card
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6';

        // Monta o HTML do card com os dados do personagem
        card.innerHTML = `
            <div class="card h-100">
                <img src="${character.image || 'https://via.placeholder.com/300x200?text=Imagem+não+disponível'}" class="card-img-top" alt="${character.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text"><strong>Casa:</strong> ${character.house || 'Não informado'}</p>
                    <p class="card-text"><strong>Espécie:</strong> ${character.species || 'Não informado'}</p>
                    <p class="card-text"><strong>Gênero:</strong> ${character.gender || 'Não informado'}</p>
                    <p class="card-text"><strong>Ator/Atriz:</strong> ${character.actor || 'Não informado'}</p>
                    <p class="card-text"><strong>Data de nascimento:</strong> ${character.dateOfBirth || 'Não informado'}</p>
                </div>
            </div>
        `;

        // Adiciona o card ao container
        content.appendChild(card);
    });
}

// Quando a página carrega, inicia a busca dos personagens
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, iniciando busca de personagens...');
    fetchCharacters();
});