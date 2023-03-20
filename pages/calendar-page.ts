import { Page } from "@playwright/test";
import moment from "moment";
import { BasePage } from "../shared/base-page";

export class CalendarPage extends BasePage {

  get calendarData() {
    return "input[id='birthday']";
  }

  get startDate() {
    return "input[placeholder='Start date']";
  }

  get previousDate() {
    return "div[class='datepicker-days'] th[class='prev']";
  }

  get nextDate() {
    return "th[class='next']";
  }

  get monthYear() {
    return "div[class='datepicker-days'] th[class='datepicker-switch']";
  }

  get selectedDate() {
    return "td[class='day']:text-is('5')";
  }

  async fillCalendar(date: string) {
    await this.page.fill(this.calendarData, date);
  }

  async clickStartDateButton() {
    await this.page.locator(this.startDate).click();
  }

  async checkIfDateIsBefore(dateToSelect: string) {
    return moment(dateToSelect, "MMMM YYYY").isBefore();
  }

  async clickSelectedDate() {
    await this.page.locator(this.selectedDate).click();
  }
}
