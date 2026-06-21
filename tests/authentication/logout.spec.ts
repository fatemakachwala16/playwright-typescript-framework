import { test, expect } from "../../src/fixtures/baseFixture";

test("logout from the application", async ({
  loginPage,
  logoutPage,
  users,
}) => {
  await loginPage.goTo();
  await loginPage.login(users.admin.username, users.admin.password);

  await logoutPage.logoutFromApplication();
  await logoutPage.checkLoginPageIsLoaded();
});
