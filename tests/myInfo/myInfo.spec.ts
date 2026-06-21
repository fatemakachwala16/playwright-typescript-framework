import { test } from "../../src/fixtures/authenticatedFixture";

test.describe("My Info Page Tests", () => {
  test.beforeEach(async ({ myInfoPage }) => {
    await myInfoPage.goToTheDashboardPage();
    await myInfoPage.goToTheMyInfoPage();
  });

  test("Verify My Info page @regression @smoke", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.checkIfPersonalDetailsIsVisible();
  });

  test("Verify first name is updated successfully @regression", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.updateFirstName(users.employee.firstName);
    await myInfoPage.clickOnSaveButton();
  });

  test("Verify last name is updated successfully @regression", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.updateLastName(users.employee.lastName);
    await myInfoPage.clickOnSaveButton();
  });

  test("Verify check radio button is working @regression", async ({
    myInfoPage,
  }) => {
    await myInfoPage.checkRadioButton();
    await myInfoPage.clickOnSaveButton();
  });

  test("Verify that user is able to select the marital status @regression", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.selectMaritalStatus(users.employee.maritalStatus);
    await myInfoPage.clickOnSaveButton();
  });

  test("Veriy that user is able to select the date of birth @regression", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.selectDateOfBirth(users.employee.dateOfBirth);
    await myInfoPage.clickOnSaveButton();
  });

  test("verify file is uploaded successfully @regression", async ({
    myInfoPage,
  }) => {
    await myInfoPage.uploadFile("testexample.png");
    await myInfoPage.verifyUploadedFile("testexample.png");
  });

  test("Verify user is able to update all the personal details and success toaster us displayed @smoke @regression", async ({
    myInfoPage,
    users,
  }) => {
    await myInfoPage.updateFirstName(users.employee.firstName);
    await myInfoPage.updateLastName(users.employee.lastName);
    await myInfoPage.checkRadioButton();
    await myInfoPage.selectDateOfBirth(users.employee.dateOfBirth);
    await myInfoPage.clickOnSaveButton();
    await myInfoPage.verifySuccessToastIsDisplayed();
  });
});
