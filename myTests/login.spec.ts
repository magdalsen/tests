import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

test("Login test", async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL);
    await loginPage.clickSignupLoginButtonPage();
    await loginPage.getLoginData({
        login: process.env.LOGIN,
        password: process.env.PASSWORD
    });
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.getLogoutButton)).toHaveText("Logout");
})