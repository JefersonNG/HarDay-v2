# HairDay v2

Aplicacao web para gerenciamento de agendamentos de barbearia, com foco em simplicidade, rapidez e experiencia visual moderna.

## Visao Geral

O HairDay v2 permite:

- criar agendamentos por data, horario e nome do cliente;
- visualizar os atendimentos do dia separados por periodos (manha, tarde e noite);
- remover agendamentos individualmente;
- persistir os dados no navegador usando localStorage.

## Stack Tecnica

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Hook Form
- ESLint 9

## Arquitetura do Projeto

```text
src/
  assets/            # icones e arquivos estaticos
  components/        # componentes de UI reutilizaveis
  core-components/   # blocos principais da regra de negocio (agenda e agendamento)
  pages/             # composicao de paginas
  types/             # tipos globais e contratos de dados
  utils/             # contexto, armazenamento e utilitarios
```

## Regras de Negocio Implementadas

- horarios fixos disponiveis para agendamento;
- bloqueio visual de horarios ja ocupados na data selecionada;
- filtragem dos agendamentos por data na visao da agenda;
- segmentacao da agenda em 3 periodos:
  - Manha: antes de 12:00
  - Tarde: de 12:00 ate 17:59
  - Noite: a partir de 18:00

## Como Executar o Projeto

### 1. Pre-requisitos

- Node.js 20+ (recomendado)
- npm 10+ (ou gerenciador compativel)

### 2. Instalacao

```bash
npm install
```

### 3. Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicacao sera iniciada em ambiente local via Vite.

### 4. Build de producao

```bash
npm run build
```

### 5. Preview da build

```bash
npm run preview
```

## Scripts Disponiveis

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: executa TypeScript build e gera bundle de producao
- `npm run preview`: sobe servidor local para validar a build
- `npm run lint`: executa verificacao de qualidade com ESLint

## Qualidade e Manutencao

- tipagem estatica com TypeScript;
- validacao e gerenciamento de formulario com React Hook Form;
- estado compartilhado via React Context;
- persistencia local desacoplada da camada de interface.

## Possiveis Evolucoes

- validacoes mais robustas de formulario (ex.: esquema com Zod);
- testes unitarios e de integracao;
- sincronizacao com API backend;
- autenticacao e multiusuario;
- internacionalizacao (i18n).

## Licenca

Este projeto esta sem licenca definida no repositorio. Caso necessario, adicione um arquivo LICENSE para formalizar o uso.
