# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify add employee details @regression
- Location: tests\PIM\pim.spec.ts:14:9

# Error details

```
Test timeout of 120000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 120000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", waiting until "load"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test"
  2  | import { BasePage } from "./BasePage"
  3  | import { Logger } from '../utils/logger'
  4  | import { FileUtils } from "../utils/fileUtils"
  5  | 
  6  | export class MyInfoPage extends BasePage {
  7  |     private readonly myInfoLocator: Locator
  8  |     private readonly personalDetailsHeading: Locator
  9  |     private readonly firstName: Locator
  10 |     private readonly lastName: Locator
  11 |     private readonly femaleRadio: Locator
  12 |     private readonly maritalStatusDropdown: Locator
  13 |     private readonly dateOfBirthInput: Locator
  14 |     private readonly successToast: Locator
  15 |     private readonly saveButton: Locator
  16 |     private readonly fileInput: Locator
  17 |     private readonly saveAttachmentButton: Locator
  18 | 
  19 |     constructor(page: Page) {
  20 |         super(page)
  21 |         this.myInfoLocator = page.locator('a:has-text("My Info")')
  22 |         this.personalDetailsHeading = page.getByRole('heading', { name: 'Personal Details' })
  23 |         this.firstName = page.locator('input[placeholder="First Name"]')
  24 |         this.lastName = page.locator('input[placeholder="Last Name"]')
  25 |         this.femaleRadio = page.locator('label', { hasText: 'Female' });
  26 |         this.maritalStatusDropdown = page.locator('.oxd-select-wrapper').last()
  27 |         this.dateOfBirthInput = page.locator('input[placeholder="yyyy-dd-mm"]').last()
  28 |         this.successToast = page.getByText('Successfully Updated')
  29 |         this.saveButton = page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button')
  30 |         this.fileInput = page.locator('input[type="file"]')
  31 |         this.saveAttachmentButton = page.getByRole('button', { name: 'Save' }).last()
  32 |     }
  33 | 
  34 |     async goToTheDashboardPage() {
  35 |         await this.page.goto('/web/index.php/dashboard/index')
  36 |     }
> 37 | 
     |                         ^ Error: page.goto: Test timeout of 120000ms exceeded.
  38 |     async goToTheMyInfoPage() {
  39 |         await this.myInfoLocator.click()
  40 |     }
  41 | 
  42 |     async checkIfPersonalDetailsIsVisible() {
  43 |         await expect(this.personalDetailsHeading).toHaveText('Personal Details')
  44 |         await this.waitForPageLoad()
  45 |     }
  46 | 
  47 |     async updateFirstName(newFirstName: string) {
  48 |         Logger.info(`Updating first name to '${newFirstName}'`)
  49 |         await this.firstName.fill('')
  50 |         await this.firstName.fill(newFirstName)
  51 |         await expect(this.firstName).toHaveValue(newFirstName)
  52 |         Logger.success('First name field updated successfully');
  53 |     }
  54 | 
  55 |     async updateLastName(newLastName: string) {
  56 |         Logger.info(`Updating last name to '${newLastName}'`)
  57 |         await this.lastName.fill('')
  58 |         await this.lastName.fill(newLastName)
  59 |         await expect(this.lastName).toHaveValue(newLastName)
  60 |         Logger.success('Last name field updated successfully');
  61 |     }
  62 | 
  63 |     async checkRadioButton() {
  64 |         await this.femaleRadio.check()
  65 |         await expect(this.femaleRadio).toBeChecked()
  66 |     }
  67 | 
  68 |     async selectMaritalStatus(maritalStatus: string) {
  69 |         await this.maritalStatusDropdown.click()
  70 |         const option = this.page.locator(`.oxd-select-dropdown:has-text("${maritalStatus}")`)
  71 |         await option.click()
  72 |     }
  73 | 
  74 |     async selectDateOfBirth(dateOfBirth: string) {
  75 |         await this.dateOfBirthInput.fill(dateOfBirth)
  76 |         await expect(this.dateOfBirthInput).toHaveValue(dateOfBirth)
  77 |     }
  78 | 
  79 |     async verifySuccessToastIsDisplayed() {
  80 |         await expect(this.successToast).toBeVisible()
  81 |     }
  82 | 
  83 |     async uploadFile(fileName: string) {
  84 |         await this.clickAddButton()
  85 |         await this.fileInput.setInputFiles(FileUtils.getFilePath(fileName))
  86 |         await this.saveAttachmentButton.click();
  87 |     }
  88 | 
  89 |     async verifyUploadedFile(fileName: string) {
  90 |         await expect(this.page.getByText(fileName)).toBeVisible();
  91 |     }
  92 | 
  93 |     async clickSaveButton() {
  94 |         await this.waitForPageLoad()
  95 |         await this.saveButton.click()
  96 |     }
  97 | 
  98 | }
```