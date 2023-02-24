import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { loginTest } from "../fixtures/login";

loginTest("Login test", async ({page, login, password}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickSignupLoginButtonPage();
    await loginPage.getLoginData({
        login: login,
        password: password
    });
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.getLogoutButton)).toHaveText("Logout");
})