import { BasePage } from "../shared/base-page";

export interface LoginData {
  login: string;
  password: string;
}

export class LogoutPage extends BasePage {
  get signupLoginButton() {
    return "a[href='/login']";
  }

  get loginButton() {
    return "button[data-qa='login-button']";
  }

  get loginInput() {
    return "input[data-qa='login-email']";
  }

  get passwordInput() {
    return "input[data-qa='login-password']";
  }

  get logoutButton() {
    return "a[href='/logout']";
  }

  get logoutText() {
    return this.page.locator(".login-form > h2");
  }

  async clickSignupLoginButtonPage() {
    await this.page.locator(this.signupLoginButton).click();
  }

  async fillLoginData({ login, password }: LoginData) {
    await this.page.fill(this.loginInput, login);
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.locator(this.loginButton).click();
  }

  async clickLogoutButton() {
    await this.page.locator(this.logoutButton).click();
  }
}
