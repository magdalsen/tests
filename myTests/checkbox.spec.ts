import test, { expect, Page } from "@playwright/test";
import { NavigatePage } from "../shared/navigate-page";

test.describe('Checkbox tests', () => {
  let page: Page;
  let navigatePage: NavigatePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    await navigatePage.navigateToLambdatestPage();
  });
  
  test("Checkbox test", async () => {
    const singleCheckbox = page.locator("id=isAgeSelected");
    await expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
  });
});