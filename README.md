# Bravi Web

Você pode testar esta aplicação [aqui](https://bravi-api.2b-soft.com)

Repositório projeto WEB: [bravi-web](https://github.com/BrenoBeierstedt/bravi-api-test)

## Comandos


##### `npm run dev`

##### `npm run build`

##### `npm run start`


> ## Princípios
* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)

> ## Design Patterns
* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection

> ## Metodologias e Designs
* TDD
* Clean Architecture
* DDD
* Modular Design
* Use Cases

> ## Bibliotecas e Ferramentas
* NPM
* Typescript
* Git
* Docker
* Jest
* Prisma
* Faker
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* ts-node-dev
* MockDate

> ## Features do Node
* API Rest com Express
* CORS
* Middlewares


> ## Features de Testes
* Testes Unitários
* Testes de Integração (API Rest)
* Mocks
* Stubs
* Spies
* Fakes

> ## Features de banco de dados
SQLite foi escolhido como o banco de dados relacional da aplicação, o mesmo se comunica em conjuto dos repositórios atráves do Prisma ORM.


## Documentação da API

#### Retorna todas as pessoas

```http
  GET /api/people
```

#### Retorna pessoa por id

```http
  GET /api/people/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |

#### Cadastra pessoa

```http
  POST /api/people
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |
| `firstName`      | `string` | **Obrigatório**. O nome da pessoa |
| `lastName`      | `string` | **Obrigatório**. O sobrenome da pessoa |


#### Altera pessoa

```http
  PUT /api/people/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |
| `firstName`      | `string` | **Obrigatório**. O nome da pessoa |
| `lastName`      | `string` | **Obrigatório**. O sobrenome da pessoa |

#### Deleta pessoa

```http
  DELETE /api/people/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |



#### Retorna todas os contatos

```http
  GET /api/contact
```

#### Retorna contato por id da pessoa

```http
  GET /api/contact/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |

#### Cadastra contato

```http
  POST /api/contact
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa |
| `type`      | `string` | **Obrigatório**. Tipo de contato |
| `info`      | `string` | **Obrigatório**. Informação do contato |


#### Altera contato

```http
  PUT /api/contact/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do contato |
| `type`      | `string` | **Obrigatório**. Tipo de contato |
| `info`      | `string` | **Obrigatório**. Informação do contato |


#### Deleta contato

```http
  DELETE /api/contact/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do contato |


