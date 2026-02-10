const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:8080'
  },
  webServer: {
    command: 'npm run start:test',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: true,
    timeout: 120000
  }
})
