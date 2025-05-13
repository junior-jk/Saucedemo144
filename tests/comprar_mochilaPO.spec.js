const { test, expect } = require('playwright/test')
const { lerCsv } = require('../utils/lerCsv')
const { LoginPage } = require('../pages/LoginPage')
const { InventoryPage } = require('../pages/InventoryPage')
const { InventoryItemPage } = require('../pages/InventoryItemPage')

const registros = lerCsv('C:/Iterasys/Saucedemo144/fixtures/csv/massaProdutos.csv')
console.log(registros)


for (const { user, password, sku, titulo_produto, preco_produto } of registros) {
    test(`Fluxo de compra da ${titulo_produto} PO`, async ({ page }) => {
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)
        const inventoryItemPage = new InventoryItemPage(page)

        await loginPage.goto('https://www.saucedemo.com')
        await loginPage.login(user, password)
        await inventoryPage.verificarInventoryPage()
        await inventoryPage.clicarProduto(sku)
        await inventoryItemPage.verificarInventoryItemPage()
        await inventoryItemPage.verificarTituloPrecoDoProduto(titulo_produto, preco_produto)
    }) 
}