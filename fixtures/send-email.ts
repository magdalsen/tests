import { test } from "@playwright/test";

type SendEmail = {
  name: string;
  email: string;
  subject: string;
  message: string;
  success_message: string;
};

const sendEmail = test.extend<SendEmail>({
  name: "Magda",
  email: "test@test.pl",
  subject: "subject test",
  message: "Message test",
  success_message: "Success! Your details have been submitted successfully.",
});

export const sendEmailTest = sendEmail;
