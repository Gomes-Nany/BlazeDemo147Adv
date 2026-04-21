import { test,expect } from '@playwright/test'

test ( 'Fluxo de Reserva - Script Simples', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator('select[name="user-name"]').selectOption('standard_user')
    await page.locator('select[name="error-message-container"]').selectOption('secret_sauce')
    await page.locator('.btn-primary').click("login-button")
    // Transição de página
    // Verificar se estamos na página certa baseado em um texto âncora
    await expect(page.locator('h3')).toHaveText('Flights from São Paolo to London:')
   // Selecionar o vôo desejado
   // await page.locator ('.btn-small').click () // clicar no primeiro botão
    await page.getByRole('row', { name: 'Choose This Flight 234 United Airlines'}).getByRole('button').click()
   // Transição de página
   // Verificar se estamos na página certa baseado em parte da URL
    await expect(page).toHaveURL(/purchase\.php/)
    // Preencher a caixa de texto cujo ID é inputName como texto Elaine
    await page.locator('#inputName').fill('Elaine')
    // Selecionar bandeira como Amex
    await page.locator('#cardType').selectOption('amex')
    //Marcar o check box Remember Me
    await page.locator('#rememberMe').check()
    // Clique no botão Purchase
    await page.locator('.btn-primary').click()
    // Transição de página
    // Verificar se estamos na página certa baseado em parte da URL
    await expect(page).toHaveURL(/confirmation\.php/)
   // Verificar a mensagem de agradecimento e o preço
   await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!')
   await expect(page.getByRole('row',{ name: 'Amount 555 USD'})).toBeVisible()
   
})

