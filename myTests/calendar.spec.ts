import test from "@playwright/test";
import moment from "moment";

test("Calendar using fill function", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1994-12-04";

    await page.fill("id=birthday", date);
})

test.only("Calendar demo using moment", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("input[placeholder='Start date']");
    
    const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
    const next = page.locator("th[class='next']");
    const monthYear = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']");

    let dateToSelect: string = "January 2023";

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

    while (await monthYear.textContent() != dateToSelect) {
        if (thisMonth) {
            await prev.click();
        } else {
            await next.click();
        }
    }

    await page.locator("td[class='day']:text-is('4')").click();

})