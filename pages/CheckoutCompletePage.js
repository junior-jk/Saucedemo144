const { expect } = require('playwright/test');

class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.confirmationMessage = page.locator('.complete-header');
    }

    async verificarConfirmacao() {
        await expect(this.page).toHaveURL(/.*checkout-complete/);
        await expect(this.confirmationMessage).toHaveText('Thank you for your order!');
    }
}

module.exports = { CheckoutCompletePage };
