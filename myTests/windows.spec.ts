import test, { Page } from "@playwright/test";
let facebookPage: Page;

test("Interact with tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  // console.log(page.url()); //basic page url

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'")
  ]);
  // console.log(newWindow.url()); //popup page url
  // newWindow.fill("", ""); // działania na popup page
});

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  const [multiplePages] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
  ]);
  await page.waitForLoadState();
  const pages = multiplePages.context().pages(); // how many pages are on site, iterable
  console.log(pages.length);
  pages.forEach((tab) => {
    console.log(tab.url());
  });
  // how to get specific page
  for (let i = 0; i < pages.length; i++) {
    const url = pages[i].url();
    if (url == "https://www.facebook.com/lambdatest/") {
      facebookPage = pages[i];
    }
  }
  const text = await facebookPage.textContent("//h1");
  console.log(text);
});
