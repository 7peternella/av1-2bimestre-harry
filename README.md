# AV1 - 2º Bimestre: Personagens de Harry Potter

Oi! Este é o meu projeto para a AV1 do 2º bimestre. Criei uma página web simples que lista os personagens do universo de Harry Potter usando uma API pública.

## O que o projeto faz

- **Busca dados**: Pega informações dos personagens direto da internet (API do Harry Potter).
- **Mostra na tela**: Exibe tudo bonitinho em cards, com foto, nome, casa, espécie e mais detalhes.
- **Responsivo**: Funciona bem no celular e no computador, graças ao Bootstrap.
- **Carregamento**: Mostra um spinner enquanto carrega os dados.
- **Erros**: Se der algum problema, avisa o usuário de forma amigável.

## Tecnologias usadas

- HTML5 para a estrutura
- CSS3 com Bootstrap para o visual
- JavaScript com fetch e async/await para pegar os dados
- API: https://hp-api.herokuapp.com/api/characters

## Como testar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Pronto! A página vai carregar os personagens automaticamente.

Se quiser rodar um servidor local (opcional):
- Use Python: `python -m http.server 8000`
- Ou qualquer servidor web simples.

## Estrutura dos arquivos

- `index.html`: A página principal
- `css/style.css`: Estilos personalizados (tema Harry Potter!)
- `js/script.js`: Código JavaScript para tudo funcionar
- `README.md`: Este arquivo que você está lendo

Foi divertido fazer isso, espero que goste! 🪄