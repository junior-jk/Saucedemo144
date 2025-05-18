const { test, expect } = require('playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { InventoryItemPage } = require('../pages/InventoryItemPage');
const { CartPage } = require('../pages/CartPage');

test('Fluxo de compra completo com a mochila', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const inventoryItemPage = new InventoryItemPage(page);
  const cartPage = new CartPage(page);

  // Acessar a URL e fazer login
  await loginPage.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');

  // Verificar página de inventário
  await inventoryPage.verificarInventoryPage();

  // Clicar na mochila (SKU 4)
  await inventoryPage.clicarProduto(4);

  // Verificar página do produto
  await inventoryItemPage.verificarInventoryItemPage();
  await inventoryItemPage.verificarTituloPrecoDoProduto('Sauce Labs Backpack', '$29.99');

  // Adicionar ao carrinho
  await page.locator('.btn_primary').click();

  // Ir para o carrinho
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Aqui você faz o assert da quantidade
  await cartPage.verificarQuantidadeEsperada(1);

  // Ir para checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Preencher dados de checkout
  await page.locator('[data-test="firstName"]').fill('João');
  await page.locator('[data-test="lastName"]').fill('Silva');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  // Verificar resumo do pedido
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Finalizar compra
  await page.locator('[data-test="finish"]').click();
  //await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
