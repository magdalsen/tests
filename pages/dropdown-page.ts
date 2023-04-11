import { BasePage } from "../shared/base-page";

export class DropdownPage extends BasePage {
  get multiSelectList() {
    return "#multi-select";
  }

  get printAllButton() {
    return "div.input-body button#printAll";
  }

  get countryListAll() {
    return 'ul[id="select2-country-results"]';
  }

  get countryByName() {
    return 'li[class="select2-results__option"]';
  }

  get countryDropdownList() {
    return 'select[id="country"]+span';
  }

  get singleSelect() {
    return 'span[id="select2-country-container"]';
  }

  async selectMultipleOption(
    labelMultipleSelect1: string,
    labelMultipleSelect2: string
  ) {
    await this.page
      .locator(this.multiSelectList)
      .selectOption([labelMultipleSelect1, labelMultipleSelect2]);
  }

  async clickPrintAllButton() {
    await this.page.locator(this.printAllButton).click();
  }

  async selectCountry(countryName: string) {
    await this.page.locator(this.countryDropdownList).click();
    await this.page
      .locator(this.countryListAll)
      .locator(this.countryByName, {
        hasText: countryName
      })
      .click();
  }
}
