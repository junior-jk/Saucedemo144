const { defineConfig } = require('playwright/test');

module.exports = defineConfig({
  use: {
    channel: 'chrome', // Usa o navegador Google Chrome estável
    headless: false,
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
  timeout: 60000,
});
