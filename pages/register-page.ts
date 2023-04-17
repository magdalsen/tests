import { BasePage } from "../shared/base-page";

export interface SignupData {
  name: string;
  email: string;
}

export class RegisterPage extends BasePage {
  get signupLoginButton() {
    return "a[href='/login']";
  }

  get signupButton() {
    return "button[data-qa='signup-button']";
  }

  get nameInput() {
    return "input[data-qa='signup-name']";
  }

  get emailInput() {
    return "input[data-qa='signup-email']";
  }

  get signupErrorMessage() {
    return this.page.locator("form[action='/signup'] > p");
  }

  async clickSignupLoginButtonPage() {
    await this.page.locator(this.signupLoginButton).click();
  }

  async fillRegisterData({ name, email }: SignupData) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
  }

  async clickSignupButton() {
    await this.page.locator(this.signupButton).click();
  }
}
