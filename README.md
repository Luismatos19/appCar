# APP Car
<h1 align="center">APP Car</h1>

## Descrição do Projeto
<p align="center"> Aplicação simples para listagem/cadastro de carros e simulação de financiamento</p>


<h4 align="center"> 
	A aplicaçãp pode ser acessada pelo site (https://main--appcarstwo.netlify.app/)
</h4>


### Features

- [x] Listagem de carros
- [x] Exclusão de carros cadastrados
- [x] Adição de carros
- [x] Simulação de financiamento 


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/luismatos19/imdb>

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará na porta:3000 - acesse <http://localhost:3000>

# Deve-se criar um arquivo .env e adicionr uma URL de conexão do  banco de dados na variavel DATABASE_URL
```


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Node.js]
- [Tailwind css]
- [NextJs]
- [Moongose]
- [MongoDB]


### Rotas backend

- /api/cars  (retorno/cadastro  os carros cadastrados)
- /api/cars/license?license=XXXXXXX retorno/exclusão carro pela placa cadastrada
  


