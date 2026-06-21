# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify My PIM page is displayed @regression @smoke
- Location: tests\PIM\pim.spec.ts:9:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has-text("PIM")')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | import { Logger } from "../utils/logger";
  4  | 
  5  | export class PIMPage extends BasePage {
  6  |   private readonly pimLocator: Locator;
  7  |   private readonly pimDetailLocator: Locator;
  8  |   private readonly addEmployeeDetailsLocator: Locator;
  9  |   private readonly loginToggle: Locator;
  10 |   private readonly userNameLabel: Locator;
  11 |   private readonly userNameLocator: Locator;
  12 |   private readonly passwordLocator: Locator;
  13 |   private readonly confirmPasswordLocator: Locator;
  14 |   private readonly saveButton: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 |     this.pimLocator = page.locator('a:has-text("PIM")');
  19 |     this.pimDetailLocator = page.getByRole("heading", {
  20 |       name: "Employee Information",
  21 |     });
  22 |     this.addEmployeeDetailsLocator = page.locator(
  23 |       'li:has-text("Add Employee")',
  24 |     );
  25 |     this.loginToggle = page.locator(".oxd-switch-wrapper");
  26 |     this.userNameLabel = page.getByText("Username");
  27 |     this.userNameLocator = page.locator(
  28 |       '//label[text()="Username"]/ancestor::div[contains(@class,"oxd-input-group")]//input',
  29 |     );
  30 |     this.passwordLocator = page.locator('[type="password"]').first();
  31 |     this.confirmPasswordLocator = page.locator('[type="password"]').last();
  32 |     this.saveButton = page.getByRole("button", { name: "Save" });
  33 |   }
  34 | 
  35 |   async goToThePIMPage() {
> 36 |     await this.pimLocator.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37 |   }
  38 | 
  39 |   async checkIfPIMDetailIsVisible() {
  40 |     await expect(this.pimDetailLocator).toBeVisible();
  41 |   }
  42 | 
  43 |   async addEmployeeDetails(
  44 |     firstName: string,
  45 |     lastName: string,
  46 |     userName: string,
  47 |     password: string,
  48 |     confirmPassword: string,
  49 |   ) {
  50 |     await expect(this.addEmployeeDetailsLocator).toBeVisible();
  51 |     await this.firstNameLocator().fill(firstName);
  52 |     Logger.info(`added first name to '${firstName}'`);
  53 |     await this.lastNameLocator().fill(lastName);
  54 |     Logger.info(`added last name to '${lastName}'`);
  55 |     await this.loginToggle.click();
  56 |     await expect(this.userNameLabel).toBeVisible();
  57 |     await this.userNameLocator.fill(userName);
  58 |     Logger.info(`added userName name to '${userName}'`);
  59 |     await this.passwordLocator.fill(password);
  60 |     Logger.info(`added password to '${password}'`);
  61 |     await this.confirmPasswordLocator.fill(confirmPassword);
  62 |     Logger.info(`added confirm password to '${confirmPassword}'`);
  63 |     await this.saveButton.click();
  64 |     await this.verifySuccessToastIsDisplayed();
  65 |   }
  66 | }
  67 | 
```