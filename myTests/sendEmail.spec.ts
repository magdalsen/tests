import test, { expect } from "@playwright/test";
import { SendEmailPage } from "../pages/sendEmailPage";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.sendEmail'
})

test("Go to contact page and send email", async ({ page }) => {
  const sendEmailPage = new SendEmailPage(page);
  await page.goto(process.env.BASE_URL);
  await sendEmailPage.clickContactButtonPage();

  await sendEmailPage.fillInputFieldName(process.env.NAME);
  await sendEmailPage.fillInputFieldEmail(process.env.EMAIL);
  await sendEmailPage.fillInputFieldSubject(process.env.SUBJECT);
  await sendEmailPage.fillInputFieldMessage(process.env.MESSAGE);
  const submitButton = page.locator(sendEmailPage.submitButton);
  await submitButton.scrollIntoViewIfNeeded();
  page.on('dialog', async dialog => {
      await dialog.accept();
  });
  await sendEmailPage.clickSubmitButton();
  const successMessage = page.locator(sendEmailPage.successMessage);
  await expect(successMessage).toHaveText(process.env.SUCCESS_MESSAGE);
})