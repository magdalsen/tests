import { Page } from '@playwright/test';

export class NavigatePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToURL(url: string) {
    await this.page.goto(url);
  }

}
