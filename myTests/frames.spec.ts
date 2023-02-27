import test, { expect } from "@playwright/test";
import { FramesPage } from "../pages/frames-page";
import { NavigatePage } from "../shared/navigate-page";
import dotenv from "dotenv";
const fname = process.env.FNAME;
const lname = process.env.LNAME;

dotenv.config({
  path: ".env"
});

test("Check interact with frames", async ({ page }) => {
  const navigatePage = new NavigatePage(page);
  const framesPage = new FramesPage(page);
  await navigatePage.navigateToURL(`${process.env.FRAMES_URL}`);
  // const allframes = page.frames().length; //give all frames on page
  await framesPage.fillForm(`${fname}`, `${lname}`);
  expect(
    await framesPage.getFrame?.locator(framesPage.getFillFormResultFrame).textContent()
  ).toContain(`You have entered ${fname} ${lname}`);
});
