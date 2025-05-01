// playwright.config.js
module.exports = {
    use: {
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
    timeout: 60000,
}
  