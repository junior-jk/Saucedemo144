const { expect } = require('playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.titulo = page.locator('.title');
    }

    async verificarCarrinho() {
        await expect(this.page).toHaveURL(/.*cart/);
        await expect(this.titulo).toHaveText('Your Cart');
    }

    async clicarCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };
