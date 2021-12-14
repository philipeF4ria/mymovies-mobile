<h1 align="center">
  <image src="src/assets/logo.png"/>
</h1>

<h2>
  Sumário
</h2>

<p>
  <a href="#about">Sobre o Projeto</a> •
  <a href="#layout">Layout</a> •
  <a href="#techs">Tecnologias</a> •
  <a href="#how-to-use">Como usar</a>
</p>

<h2 id="about">
  Sobre o Projeto
</h2>

<p>
  O MyMovies é um aplicativo mobile feito para ajudar o usuário a encontrar seus filmes favoritos, ver as informações e salvá-los em um catálogo pessoal. Também é útil para manter o usuário informado sobre os filmes que estão em cartaz.
  <h3>Features</h3>
  <ul>
    <li>Realização de cadastro com nome, e-mail e senha</li>
    <li>Autenticação com e-mail e senha</li>
    <li>Três listagens: dos filmes em cartaz, dos filmes populares e dos filmes bem avaliados</li>
    <li>Busca de filmes pelo seu título</li>
    <li>Ao clicar em um filme, suas informações são exibidas</li>
    <li>Possibilidade de salvar os filmes desejados em um catálogo pessoal</li>
    <li>Listagem dos filmes salvos no catálogo</li>
    <li>Possibilidade de remover um filme do catálogo</li>
  </ul>
</p>

<h2 id="layout">Funcionamento</h2>
<br />
<h4>Cadastro e Login</h4>
<img src="github/login.gif" />
<h4>Home</h4>
<img src="github/home.gif" />
<h4>Busca de Filmes</h4>
<img src="github/search.gif" />

<h2 id="techs">Tecnologias</h2>
<p>O MyMovies foi desenvolvido com as seguintes tecnologias:</p>
<ul>
<li>JavaScript</li>
<li>React Native</li>
<li>React Hooks</li>
<li>ContextAPI</li>
<li>Styled Components</li>
<li>Axios</li>
</ul>

<h2 id="how-to-use">Como utilizar</h2>
<h3>Pré-requisitos</h3>
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">GIT</a> e <a href="https://nodejs.org/en/">NodeJS</a>. Além do <a href="https://react-native.rocketseat.dev/">ambiente para desenvolvimento móvel</a></p>
<h3>Usando o aplicativo</h3>

```bash
  # Clonar este repositório
  $ git clone https://github.com/philipeF4ria/mymovies-mobile
  
  # Entrar no diretório do projeto
  $ cd mobile
  
  # Instalar as dependências
  $ yarn install
  
  # Certifique-se de ter o emulador aberto

  # Se você for emular com o Android, execute o comando
  $ yarn android

  # Se você for emular com ios, execute o comando
  $ yarn ios
  
```