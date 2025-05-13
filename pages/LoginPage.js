const { expect } = require('playwright/test')
class LoginPage {
    constructor(page) {
        this.page = page // interno = externo
        this.username = page.locator('#user-name')
        this.password = page.locator('[name="password"]')
        this.loginButton = page.locator('input.submit-button.btn_action')
    }

    async goto(url) {
        await this.page.goto(url)
    }

    async login(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}

module.exports = { LoginPage }