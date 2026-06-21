import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }

  async clickAddButton() {
    await this.page.getByRole("button", { name: "Add" }).click();
  }

  firstNameLocator(): Locator {
    return this.page.locator('input[placeholder="First Name"]');
  }

  lastNameLocator(): Locator {
    return this.page.locator('input[placeholder="Last Name"]');
  }

  async verifySuccessToastIsDisplayed() {
    await expect(this.page.getByText("Successfully Updated")).toBeVisible();
  }

  async verifyHeading(locator: Locator, expectedText: string) {
    await expect(locator).toHaveText(expectedText);
  }

}
