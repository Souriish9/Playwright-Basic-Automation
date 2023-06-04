import { expect,test } from "@playwright/test";

test('LocateMultipleElements',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products=await page.$$("//div[@id='tbodyid']//div//h4/a")
    for(const product of products)
    {
        const product_name=await product.textContent()
        console.log(product_name)
    }
})