const { test, expect } = require('playwright/test'); // ref ao Playwright
const { LoginPage } = require('../pages/LoginPage'); // ref ao arquivo LoginPage = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage'); // ref ao arquivo InventoryPage = require('./pages/InventoryPage');
const { InventoryItemPage } = require('../pages/InventoryItemPage'); // ref ao arquivo InventoryItemPage = require('./pages/InventoryItemPage');

test('Fluxo de compra da mochilaPO', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const inventoryItemPage = new InventoryItemPage(page);
    
    await loginPage.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.verificarInvetoryPage();
    await inventoryPage.clicarMochila();
    await inventoryItemPage.verificarInventoryItemPage();
    await inventoryItemPage.verificarTituloPrecoDoProduto('Sauce Labs Backpack', '$29.99');
})
