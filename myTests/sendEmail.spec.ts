import test, { expect } from "@playwright/test";

test("Go to contact page and send email", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  // await page.locator("text=Signup / Login").click();
  await page.locator("li").getByText("Contact us").click();
  //name
  const inputName = page.locator('input[data-qa="name"]');
  await expect(inputName).toHaveAttribute("placeholder", "Name");
  await inputName.type("Magda");
  //email
  const inputEmail = page.locator('input[data-qa="email"]');
  await expect(inputEmail).toHaveAttribute("placeholder", "Email");
  await inputEmail.type("test@test.com");
  //subject
  const inputSubject = page.locator('input[data-qa="subject"]');
  await expect(inputSubject).toHaveAttribute("placeholder", "Subject");
  await inputSubject.type("subject text");
  //message
  const inputMessage = page.locator('textarea[data-qa="message"]');
  await expect(inputMessage).toHaveAttribute("placeholder", "Your Message Here");
  await inputMessage.type("Message text");
  //submit
  const submitButton = page.locator('input[data-qa="submit-button"]');
  await submitButton.scrollIntoViewIfNeeded();
  await expect(submitButton).toHaveAttribute("value", "Submit");
  page.on("dialog", async (dialog) => {
    // Verify type of dialog
    expect(dialog.type()).toContain("confirm");
    // verify message of alert
    expect(dialog.message()).toContain("Press OK to proceed!");
    //click on alert ok button
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Submit" }).click();
  const successMessage = page
    .locator("#contact-page")
    .getByText("Success! Your details have been submitted successfully.");
  await expect(successMessage).toHaveText(
    "Success! Your details have been submitted successfully."
  );
});
