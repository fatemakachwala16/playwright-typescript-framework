import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly username: Locator;
  private readonly userPassword: Locator;
  private readonly signInButton: Locator;
  private readonly dashboardPageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.getByPlaceholder("Username");
    this.userPassword = page.getByPlaceholder("Password");
    this.signInButton = page.getByRole("button", { name: "Login" });
    this.dashboardPageHeading = page.getByRole("heading", {
      name: "Dashboard",
    });
  }

  async goTo() {
    await this.page.goto("/");
  }

  async login(username?: string, password?: string) {
    if (username) {
      await this.username.fill(username);
    }

    if (password) {
      await this.userPassword.fill(password);
    }

    await this.signInButton.click();
    await this.waitForPageLoad();
  }

  async checkDashboardPageIsLoaded() {
    await expect(this.dashboardPageHeading).toBeVisible();
  }

  async checkInvalidCredentialsErrorIsVisible() {
    await expect(this.page.getByText("Invalid credentials")).toBeVisible();
  }

  async checkRequiredFieldErrorIsVisible() {
    await expect(this.page.getByText("Required")).toBeVisible();
  }
}
