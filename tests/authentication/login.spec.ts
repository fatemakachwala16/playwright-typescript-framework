import { test, expect } from '../../src/fixtures/baseFixture'

test.describe('Login functionality', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goTo()
    })

    test('Login with valid credentials @smoke', async ({ loginPage, page, users }) => {
        await loginPage.login(users.admin.username, users.admin.password)
        await loginPage.checkDashboardPageIsLoaded()
    })

    test('Login with invalid credentials @regression', async ({ loginPage, page, users }) => {
        await loginPage.login(users.invalid.username, users.invalid.password)
        await loginPage.checkInvalidCredentialsErrorIsVisible()
    })

    test('Login with empty credentials for username @regression', async ({ loginPage, page, users }) => {
        await loginPage.login(undefined, users.admin.password)
        await loginPage.checkRequiredFieldErrorIsVisible()
    })

    test('Login with empty credentials for password @regression', async ({ loginPage, page, users }) => {
        await loginPage.login(users.admin.username, undefined)
        await loginPage.checkRequiredFieldErrorIsVisible()
    })

})