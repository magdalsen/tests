import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get getSignupLoginButton() {
    return "a[href='/login']";
  }

  get getLoginButton() {
    return "button[data-qa='login-button']";
  }

  get getLogoutButton() {
    return "a[href='/logout']";
  }

  get loginInput() {
    return "input[data-qa='login-email']";
  }

  get passwordInput() {
    return "input[data-qa='login-password']";
  }

  async clickSignupLoginButtonPage() {
    await this.page.locator(this.getSignupLoginButton).click();
  }

  async getLoginData({login, password}) {
    await this.page.fill(this.loginInput, login);
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.locator(this.getLoginButton).click();
  }
}
