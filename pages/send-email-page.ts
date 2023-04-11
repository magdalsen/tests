import { BasePage } from "../shared/base-page";

export class SendEmailPage extends BasePage {
  get getContactButton() {
    return "a[href='/contact_us']";
  }

  get inputFieldName() {
    return 'input[data-qa="name"]';
  }

  get inputFieldEmail() {
    return 'input[data-qa="email"]';
  }

  get inputFieldSubject() {
    return 'input[data-qa="subject"]';
  }

  get inputFieldMessage() {
    return 'textarea[data-qa="message"]';
  }

  get submitButton() {
    return 'input[data-qa="submit-button"]';
  }

  get successMessage() {
    return this.page.locator('div[class="status alert alert-success"]');
  }

  async checkSuccessMessage() {
    return this.successMessage.textContent();
  }

  async clickContactButtonPage() {
    await this.page.locator(this.getContactButton).click();
  }

  async fillInputFieldName(name: string) {
    await this.page.locator(this.inputFieldName).type(name);
  }

  async fillInputFieldEmail(email: string) {
    await this.page.locator(this.inputFieldEmail).type(email);
  }

  async fillInputFieldSubject(subject: string) {
    await this.page.locator(this.inputFieldSubject).type(subject);
  }

  async fillInputFieldMessage(message: string) {
    await this.page.locator(this.inputFieldMessage).type(message);
  }

  async clickSubmitButton() {
    await this.page.locator(this.submitButton).click();
  }
}
