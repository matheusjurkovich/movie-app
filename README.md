# Movie App

Este é um repositório que contém um aplicativo web para visualização e busca de informações sobre filmes.

## Funcionalidades

- Visualização de filmes em destaque.
- Pesquisa de filmes por título.
- Detalhes completos sobre cada filme, incluindo sinopse, classificação, elenco, entre outros. \ Em construção
- Avaliação e comentários dos filmes pelos usuários.\ Em construção

## Tecnologias e bibilhotecas

- ReactJs
- NextJs
- TailwindCss
- Axios
- Lucide React
- TheMovieDataBase API

## Pré-requisitos

Certifique-se de ter os seguintes requisitos antes de executar o aplicativo:

- Node.js (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node.js)
- Um navegador web moderno (Chrome, Firefox, Safari, etc.)

## Instalação

1. Clone o repositório em sua máquina local:

   ```bash
   git clone https://github.com/matheusjurkovich/movie-app.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd movie-app
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Configuração

Antes de executar o aplicativo, você precisa configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```
REACT_APP_API_KEY=<sua_chave_de_API>
REACT_APP_API_URL=https://api.themoviedb.org/3
```

Você pode obter uma chave de API gratuita em [https://www.themoviedb.org](https://www.themoviedb.org). Certifique-se de se inscrever e gerar uma chave válida.

## Execução

Após a instalação e configuração, você pode executar o aplicativo localmente. No diretório do projeto, execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e o aplicativo estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch para suas alterações:
   ```bash
   git checkout -b minha-branch
   ```
3. Faça as alterações desejadas e faça commit das mesmas:
   ```bash
   git commit -m "Minhas alterações"
   ```
4. Envie as alterações para o seu fork:
   ```bash
   git push origin minha-branch
   ```
5. Abra um pull request neste repositório.
