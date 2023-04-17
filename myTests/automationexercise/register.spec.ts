import { expect, Page, test } from "@playwright/test";
import { RegisterPage } from "../../pages/register-page";
import { NavigatePage } from "../../shared/navigate-page";
import { SignupData } from "../../pages/register-page";

test.describe("Register tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    registerPage = new RegisterPage(page);
    await navigatePage.navigateToBaseURL();
  });

  test("Register", async () => {
    await registerPage.clickSignupLoginButtonPage();
    await registerPage.fillRegisterData(<SignupData>{
      name: process.env.FNAME,
      email: process.env.LOGIN
    });
    await registerPage.clickSignupButton();
    await expect(registerPage.signupErrorMessage).toHaveText(
      "Email Address already exist!"
    );
  });
});
