<h1 align="center">
    <a href="https://autocar-app.vercel.app/">🔗 AutoCar</a>
</h1>
<h3 align="center">
    <a href="https://localhost:8000/api-docs/">🔗 Documentação da Api</a>
</h3>
<p align="center">🚀 E-commerce de veículos, com login da página de administrador com autenticação através de token e que pode adicionar novos veículos, com upload de imagens na S3 da AWS.</p>

Usuário Adminstrador para teste: 
email: adminautocar@email.com
senha: 12345678 



### ✅ Features

- [x] Lista os veículos cadastrados no backend.
- [x] Página de login de administrador.
- [x] Dashboard de administrador com as opções de cadastrar, atualizar a foto e deletar o veículos.
- [x] Opção de alterar nome e senha do usuário.
- [x] Exibição da lista de usuários em uma tabela ao clicar no botão "Buscar Veículos"

### Observações: 
- [x] Os Paths: "/" e "/carros-usados" renderizam a lista de veículos. As outras opções do nav do header foi adicionado apenas para ficar próximo ao layout do site solicitado.
- [x] O banco utilizado foi o postgres, mas no .env tem um postgres criado no site <a href="https://www.elephantsql.com/" >ElephantSQL</a> que já tem alguns dados populados, mas caso queira rodar localmente, tem outra url configurada junto ao docker compose.

### ✅ Demonstração da aplicação

### 🎲 Rodando o Frontend(React.js)
<p align="center">Foi realizado o deploy na Vercel, mas com o endpoint voltado para "http://localhost:8000" pois é a porta que a Api tá configurada para rodar.</p>

```bash
# Clone este repositório
$ git clone <git@github.com:monafmenezes/treinadev-app.git>

# Acesse a pasta do projeto no terminal
$ cd treinadev-app

# Acesse a pasta client no terminal
$ cd client

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🎲 Rodando o Backend(Node.js)

```bash
# Clone este repositório

# Acesse a pasta do projeto no terminal
$ cd treinadev-app

# Acesse a pasta client no terminal
$ cd api

# Instale as dependências
$ yarn

# Crie a imagem do banco de dados do docker (postgres)
$ docker compose up

# Gere as migrações 
$ yarn typeorm migration:run -d src/data-source.ts

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>
```
### ✅ Autor
<img style="border-radius: 50%;" src="https://github.com/monafmenezes.png" width="100px;" alt=""/>

Feito por Monalisa Menezes, entre em contato!
<div>
<a href = "mailto:psimonafmenezes@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/monalisafmenezes" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
    <a href="https://twitter.com/monafmenezes" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a> 
 </div>
