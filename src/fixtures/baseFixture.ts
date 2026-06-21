import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { LogoutPage } from "../../src/pages/LogoutPage";
import { MyInfoPage } from "../../src/pages/MyInfoPage";
import { PIMPage } from "../../src/pages/PIMPage";
import { users } from "../../src/testdata/users";

type MyFixtures = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
  myInfoPage: MyInfoPage;
  pimPage: PIMPage;
  users: typeof users;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  logoutPage: async ({ page }, use) => {
    const logoutPage = new LogoutPage(page);
    await use(logoutPage);
  },
  myInfoPage: async ({ page }, use) => {
    const myInfoPage = new MyInfoPage(page);
    await use(myInfoPage);
  },
  pimPage: async ({ page }, use) => {
    const pimPage = new PIMPage(page);
    await use(pimPage);
  },
  users: async ({}, use) => {
    await use(users);
  },
});

export { expect };
