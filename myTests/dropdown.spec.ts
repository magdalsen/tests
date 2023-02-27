import { expect } from "@playwright/test";
import { DropdownPage } from "../pages/dropdown-page";
import { bootstrapDropdownTest } from "../fixtures/dropdown";
import { NavigatePage } from "../shared/navigate-page";
import dotenv from "dotenv";

dotenv.config({
  path: ".env"
});

// dropdownTest("Select one and multiple dropdown option", async ({ page, label, labelMultipleSelect1, labelMultipleSelect2 }) => {
//     const navigatePage = new NavigatePage(page);
//     const dropdownPage = new DropdownPage(page);
//     await navigatePage.navigateToURL(`${process.env.DROPDOWN_URL}`);
//     await dropdownPage.selectOneOption(label);
//     await expect(page.locator(dropdownPage.getSelectedOneOption)).toHaveText(`Day selected :- ${label}`);
//     await dropdownPage.selectMultipleOption(labelMultipleSelect1, labelMultipleSelect2);
//     await dropdownPage.clickPrintAllButton();
//     await expect(page.locator(dropdownPage.getSelectedMultiOption)).toHaveText(`${labelMultipleSelect1},${labelMultipleSelect2}`);
// });

bootstrapDropdownTest(
  "Select single dropdown with search",
  async ({ page, country }) => {
    const navigatePage = new NavigatePage(page);
    const dropdownPage = new DropdownPage(page);
    await navigatePage.navigateToURL(`${process.env.BOOTSTRAP_DROPDOWN_URL}`);
    await dropdownPage.selectCountry(country);
    await expect(page.locator(dropdownPage.getSingleSelect)).toHaveText(country);
  }
);
