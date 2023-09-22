# Blog API - Documentação

Neste projeto, desenvolvi uma API e um banco de dados para a produção de conteúdo de um blog. Utilizei Node.js, Express.js, MySQL, autenticação JWT e Docker para facilitar o ambiente de desenvolvimento. 

## Funcionalidades

### Cadastro de Usuários
- Os usuários podem se cadastrar fornecendo informações como nome, email e senha.
- As senhas são criptografadas antes de serem armazenadas no banco de dados.

### Autenticação de Usuários
- Os usuários podem fazer login para acessar as funcionalidades protegidas da API.
- A autenticação é feita usando JWT (JSON Web Tokens).

### CRUD de Posts
- Os usuários autenticados podem criar, ler, atualizar e excluir posts.
- Cada post possui um título, conteúdo e categoria associada.
- Os posts estão relacionados aos usuários que os criaram.

### Categorias de Posts
- Os posts podem ser categorizados, permitindo uma organização mais eficaz.
- É possível criar, listar e atribuir categorias aos posts.

## Stacks Utilizadas

- Node.js: Plataforma de desenvolvimento backend.
- Express.js: Framework para construção de APIs web em Node.js.
- MySQL: Sistema de gerenciamento de banco de dados.
- JWT (JSON Web Tokens): Para autenticação de usuários.
- Docker: Utilizado para facilitar o ambiente de desenvolvimento.

## Como Rodar a Aplicação

### Com Docker

```sh
# Certifique-se de ter o Docker e o docker-compose instalados.
docker-compose up -d --build
```


# Acesse o container Node.js.
```sh
docker exec -it blogs_api bash
```



# Instale as dependências dentro do container.
```sh
npm install
```

# Execute os comandos do projeto dentro do container.
```sh
npm start
npm test
```
## Como Rodar a Aplicação

### Sem Docker
```sh
# Instale as dependências.
npm install
```
```sh
# Inicie a aplicação localmente.
env $(cat .env) npm run dev
```

