# 🏋️ Sistema de Gerenciamento de Academia — Front-end

Este é o front-end de uma aplicação web desenvolvida com **Next.js** e **Tailwind CSS**, voltada para o gerenciamento de uma academia. A interface permite que **admins**, **personais** e **alunos** tenham acesso às funcionalidades de forma clara, responsiva e organizada.

## 🎯 Objetivo

Desenvolver uma interface moderna, funcional e responsiva que permita:

- A gestão de usuários (alunos e personais)
- O cadastro e controle de treinos e exercícios
- A visualização e interação dos alunos com seus treinos
- Uma boa experiência de navegação entre os diferentes perfis

## 💻 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) – Validação de formulários
- [Axios](https://axios-http.com/) – Comunicação com a API (back-end)

## 🔐 Funcionalidades Implementadas

### Personal Trainer

- Login
- Dashboard com visão geral
- CRUD de treinos e exercícios
- CRUD de alunos
- Atribuição de treinos aos alunos
- Adição de dicas personalizadas
- Visualização de treinos por aluno

### Aluno

- Login
- Visualização de seus treinos
- Marcar os dias em que realizou o treino (calendário)

### Admin

- Login
- Cadastro, edição e exclusão de **personais** e **alunos**

###Como rodar o Projeto

# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências
pnpm install

# Rode o servidor de desenvolvimento
pnpm dev

## 📁 Estrutura do Projeto

A estrutura do projeto foi organizada seguindo boas práticas de escalabilidade e separação por responsabilidade, com foco na clareza e manutenção do código.

