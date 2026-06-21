# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: setup\auth.setup.ts >> Authenticate Admin User
- Location: tests\setup\auth.setup.ts:5:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })

```

# Test source

```ts
  1  | import { test as setup, expect } from '@playwright/test'
  2  | import { LoginPage } from '../../src/pages/LoginPage'
  3  | import { users } from '../../src/testdata/users'
  4  | 
  5  | setup('Authenticate Admin User', async ({ page }) => {
  6  |   const loginPage = new LoginPage(page)
  7  | 
  8  |   await loginPage.goTo()
  9  |   await loginPage.login(users.admin.username, users.admin.password)
  10 | 
  11 |   await expect(
> 12 |     page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  13 | 
  14 |   // Save authenticated session
  15 |   await page.context().storageState({path: 'playwright/.auth/admin.json',})
  16 | 
  17 | })
```