import test, { expect } from "@playwright/test";
import { NavigatePage } from "../shared/navigate-page";
import dotenv from "dotenv";

dotenv.config({
  path: ".env"
});

test("Checkbox test", async ({ page }) => {
    const navigatePage = new NavigatePage(page);
    await navigatePage.navigateToURL(`${process.env.LAMBDATEST_URL}`);
    const singleCheckbox = page.locator("id=isAgeSelected");
    await expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
})