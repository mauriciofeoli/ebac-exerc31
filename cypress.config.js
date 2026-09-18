const { defineConfig } = require('cypress')
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin')

const reportPortalOptions = {
  apiKey: process.env.RP_API_KEY,
  endpoint: process.env.RP_ENDPOINT || 'https://demo.reportportal.io/api/v1',
  project: process.env.RP_PROJECT || 'mauriciofeoli_personal',
  launch: process.env.RP_LAUNCH || 'EBAC Cypress tests',
  description: 'Testes Ebac Cypress',
  attributes: [
    {
      key: 'attributeKey',
      value: 'attrbiuteValue',
    },
    {
      value: 'anotherAttrbiuteValue',
    },
  ],
  mode: 'DEFAULT',
  launchUuidPrint: true,
}

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: reportPortalOptions,
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      registerReportPortalPlugin(on, config)
      return config
    },
  },
})
