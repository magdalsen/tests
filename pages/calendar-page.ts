import { Page } from "@playwright/test";
import moment from "moment";

export class CalendarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get getCalendarData() {
    return "input[id='birthday']";
  }

  get getStartDate() {
    return "input[placeholder='Start date']";
  }

  get getPreviousDate() {
    return "div[class='datepicker-days'] th[class='prev']";
  }

  get getNextDate() {
    return "th[class='next']";
  }

  get getMonthYear() {
    return "div[class='datepicker-days'] th[class='datepicker-switch']";
  }

  get getSelectedDate() {
    return "td[class='day']:text-is('5')";
  }

  async fillCalendar(date: string) {
    await this.page.fill(this.getCalendarData, date);
  }

  async clickStartDateButton() {
    await this.page.locator(this.getStartDate).click();
  }

  async checkIfDateIsBefore(dateToSelect: string) {
    return moment(dateToSelect, "MMMM YYYY").isBefore();
  }

  async clickSelectedDate() {
    await this.page.locator(this.getSelectedDate).click();
  }
}
