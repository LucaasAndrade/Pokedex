# Pokedex Angular

Este é um projeto de uma Pokedex desenvolvido com Angular, que consome a [PokeAPI](https://pokeapi.co/) para exibir informações sobre Pokémon.

## Funcionalidades

- Listagem de Pokémon com paginação (20 por página).
- Busca de Pokémon por nome.
- Filtragem de Pokémon por tipo.
- Limpeza de filtros de busca e tipo.
- Visualização de detalhes de cada Pokémon.

## Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [PokeAPI](https://pokeapi.co/)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/app/components`: Contém os componentes reutilizáveis da aplicação, como o cabeçalho, a lista de Pokémon e a barra de busca.
- `src/app/pages`: Contém as páginas da aplicação, como a página inicial e a página de detalhes de um Pokémon.
- `src/app/services`: Contém os serviços responsáveis pela comunicação com a PokeAPI.
- `src/app/model`: Contém os modelos de dados da aplicação.

## Como Executar o Projeto

Para executar o projeto em sua máquina local, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/pokedex-angular.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e acesse `http://localhost:4200/`.

## Boas Práticas

O projeto segue as boas práticas de desenvolvimento com Angular, como a utilização de componentes, serviços e modelos, além de uma estrutura de pastas organizada e clara.