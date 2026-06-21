import { test as base } from "./baseFixture";

export const test = base;

test.use({
  storageState: "playwright/.auth/admin.json",
});

export { expect } from "@playwright/test";
