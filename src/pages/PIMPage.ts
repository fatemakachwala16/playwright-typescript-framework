import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Logger } from "../utils/logger";

export class PIMPage extends BasePage {
  private readonly pimLocator: Locator;
  private readonly pimDetailLocator: Locator;
  private readonly addEmployeeDetailsLocator: Locator;
  private readonly loginToggle: Locator;
  private readonly userNameLabel: Locator;
  private readonly userNameLocator: Locator;
  private readonly passwordLocator: Locator;
  private readonly employeeIDLocator: Locator;
  private readonly confirmPasswordLocator: Locator;
  private readonly saveButton: Locator;
  private readonly personalDetailsHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.pimLocator = page.locator('a:has-text("PIM")');
    this.pimDetailLocator = page.getByRole("heading", {
      name: "Employee Information",
    });
    this.addEmployeeDetailsLocator = page.locator(
      'li:has-text("Add Employee")',
    );
    this.loginToggle = page.locator(".oxd-switch-wrapper");
    this.userNameLabel = page.getByText("Username");
    this.userNameLocator = page.locator(
      '//label[text()="Username"]/ancestor::div[contains(@class,"oxd-input-group")]//input',
    );
    this.passwordLocator = page.locator('[type="password"]').first();
    this.confirmPasswordLocator = page.locator('[type="password"]').last();
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.employeeIDLocator = page.locator(".oxd-input").nth(4);
    this.personalDetailsHeading = page.getByRole("heading", {
      name: "Personal Details",
    });
  }

  async goToThePIMPage() {
    await this.pimLocator.click();
  }

  async checkIfPIMDetailIsVisible() {
    await expect(this.pimDetailLocator).toBeVisible();
  }

  async addEmployeeDetails(
    firstName: string,
    lastName: string,
    employeeID: number,
    userName: string,
    password: string,
    confirmPassword: string,
  ) {
    await expect(this.addEmployeeDetailsLocator).toBeVisible();
    await this.firstNameLocator().fill(firstName);
    Logger.info(`added first name to '${firstName}'`);
    await this.lastNameLocator().fill(lastName);
    Logger.info(`added last name to '${lastName}'`);
    await this.employeeIDLocator.fill(employeeID.toString());
    Logger.info(`added employee id to '${employeeID}'`);
    await this.loginToggle.click();
    await expect(this.userNameLabel).toBeVisible();
    await this.userNameLocator.fill(userName);
    Logger.info(`added userName name to '${userName}'`);
    await this.passwordLocator.fill(password);
    Logger.info(`added password to '${password}'`);
    await this.confirmPasswordLocator.fill(confirmPassword);
    Logger.info(`added confirm password to '${confirmPassword}'`);
    await this.saveButton.click();
    await this.waitForPageLoad()
    await this.verifyHeading(this.personalDetailsHeading, "Personal Details");
  }
}
