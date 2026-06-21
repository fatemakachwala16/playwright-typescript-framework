import { expect, Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage"
import { Logger } from '../utils/logger'
import { FileUtils } from "../utils/fileUtils"

export class MyInfoPage extends BasePage {
    private readonly myInfoLocator: Locator
    private readonly personalDetailsHeading: Locator
    private readonly firstName: Locator
    private readonly lastName: Locator
    private readonly femaleRadio: Locator
    private readonly maritalStatusDropdown: Locator
    private readonly dateOfBirthInput: Locator
    private readonly successToast: Locator
    private readonly saveButton: Locator
    private readonly addButton: Locator
    private readonly fileInput: Locator
    private readonly saveAttachmentButton: Locator

    constructor(page: Page) {
        super(page)
        this.myInfoLocator = page.locator('a:has-text("My Info")')
        this.personalDetailsHeading = page.getByRole('heading', { name: 'Personal Details' })
        this.firstName = page.locator('input[placeholder="First Name"]')
        this.lastName = page.locator('input[placeholder="Last Name"]')
        this.femaleRadio = page.locator('label', { hasText: 'Female' });
        this.maritalStatusDropdown = page.locator('.oxd-select-wrapper').last()
        this.dateOfBirthInput = page.locator('input[placeholder="yyyy-dd-mm"]').last()
        this.successToast = page.getByText('Successfully Updated')
        this.saveButton = page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button')
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.fileInput = page.locator('input[type="file"]')
        this.saveAttachmentButton = page.getByRole('button', { name: 'Save' }).last()
    }

    async goToTheDashboardPage() {
        await this.page.goto('/web/index.php/dashboard/index')
    }

    async goToTheMyInfoPage() {
        await this.myInfoLocator.click()
    }

    async checkIfPersonalDetailsIsVisible() {
        await expect(this.personalDetailsHeading).toHaveText('Personal Details')
        await this.waitForPageLoad()
    }

    async updateFirstName(newFirstName: string) {
        Logger.info(`Updating first name to '${newFirstName}'`)
        await this.firstName.fill('')
        await this.firstName.fill(newFirstName)
        await expect(this.firstName).toHaveValue(newFirstName)
        Logger.success('First name field updated successfully');
    }

    async updateLastName(newLastName: string) {
        Logger.info(`Updating last name to '${newLastName}'`)
        await this.lastName.fill('')
        await this.lastName.fill(newLastName)
        await expect(this.lastName).toHaveValue(newLastName)
        Logger.success('Last name field updated successfully');
    }

    async checkRadioButton() {
        await this.femaleRadio.check()
        await expect(this.femaleRadio).toBeChecked()
    }

    async selectMaritalStatus(maritalStatus: string) {
        await this.maritalStatusDropdown.click()
        const option = this.page.locator(`.oxd-select-dropdown:has-text("${maritalStatus}")`)
        await option.click()
    }

    async selectDateOfBirth(dateOfBirth: string) {
        await this.dateOfBirthInput.fill(dateOfBirth)
        await expect(this.dateOfBirthInput).toHaveValue(dateOfBirth)
    }

    async verifySuccessToastIsDisplayed() {
        await expect(this.successToast).toBeVisible()
    }

    async uploadFile(fileName: string) {
        await this.addButton.click()
        await this.fileInput.setInputFiles(FileUtils.getFilePath(fileName))
        await this.saveAttachmentButton.click();
    }

    async verifyUploadedFile(fileName: string) {
        await expect(this.page.getByText(fileName)).toBeVisible();
    }

    async clickSaveButton() {
        await this.waitForPageLoad()
        await this.saveButton.click()
    }

}