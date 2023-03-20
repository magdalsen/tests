import { test } from "@playwright/test";

interface Calendar {
  date: string;
  dateToSelect: string;
  selectedDay: number;
  selectedYear: number;
};

export const calendarTest = test.extend<Calendar>({
  date: "1994-12-04",
  dateToSelect: "December 2022",
  selectedDay: 5,
  selectedYear: 2022
});
