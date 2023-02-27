import { test } from "@playwright/test";

type Dropdown = {
  label: string;
  labelMultipleSelect1: string;
  labelMultipleSelect2: string;
};

type BootstrapDropdown = {
  country: string;
};

export const dropdownTest = test.extend<Dropdown>({
  label: "Tuesday",
  labelMultipleSelect1: "Texas",
  labelMultipleSelect2: "Washington"
});

export const bootstrapDropdownTest = test.extend<BootstrapDropdown>({
  country: "India",
});