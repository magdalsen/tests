import { expect, Page, test } from "@playwright/test";
import { LogoutPage } from "../../pages/logout-page";
import { NavigatePage } from "../../shared/navigate-page";
import { LoginData } from "../../pages/login-page";

test.describe("Logout tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let logoutPage: LogoutPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    logoutPage = new LogoutPage(page);
    await navigatePage.navigateToBaseURL();
  });

  test("Logout", async () => {
    await logoutPage.clickSignupLoginButtonPage();
    await logoutPage.fillLoginData(<LoginData>{
      login: process.env.LOGIN,
      password: process.env.PASSWORD
    });
    await logoutPage.clickLoginButton();
    await logoutPage.clickLogoutButton();
    await expect(logoutPage.logoutText).toHaveText("Login to your account");
  });
});
