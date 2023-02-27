import { Page } from "@playwright/test";

export class DropdownPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get getSelectOne() {
    return "#select-demo";
  }

  get getMultiSelect() {
    return "#multi-select";
  }

  get getSelectedOneOption() {
    return "p[class='selected-value text-size-14']";
  }

  get getPrintAllButton() {
    return 'div.input-body button[id="printAll"]';
  }

  get getSelectedMultiOption() {
    return 'span[class="groupradiobutton block break-words"]';
  }

  get getCountry() {
    return "ul#select2-country-results";
  }

  get getSingleSelect() {
    return 'span[id="select2-country-container"]';
  }

  async selectOneOption(label: string) {
    await this.page.selectOption(this.getSelectOne, label);
  }

  async selectMultipleOption(
    labelMultipleSelect1: string,
    labelMultipleSelect2: string
  ) {
    await this.page
      .locator(this.getMultiSelect)
      .selectOption([labelMultipleSelect1, labelMultipleSelect2]);
  }

  async clickPrintAllButton() {
    await this.page.locator(this.getPrintAllButton).click();
  }

  async selectCountry(countryName: string) {
    await this.page.click("#country+span");
    await this.page
      .locator(this.getCountry)
      .locator("li", {
        hasText: countryName
      })
      .click();
  }
}
