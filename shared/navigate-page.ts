import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class NavigatePage extends BasePage {
  async navigateToBaseURL() {
    await this.page.goto(process.env.BASE_URL);
  }

  async navigateToCalendarPage() {
    await this.page.goto(process.env.CALENDAR_URL);
  }

  async navigateToLambdatestPage() {
    await this.page.goto(process.env.LAMBDATEST_URL);
  }

  async navigateToBootstrapPage() {
    await this.page.goto(process.env.BOOTSTRAP_DROPDOWN_URL);
  }
}
