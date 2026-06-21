import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle')
  }

  async clickAddButton()
  {
    await this.page.getByRole('button', { name: 'Add' }).click()
  }

}