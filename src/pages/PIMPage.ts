import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PIMPage extends BasePage {
  private readonly pimLocator: Locator;
  private readonly pimDetailLocator: Locator;
  private readonly addEmployeeDetailsLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.pimLocator = page.locator('a:has-text("PIM")');
    this.pimDetailLocator = page.getByRole("heading", {
      name: "Employee Information",
    });
    this.addEmployeeDetailsLocator = page.locator(
      'li:has-text("Add Employee")',
    );
  }

  async goToThePIMPage() {
    await this.pimLocator.click();
  }

  async checkIfPIMDetailIsVisible() {
    await expect(this.pimDetailLocator).toBeVisible();
  }

  async addEmployeeDetails() {
    await expect(this.addEmployeeDetailsLocator).toBeVisible();
  }
  
}
