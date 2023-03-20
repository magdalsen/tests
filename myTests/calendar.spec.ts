import { Page, test } from "@playwright/test";
import { expect } from "@playwright/test";
import { CalendarPage } from "../pages/calendar-page";
import { calendarTest } from "../fixtures/calendar";
import { NavigatePage } from "../shared/navigate-page";

test.describe("Calendar tests", () => {
  let page: Page;
  let navigatePage: NavigatePage;
  let calendarPage: CalendarPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    navigatePage = new NavigatePage(page);
    calendarPage = new CalendarPage(page);
    await navigatePage.navigateToCalendarPage();
  });

  calendarTest("Check if calendar data is fullfilled", async ({ date }) => {
    await calendarPage.fillCalendar(date);
    await expect(page.locator(calendarPage.calendarData)).toHaveValue(date);
  });

  calendarTest(
    "Check if calendar data is fullfilled using moment",
    async ({ dateToSelect, selectedYear }) => {
      const previous = page.locator(calendarPage.previousDate);
      const next = page.locator(calendarPage.nextDate);
      const monthYear = page.locator(calendarPage.monthYear);
      const currentYear = new Date().getFullYear();

      await calendarPage.clickStartDateButton();
      while ((await monthYear.textContent()) != dateToSelect) {
        (await calendarPage.checkIfDateIsBefore(dateToSelect))
          ? await previous.click()
          : await next.click();
      }
      await calendarPage.clickSelectedDate();
      await expect(selectedYear).toBeLessThan(currentYear);
    }
  );
});
