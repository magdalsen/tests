import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { NavigatePage } from "../shared/navigate-page";
import { LoginData } from "../pages/login-page";

test.describe("Login tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    loginPage = new LoginPage(page);
    await navigatePage.navigateToBaseURL();
  });

  test("Login test", async () => {
    await loginPage.clickSignupLoginButtonPage();
    await loginPage.fillLoginData(<LoginData>{
      login: process.env.LOGIN,
      password: process.env.PASSWORD
    });
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.logoutButton)).toHaveText("Logout");
  });
});
