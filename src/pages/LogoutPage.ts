import { expect, Locator, Page } from "@playwright/test"

export class LogoutPage {
    private readonly menu: Locator
    private readonly logout: Locator
    private readonly loginTitle: Locator


    constructor(private readonly page: Page) {
        this.menu = page.locator('.oxd-userdropdown-tab')
        this.logout = page.getByText('Logout')
        this.loginTitle = page.locator('.orangehrm-login-title')
    }

    async logoutFromApplication() {
        await this.menu.click()
        await this.logout.click()

    }

    async checkLoginPageIsLoaded() {
        await expect(this.loginTitle).toHaveText('Login')
    }

}