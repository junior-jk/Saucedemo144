const { expect } = require('playwright/test')

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.tituloSecao = page.locator('span.title')
        // this.mochila = page.locator('#item_4_title_link')
    }

    async verificarInventoryPage() {
        await expect(this.page).toHaveURL(/.*inventory/)
        await expect(this.tituloSecao).toHaveText('Products')
    }

    async clicarProduto(sku) {
        // await this.mochila.click()
        this.page.locator(`#item_${sku}_title_link`).click()
    }
}

module.exports = { InventoryPage }