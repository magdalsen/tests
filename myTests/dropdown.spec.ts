import { expect, Page, test } from "@playwright/test";
import { DropdownPage } from "../pages/dropdown-page";
import { bootstrapDropdownTest } from "../fixtures/dropdown";
import { NavigatePage } from "../shared/navigate-page";

test.describe("Dropdown tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    dropdownPage = new DropdownPage(page);
    await navigatePage.navigateToBootstrapPage();
  });

  bootstrapDropdownTest("Select single dropdown with search", async ({ country }) => {
    await dropdownPage.selectCountry(country);
    await expect(page.locator(dropdownPage.singleSelect)).toHaveText(country);
  });
});
