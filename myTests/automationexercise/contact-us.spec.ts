import { expect, Page, test } from "@playwright/test";
import { ContactUsPage } from "../../pages/contact-us-page";
import { contactUsTest } from "../../fixtures/contact-us";
import { NavigatePage } from "../../shared/navigate-page";

test.describe("Contact us tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let contactUsPage: ContactUsPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    contactUsPage = new ContactUsPage(page);
    await navigatePage.navigateToBaseURL();
  });

  contactUsTest(
    "Go to contact page and send email",
    async ({ name, email, subject, message, success_message }) => {
      await contactUsPage.clickContactButtonPage();
      await contactUsPage.fillInputFieldName(name);
      await contactUsPage.fillInputFieldEmail(email);
      await contactUsPage.fillInputFieldSubject(subject);
      await contactUsPage.fillInputFieldMessage(message);
      const submitButton = page.locator(contactUsPage.submitButton);
      await submitButton.scrollIntoViewIfNeeded();
      page.on("dialog", async (dialog) => {
        await dialog.accept();
      });
      await contactUsPage.clickSubmitButton();
      expect(await contactUsPage.checkSuccessMessage()).toBe(success_message);
    }
  );
});
