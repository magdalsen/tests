import { BasePage } from "../shared/base-page";

export interface LoginData {
  login: string;
  password: string;
}

export class LoginPage extends BasePage {
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
    return this.page.locator("a[href='/logout']");
  }

  // async checkLogoutButton() {
  //   return this.logoutButton.textContent();
  // }

  get badLoginMessage() {
    return this.page.locator("form[action='/login'] > p");
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
}
