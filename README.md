# API de Gerenciamento de Despesas

API REST para gerenciamento de despesas pessoais, desenvolvida com NestJS, Prisma, PostgreSQL.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) 
- [Prisma](https://www.prisma.io/) 
- [PostgreSQL](https://www.postgresql.org/) 
- [Swagger](https://swagger.io/) 
- [Docker](https://www.docker.com/) 
- [Redis](https://redis.io/)
## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- PostgreSQL (se não usar Docker)
- Redis (se não usar Docker)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd mazzillio-api-despesas
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

4. (Opcional) Se estiver usando Docker, inicie o banco de dados:
```bash
docker-compose up -d
```

5. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

## 🚀 Executando o projeto

1. Para desenvolvimento:
```bash
npm run start:dev
```


A API estará disponível em `http://localhost:3000`

## 📚 Documentação da API

A documentação completa da API está disponível através do Swagger UI em:
```
http://localhost:3000/doc
```


## 📝 Notas

- Adicionei validação para não cadastrar uma despesa com mesmo título e data
- Estratégia de cache usada baseado na formação de Nestjs da alura

## Sugestão de Melhoria
- Adicionar uma estratégia de logger
