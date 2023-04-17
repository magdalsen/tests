import { expect, Page, test } from "@playwright/test";
import { ProductsPage } from "../../pages/products-page";
import { NavigatePage } from "../../shared/navigate-page";

const detailsData = {
  name: "Blue Top",
  category: "Category: Women > Tops",
  availability: "Availability: In Stock",
  condition: "Condition: New",
  brand: "Brand: Polo"
};

test.describe("Products page tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    productsPage = new ProductsPage(page);
    await navigatePage.navigateToBaseURL();
  });

  test("Check if products are visible", async () => {
    await productsPage.clickProductsButton();
    await expect(productsPage.allProductsVisibility).toBeVisible();
  });

  test("Check if products details are visible", async () => {
    await productsPage.clickProductsButton();
    await productsPage.clickViewProduct();
    await expect(productsPage.productsDetailsName).toHaveText(detailsData.name);
    await expect(productsPage.productsDetailsCategory).toHaveText(detailsData.category);
    await expect(productsPage.productsDetailsAvailability).toHaveText(
      detailsData.availability
    );
    await expect(productsPage.productsDetailsCondition).toHaveText(
      detailsData.condition
    );
    await expect(productsPage.productsDetailsBrand).toHaveText(detailsData.brand);
  });
});
