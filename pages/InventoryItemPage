const { expect } = require('playwright/test')
class InventoryItemPage {
    constructor(page) {
        this.page = page
        this.backButton = page.locator('#back-to-products')
        this.tituloProduto = page.locator('div.inventory_details_name.large_size')
        this.precoProduto = page.locator('div.inventory_details_price')
    }

    async verificarInventoryItemPage() {
        await expect(this.page).toHaveURL(/.*inventory-item/)
        await expect(this.backButton).toHaveText('Back to products')
    }

    async verificarTituloPrecoDoProduto(tituloProduto, precoProduto) {
        await expect(this.tituloProduto).toHaveText(tituloProduto)
        await expect(this.precoProduto).toHaveText(precoProduto)
    }
}

module.exports = { InventoryItemPage }