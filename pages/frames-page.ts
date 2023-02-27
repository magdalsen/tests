import { Page } from '@playwright/test';

export class FramesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get getFirstName() {
    return "input[name='fname']";
  }

  get getLastName() {
    return "input[name='lname']";
  }

  get getFrame() {
    return this.page.frame("firstFr");
  }

  get getFillFormResultFrame() {
    return "p.has-text-info";
  }

  async fillForm(fname: string, lname: string) {
    await this.getFrame?.fill(this.getFirstName, fname);
    await this.getFrame?.fill(this.getLastName, lname);
  }

}
