# AV1 - 2º Bimestre: Jogadores do Barcelona FC

Oi! Este é o meu projeto para a AV1 do 2º bimestre. Criei uma página web que lista os jogadores do Barcelona FC usando uma API pública de futebol.

## O que o projeto faz

- **Busca dados**: Pega informações dos jogadores direto da internet (API do TheSportsDB).
- **Mostra na tela**: Exibe tudo em cards bonitos, com foto, nome, posição, nacionalidade e mais detalhes.
- **Responsivo**: Funciona bem no celular e no computador, graças ao Bootstrap.
- **Carregamento**: Mostra um spinner enquanto carrega os dados.
- **Erros**: Se der algum problema, avisa o usuário de forma amigável.

## Tecnologias usadas

- HTML5 para a estrutura
- CSS3 com Bootstrap para o visual
- JavaScript com fetch e async/await para pegar os dados
- API: https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133739

## Como testar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Pronto! A página vai carregar os personagens automaticamente.

Se quiser rodar um servidor local (opcional):
- Use Python: `python -m http.server 8000`
- Ou qualquer servidor web simples.

## Estrutura dos arquivos

- `index.html`: A página principal
- `css/style.css`: Estilos personalizados (tema blaugrana!)
- `js/script.js`: Código JavaScript para tudo funcionar
- `README.md`: Este arquivo que você está lendo
