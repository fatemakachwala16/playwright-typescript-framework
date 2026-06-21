# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myInfo\myInfo.spec.ts >> My Info Page Tests >> Veriy that user is able to select the date of birth @regression
- Location: tests\myInfo\myInfo.spec.ts:47:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('input[placeholder="yyyy-dd-mm"]').last()
Expected: "1972-03-24"
Received: "1981-29-10"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('input[placeholder="yyyy-dd-mm"]').last()
    13 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--focus"/>
       - unexpected value "1981-29-10"

```

```yaml
- textbox "yyyy-dd-mm": 1981-29-10
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | import { Logger } from "../utils/logger";
  4  | import { FileUtils } from "../utils/fileUtils";
  5  | 
  6  | export class MyInfoPage extends BasePage {
  7  |   private readonly myInfoLocator: Locator;
  8  |   private readonly personalDetailsHeading: Locator;
  9  |   private readonly femaleRadio: Locator;
  10 |   private readonly maritalStatusDropdown: Locator;
  11 |   private readonly dateOfBirthInput: Locator;
  12 |   private readonly fileInput: Locator;
  13 |   private readonly saveAttachmentButton: Locator;
  14 |   private readonly saveButton: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 |     this.myInfoLocator = page.locator('a:has-text("My Info")');
  19 |     this.personalDetailsHeading = page.getByRole("heading", {
  20 |       name: "Personal Details",
  21 |     });
  22 |     this.femaleRadio = page.locator("label", { hasText: "Female" });
  23 |     this.maritalStatusDropdown = page.locator(".oxd-select-wrapper").last();
  24 |     this.dateOfBirthInput = page
  25 |       .locator('input[placeholder="yyyy-dd-mm"]')
  26 |       .last();
  27 |     this.fileInput = page.locator('input[type="file"]');
  28 |     this.saveAttachmentButton = page
  29 |       .getByRole("button", { name: "Save" })
  30 |       .last();
  31 |     this.saveButton = page
  32 |       .locator("form")
  33 |       .filter({ hasText: "Employee Full NameEmployee" })
  34 |       .getByRole("button");
  35 |   }
  36 | 
  37 |   async goToTheDashboardPage() {
  38 |     await this.page.goto("/web/index.php/dashboard/index");
  39 |   }
  40 | 
  41 |   async goToTheMyInfoPage() {
  42 |     await this.myInfoLocator.click();
  43 |   }
  44 | 
  45 |   async checkIfPersonalDetailsIsVisible() {
  46 |     await expect(this.personalDetailsHeading).toHaveText("Personal Details");
  47 |     await this.waitForPageLoad();
  48 |   }
  49 | 
  50 |   async updateFirstName(newFirstName: string) {
  51 |     Logger.info(`Updating first name to '${newFirstName}'`);
  52 |     await this.firstNameLocator().fill("");
  53 |     await this.firstNameLocator().fill(newFirstName);
  54 |     await expect(this.firstNameLocator()).toHaveValue(newFirstName);
  55 |     Logger.success("First name field updated successfully");
  56 |   }
  57 | 
  58 |   async updateLastName(newLastName: string) {
  59 |     Logger.info(`Updating last name to '${newLastName}'`);
  60 |     await this.lastNameLocator().fill("");
  61 |     await this.lastNameLocator().fill(newLastName);
  62 |     await expect(this.lastNameLocator()).toHaveValue(newLastName);
  63 |     Logger.success("Last name field updated successfully");
  64 |   }
  65 | 
  66 |   async checkRadioButton() {
  67 |     await this.femaleRadio.check();
  68 |     await expect(this.femaleRadio).toBeChecked();
  69 |   }
  70 | 
  71 |   async selectMaritalStatus(maritalStatus: string) {
  72 |     await this.maritalStatusDropdown.click();
  73 |     const option = this.page.locator(
  74 |       `.oxd-select-dropdown:has-text("${maritalStatus}")`,
  75 |     );
  76 |     await option.click();
  77 |   }
  78 | 
  79 |   async selectDateOfBirth(dateOfBirth: string) {
  80 |     await this.dateOfBirthInput.fill(dateOfBirth);
> 81 |     await expect(this.dateOfBirthInput).toHaveValue(dateOfBirth);
     |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  82 |   }
  83 | 
  84 |   async uploadFile(fileName: string) {
  85 |     await this.clickAddButton();
  86 |     await this.fileInput.setInputFiles(FileUtils.getFilePath(fileName));
  87 |     await this.saveAttachmentButton.click();
  88 |   }
  89 | 
  90 |   async verifyUploadedFile(fileName: string) {
  91 |     await expect(this.page.getByText(fileName)).toBeVisible();
  92 |   }
  93 | 
  94 |   async clickOnSaveButton() {
  95 |     await this.waitForPageLoad();
  96 |     await this.saveButton.click();
  97 |   }
  98 | }
  99 | 
```