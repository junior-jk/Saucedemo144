// 1 - referências a bibliotecas e frameworks
const { test, expect } = require('playwright/test')  // ref ao Playwright

// 2 - funções de teste
// 2.1 - atributos / variáveis / objetos compartilhados entre as funções
// 2.2 - funções de apoio
// 2.3 - funções de teste em si

test('Fluxo de compra da mochila', async ({ page }) => {
    // page é o nome que demos para o objeto do Playwright
    // A. Login
    await page.goto('https://www.saucedemo.com') // site alvo
    await page.fill('#user-name', 'standard_user') // seletor como id
    await page.fill('[name="password"]', 'secret_sauce') //seletor name
    await page.click('input.submit-button.btn_action') // seletor css
    // Verificar se realizou o login com sucesso
    // Verifica se a url termina com inventory que é a 1a página interna
    await expect(page).toHaveURL(/.*inventory/)
    // await expect(page.locator('span.title').textContent(), 'Products')
    const tituloSecao = page.locator('span.title')
    await expect(tituloSecao).toHaveText('Products')

    // B. Página InventoryItem / Detalhes do Produto
    await page.click('#item_4_title_link') // clica na mochila
    // verificar se está na página InventoryItem
    await expect(page).toHaveURL(/.*inventory-item/)

    // await page.waitForTimeout(2000) // pausa bruta = alfinete
    
    const tituloSecao2 = page.locator('#back-to-products')
    await expect(tituloSecao2).toBeVisible() // espera o elemento estar vísivel
    await expect(tituloSecao2).toHaveText('Back to products')
    
    // Novo código de hoje

    const tituloProduto = page.locator('div.inventory_details_name.large_size')
    await expect(tituloProduto).toHaveText('Sauce Labs Backpack')

    const precoProduto = page.locator('div.inventory_details_price')
    await expect(precoProduto).toHaveText('$29.99')


}) // final do teste