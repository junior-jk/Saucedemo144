const { expect } = require('playwright/test');

class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async finalizarCompra() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutStepTwoPage };
