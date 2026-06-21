import { test } from "../../src/fixtures/authenticatedFixture";

test.describe("My PIM Page Tests", () => {
  test.beforeEach(async ({ pimPage, myInfoPage }) => {
    await pimPage.goToThePIMPage();
  });

  test("Verify My PIM page is displayed @regression @smoke", async ({
    pimPage,
  }) => {
    await pimPage.checkIfPIMDetailIsVisible();
  });

  test("Verify add employee details @regression", async ({ pimPage }) => {
    await pimPage.clickAddButton();
    await pimPage.addEmployeeDetails();
  });
});
