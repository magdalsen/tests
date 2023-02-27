import { expect } from "@playwright/test";
import { SendEmailPage } from "../pages/sendEmailPage";
import { sendEmailTest } from "../fixtures/sendEmail";
import { NavigatePage } from "../shared/navigatePage";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

sendEmailTest("Go to contact page and send email", async ({ page, name, email, subject, message, success_message }) => {
  const sendEmailPage = new SendEmailPage(page);
  const navigatePage = new NavigatePage(page);
  await navigatePage.navigateToURL('');
  await sendEmailPage.clickContactButtonPage();

  await sendEmailPage.fillInputFieldName(name);
  await sendEmailPage.fillInputFieldEmail(email);
  await sendEmailPage.fillInputFieldSubject(subject);
  await sendEmailPage.fillInputFieldMessage(message);
  const submitButton = page.locator(sendEmailPage.submitButton);
  await submitButton.scrollIntoViewIfNeeded();
  page.on('dialog', async dialog => {
      await dialog.accept();
  });
  await sendEmailPage.clickSubmitButton();
  const successMessage = page.locator(sendEmailPage.successMessage);
  await expect(successMessage).toHaveText(success_message);
})