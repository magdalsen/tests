import { expect } from "@playwright/test";
import { CalendarPage } from "../pages/calendar-page";
import { calendarTest } from "../fixtures/calendar";
import { NavigatePage } from "../shared/navigate-page";
import dotenv from "dotenv";

dotenv.config({
  path: ".env"
});

calendarTest("Check if calendar data is fullfilled", async ({ page, date }) => {
  const navigatePage = new NavigatePage(page);
  const calendarPage = new CalendarPage(page);

  await navigatePage.navigateToURL(`${process.env.CALENDAR_URL}`);
  await calendarPage.fillCalendar(date);
  await expect(page.locator(calendarPage.getCalendarData)).toHaveValue(date);
});

calendarTest(
  "Check if calendar data is fullfilled using moment",
    async ({ page, dateToSelect, selectedYear }) => {
  const navigatePage = new NavigatePage(page);
  const calendarPage = new CalendarPage(page);
  const previous = page.locator(calendarPage.getPreviousDate);
  const next = page.locator(calendarPage.getNextDate);
  const monthYear = page.locator(calendarPage.getMonthYear);
  const currentYear = new Date().getFullYear();

  await navigatePage.navigateToURL(`${process.env.CALENDAR_URL}`);
  await calendarPage.clickStartDateButton();
  while ((await monthYear.textContent()) != dateToSelect) {
    await calendarPage.checkIfDateIsBefore(dateToSelect) ?
    await previous.click()
    : await next.click();
  }
  await calendarPage.clickSelectedDate();
  await expect(selectedYear).toBeLessThan(currentYear);
  }
);
