import { expect, Page, test } from "@playwright/test";
import { SendEmailPage } from "../pages/send-email-page";
import { sendEmailTest } from "../fixtures/send-email";
import { NavigatePage } from "../shared/navigate-page";

test.describe('Send email tests', () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let sendEmailPage: SendEmailPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    sendEmailPage = new SendEmailPage(page);
    await navigatePage.navigateToBaseURL();
  });
  
  sendEmailTest(
    "Go to contact page and send email",
    async ({ name, email, subject, message, success_message }) => {
      await sendEmailPage.clickContactButtonPage();
      await sendEmailPage.fillInputFieldName(name);
      await sendEmailPage.fillInputFieldEmail(email);
      await sendEmailPage.fillInputFieldSubject(subject);
      await sendEmailPage.fillInputFieldMessage(message);
      const submitButton = page.locator(sendEmailPage.submitButton);
      await submitButton.scrollIntoViewIfNeeded();
      page.on("dialog", async (dialog) => {
        await dialog.accept();
      });
      await sendEmailPage.clickSubmitButton();
      const successMessage = page.locator(sendEmailPage.successMessage);
      await expect(successMessage).toHaveText(success_message);
    }
  );
});