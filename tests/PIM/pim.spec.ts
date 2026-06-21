import { test } from "../../src/fixtures/authenticatedFixture";

test.describe("My PIM Page Tests", () => {
  test.beforeEach(async ({ pimPage, myInfoPage }) => {
    await myInfoPage.goToTheDashboardPage();
    await pimPage.goToThePIMPage();
  });

  test("Verify My PIM page is displayed @regression @smoke", async ({
    pimPage,
  }) => {
    await pimPage.checkIfPIMDetailIsVisible();
  });

  test("Verify add employee details @regression", async ({
    pimPage,
    users,
  }) => {
    await pimPage.clickAddButton();
    await pimPage.addEmployeeDetails(
      users.employee.firstName,
      users.employee.lastName,
      users.employee.employeeID,
      users.employee.username,
      users.employee.password,
      users.employee.confirmPassword,
    );
  });
});
