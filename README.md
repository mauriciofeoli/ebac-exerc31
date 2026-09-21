
## URL da Loja
[http://lojaebac.ebaconline.art.br/](http://lojaebac.ebaconline.art.br/)

### (Page Objects)
- Criar uma conta com email e senha válidos

### (AppActions)
- Adicionar produto ao carrinho e navegar para o checkout

## ReportPortal

O reporter do ReportPortal ja esta configurado no Cypress. Defina as variaveis
de ambiente antes de executar os testes:

```powershell
$env:RP_API_KEY = 'sua-api-key'
$env:RP_ENDPOINT = 'https://demo.reportportal.io/api/v1'
$env:RP_PROJECT = 'mauriciofeoli_personal'
$env:RP_LAUNCH = 'EBAC Cypress tests'
npm run cypress:run
```

Para executar somente com o relatorio JUnit local:

```powershell
npm run cypress:run:junit
```

A API key nao deve ser commitada no repositorio. Use a variavel de ambiente
`RP_API_KEY` para configurar a autenticacao com o ReportPortal.

## Resultado da execucao

A integracao com o ReportPortal foi configurada em `cypress.config.js` e os
testes foram executados com sucesso:

- 2 testes executados;
- 2 testes aprovados;
- 0 testes falhos;
- 2 screenshots gerados localmente.

## Evidencias

- [Evidencia do ReportPortal](https://demo.reportportal.io/ui/#mauriciofeoli_personal/launches/all)
- [Screenshot do cadastro aprovado](cypress/screenshots/account-registration.cy.js/cadastro-de-conta-aprovado.png)
- [Screenshot do checkout aprovado](cypress/screenshots/checkout.cy.js/checkout-aprovado.png)
- [Screenshot da tela do ReportPortal](cypress/screenshots/reportportal.png)

Os relatorios JUnit ficam em `cypress/reports/junit/`.

## Cypress Cloud

O Cypress Cloud pode ser usado como o relatorio principal da execucao. Ele
apresenta o resumo da run, testes aprovados e falhos, duracao, historico,
screenshots, videos e detalhes dos erros. O arquivo `cypress.config.js` ja
esta preparado para usar o `projectId` por variavel de ambiente.

No Cypress Cloud, crie ou selecione o projeto e copie o `Project ID` e a
`Record Key`. Depois, configure as variaveis no PowerShell:

```powershell
$env:CYPRESS_PROJECT_ID = 'seu-project-id'
$env:CYPRESS_RECORD_KEY = 'sua-record-key'
```

Para publicar uma execucao no Cypress Cloud:

```powershell
npm run cypress:cloud
```

O comando usa `--record` e envia os resultados para o projeto configurado.
Nao faca commit da `Record Key`; ela deve permanecer somente em variavel de
ambiente ou no segredo da pipeline CI.

### Contexto executivo

Ao apresentar o resultado para a lideranca, use o link da run no Cypress
Cloud e complemente com:

- objetivo e escopo dos testes;
- principais fluxos validados;
- causa e impacto de eventuais falhas;
- melhorias realizadas desde a ultima execucao;
- proximos passos e cenarios que ainda precisam de cobertura.
