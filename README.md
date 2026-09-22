
# Testes automatizados da loja EBAC

## Objetivo

Validar os principais fluxos da loja virtual com testes automatizados no
Cypress e registrar os resultados em uma ferramenta de relatório.

## Aplicação testada

[Loja EBAC](http://lojaebac.ebaconline.art.br/)

## Cenários cobertos

1. Criar uma conta com email e senha válidos usando Page Object.
2. Adicionar um produto ao carrinho e acessar o checkout usando AppAction.

## Execução e relatórios

### Execução local com JUnit

Gera os resultados em `cypress/reports/junit/`:

```powershell
npm run cypress:run:junit
```

### ReportPortal

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

### Cypress Dashboard

Para publicar a execucao no Cypress Dashboard, configure o projeto e a chave
de gravacao no PowerShell:

```powershell
$env:CYPRESS_PROJECT_ID = 'seu-project-id'
$env:CYPRESS_RECORD_KEY = 'sua-record-key'
npm run cypress:cloud
```

O Dashboard apresenta duracao, status dos testes, screenshots, videos e
detalhes de eventuais falhas. A `Record Key` nao deve ser commitada no
repositorio.

## Relatorio executivo

### Objetivo

Validar os principais fluxos da loja virtual com testes automatizados no
Cypress e registrar os resultados no ReportPortal.

### Escopo e cobertura

Foram cobertos 2 fluxos funcionais:

- cadastro de uma nova conta com email e senha validos;
- adicao de produto ao carrinho e acesso ao checkout.

### Resultado da execucao

| Metrica | Resultado |
| --- | ---: |
| Especificacoes executadas | 2 |
| Testes executados | 2 |
| Testes aprovados | 2 |
| Testes falhos | 0 |
| Testes pendentes ou ignorados | 0 |
| Taxa de aprovacao | 100% |
| Duracao total | Aproximadamente 16 segundos |
| Screenshots | 2 |
| Videos | 2 |
| Ambiente | Cypress 13.17.0 / Electron 118 |

### Interpretacao

**O que foi bem:** os dois cenarios terminaram com sucesso. O cadastro aceitou
email e senha validos, e o fluxo de compra adicionou o produto ao carrinho e
chegou ao checkout. A taxa de aprovacao foi de 100% nessa execucao.

**O que foi mal:** nenhum dos cenarios cobertos apresentou falha. A principal
limitacao e o tamanho da cobertura: foram avaliados somente 2 testes, portanto
nao e possivel concluir que toda a loja esteja funcionando corretamente.

**Por que nao houve falha:** os elementos e comportamentos esperados estavam
disponiveis durante a execucao, as validacoes de URL e de conteudo foram
atendidas e as evidencias foram geradas. Como nenhum teste falhou, nao ha
causa de erro para investigar nesta rodada.

**O que as metricas significam:** 2 de 2 testes aprovados mostram que os
fluxos selecionados estao funcionando no ambiente testado. Os 2 arquivos de
especificacao representam 100% da suite atual, mas nao 100% de cobertura do
produto.

### Evidencias

- [Evidencia do ReportPortal](https://demo.reportportal.io/ui/#mauriciofeoli_personal/launches/all)
- [Screenshot do cadastro aprovado](cypress/screenshots/account-registration.cy.js/cadastro-de-conta-aprovado.png)
- [Screenshot do checkout aprovado](cypress/screenshots/checkout.cy.js/checkout-aprovado.png)

Os relatorios JUnit ficam em `cypress/reports/junit/`.


