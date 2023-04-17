import { BasePage } from "../shared/base-page";

export class ProductsPage extends BasePage {
  get productsButton() {
    return "a[href='/products']";
  }

  get allProducts() {
    return "div.features_items";
  }

  get allProductsVisibility() {
    return this.page.locator(this.allProducts);
  }

  get productsDetailsName() {
    return this.page.locator("div.product-information > h2");
  }

  get productsDetailsCategory() {
    return this.page.locator("div.product-information > p").first();
  }

  get productsDetailsAvailability() {
    return this.page.locator("div.product-information > p").nth(1);
  }

  get productsDetailsCondition() {
    return this.page.locator("div.product-information > p").nth(2);
  }

  get productsDetailsBrand() {
    return this.page.locator("div.product-information > p").nth(3);
  }

  async clickProductsButton() {
    await this.page.locator(this.productsButton).click();
  }

  async clickViewProduct() {
    await this.page
      .locator(
        "div.col-sm-4 div.product-image-wrapper div.choose a[href='/product_details/1']"
      )
      .first()
      .click();
  }
}
