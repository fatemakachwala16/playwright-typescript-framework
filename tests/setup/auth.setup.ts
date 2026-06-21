import { test as setup, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'
import { users } from '../../src/testdata/users'

setup('Authenticate Admin User', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goTo()
  await loginPage.login(users.admin.username, users.admin.password)

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

  // Save authenticated session
  await page.context().storageState({path: 'playwright/.auth/admin.json',})

})