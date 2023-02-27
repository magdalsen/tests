import { chromium, expect, test } from "@playwright/test";

test("Login test demo", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://automationexercise.com/");
  // await page.click("//a[contains(text(),'Test Cases')]");
  await page.locator("text=Signup / Login").click();
  await page.fill("input[data-qa='login-email']", "magdal.sen@gmail.com");
  await page.fill("input[data-qa='login-password']", "Haslo@1234");

  await page.locator("button[data-qa='login-button']").click();

  await page.waitForTimeout(5000);
});
