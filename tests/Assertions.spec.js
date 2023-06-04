import { test,expect } from "@playwright/test";

test('AssertionTest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    await expect(page.locator('#small-searchterms')).toBeEnabled()

    await page.locator('#gender-male').check()
    await expect(page.locator('#gender-male')).toBeChecked()

    await expect(page.locator('#LastName')).toHaveAttribute('type','text')

    await expect(page.locator("div[class='page-title'] h1")).toHaveText('Register')
    await expect(page.locator("div[class='page-title'] h1")).toContainText('Reg')

    await page.locator('#Email').fill('test@demo.com')
    await expect(page.locator('#Email')).toHaveValue('test@demo.com')

    const months =await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(months).toHaveCount(13)
})