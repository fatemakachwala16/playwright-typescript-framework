import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle')
  }

}