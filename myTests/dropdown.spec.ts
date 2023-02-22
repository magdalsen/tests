import test, { expect } from "@playwright/test";

test("Dropdown test example", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        label: "Tuesday"
        //lub value: "Tuesday" lub index: 5
    });

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
})

test.only("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
        .locator("li", {
            hasText: countryName
        })
        .click();
    }
    await page.waitForTimeout(3000);
})


