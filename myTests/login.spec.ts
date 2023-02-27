import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { NavigatePage } from "../shared/navigatePage";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

test("Login test", async ({page}) => {
    const loginPage = new LoginPage(page);
    const navigatePage = new NavigatePage(page);
    await navigatePage.navigateToURL('');
    await loginPage.clickSignupLoginButtonPage();
    await loginPage.getLoginData({
        login: process.env.LOGIN,
        password: process.env.PASSWORD
    });
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.getLogoutButton)).toHaveText("Logout");
})