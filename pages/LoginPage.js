const { expect } = require('playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('[name="password"]');
        this.loginButton = page.locator('input.submit-button.btn_action');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        // Valida que o login foi bem-sucedido
        await expect(this.page).toHaveURL(/inventory/);
    }

    async verificarMensagemErroLogin(mensagemEsperada) {
        await expect(this.errorMessage).toHaveText(mensagemEsperada);
    }
}

module.exports = { LoginPage };
