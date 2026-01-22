# Frontend Navega

Este é o frontend do projeto **Navega**, desenvolvido em Angular 16. Ele apresenta a interface de gerenciamento de contribuições, exibindo totais, gráficos de doughnut, contribuições mensais e voluntárias, e permite a inclusão e edição de contribuições via modal.

## Funcionalidades principais

- Visualização do total de contribuições.
- Gráfico de doughnut separando contribuições mensais e voluntárias.
- Listagem detalhada de cada contribuição.
- Inclusão e alteração de contribuições através de modais.
- Componentes reutilizáveis como botões e painéis expansíveis.
- Integração com Angular Material e ng2-charts para UI e gráficos.

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão 18 LTS ou compatível)
- npm (geralmente vem com Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPO>
cd frontend-navega

## Instalação de dependências

Para instalar todas as dependências do projeto, execute:

```

npm install

```

## Executando o projeto

Para rodar a aplicação em modo de desenvolvimento:

```

npm start

```

A aplicação estará disponível em http://localhost:4200/.
Qualquer alteração nos arquivos será recarregada automaticamente.

Para gerar uma versão de produção:

```

npm run build

```

Os arquivos compilados ficarão na pasta `dist/`.

## Testes

O projeto utiliza Jasmine e Karma para testes unitários.
Para rodar todos os testes:

```

npm test

```

## Estrutura de componentes

- **MonthlyContributionComponent**: exibe o total, o gráfico e as contribuições detalhadas.
- **ContributionModalComponent**: modal para adicionar ou alterar contribuições.
- **ButtonComponent** e **InputComponent**: componentes reutilizáveis para botões e inputs.
- **ExpansionPanelComponent**: painel expansível para cada contribuição.

## Observações

- A interface segue o protótipo fornecido, com cores diferenciando contribuições mensais (rosa) e voluntárias (roxo).
- Todos os cálculos de totais e valores são feitos automaticamente ao adicionar ou atualizar contribuições.

```
