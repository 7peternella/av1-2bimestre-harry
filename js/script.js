async function fetchCharacters() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const content = document.getElementById('content');

    loading.classList.remove('d-none');
    error.classList.add('d-none');
    content.classList.add('d-none');

    try {
        const response = await fetch('https://hp-api.herokuapp.com/api/characters');
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const characters = await response.json();
        displayCharacters(characters);
    } catch (err) {
        console.error(err);
        loading.classList.add('d-none');
        error.classList.remove('d-none');
    }
}

function displayCharacters(characters) {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.classList.add('d-none');
    content.classList.remove('d-none');

    content.innerHTML = '';
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${character.image || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Casa: ${character.house || 'Desconhecida'}</p>
                    <p class="card-text">Ator: ${character.actor || 'Desconhecido'}</p>
                </div>
            </div>
        `;
        content.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchCharacters);