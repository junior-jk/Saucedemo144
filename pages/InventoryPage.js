const {expect} = require('playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('span.title');
        this.mochila = page.locator('#item_4_title_link');
    }
    async verificarInvetoryPage() {
        await expect(this.page).toHaveURL(/.*inventory/);
        await expect(this.tituloSecao).toHaveText('Products');
    }
    async clicarMochila() {
        await this.mochila.click();
    };
};

module.exports = {InventoryPage};