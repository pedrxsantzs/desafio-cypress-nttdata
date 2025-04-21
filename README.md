# Desafio Técnico - QA Automatizador com Cypress

Este repositório contém a solução para o desafio técnico proposto pela NTT Data, utilizando o framework Cypress para automação de testes E2E (frontend) e testes de API.

## ✅ Objetivo

Automatizar:
- 3 cenários de testes E2E do frontend da aplicação.
- 3 cenários de testes da API documentada.

---

## 🔗 Links do projeto

- **Frontend:** [https://front.serverest.dev/](https://front.serverest.dev/)
- **API (Swagger):** [https://serverest.dev/](https://serverest.dev/)

---

## 📁 Estrutura do Projeto

desafio-cypress-nttdata/
├── cypress/
│   ├── e2e/
│   │   ├── api/               # Testes de API (cadastro, login, produtos)
│   │   └── frontend/          # Testes E2E da interface web
│   ├── pages/                 # Page Objects para abstrair interações com a interface
│   ├── support/               # Helpers e comandos customizados para testes
│   └── utils/                 # Geração de dados dinâmicos com Faker
├── cypress.config.js          # Configuração principal do Cypress
├── package.json               # Dependências e scripts do projeto
├── README.md                  # Documentação do projeto
└── .gitignore                 # Arquivos e pastas ignorados pelo Git

---

## 🧪 Como rodar os testes
### ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [npm](https://www.npmjs.com/) (instalado junto com o Node)

### 🚀 Passo a passo para rodar o projeto

1. **Clone este repositório:**
```bash
git clone https://github.com/pedrxsantzs/desafio-cypress-nttdata
cd desafio-cypress-nttdata
```

2. **Instale as dependências:**
Este projeto utiliza o Cypress para automação e o Faker.js para gerar dados de teste dinâmicos.
```bash
npm install
```

3. **Execute os testes em modo interativo (com interface):**
```bash
npx cypress open
```

> Isso abrirá o Test Runner do Cypress, onde você pode escolher entre os testes de frontend ou API.

4. **Ou, execute os testes em modo headless (sem interface):**
```bash
npx cypress run
```

### 📦 Bibliotecas utilizadas

- **[Cypress](https://www.cypress.io/)** – Framework de testes E2E moderno e rápido.
- **[@faker-js/faker](https://github.com/faker-js/faker)** – Usado para gerar dados aleatórios como nomes, e-mails e senhas durante os testes.

---

## 📌 Cenários Automatizados

### Frontend
- Cadastro de novo usuário com sucesso
- Cadastro com campos obrigatórios ausentes (nome, email, senha)
- Cadastro com email inválido ou já existente

### API
- Cadastro de usuário com sucesso
- Validação de retorno da API após criação
- Verificação da presença do usuário criado via GET

---

## 🧠 Boas práticas aplicadas

- Page Object Model (POM)
- Código limpo e modularizado
- Reutilização de lógica e dados via helpers e utils
- Dados dinâmicos com Faker
- Assertivas claras e específicas

---

## 👨‍💻 Autor

Pedro Augusto dos Santos Batista

---

## 📬 Contato

Fique à vontade para entrar em contato por email ou LinkedIn!
-- profisional.pedroa@gmail.com
-- https://www.linkedin.com/in/pedro-augustodsb17/