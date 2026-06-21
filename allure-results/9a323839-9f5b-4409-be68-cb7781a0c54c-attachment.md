# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify add employee details @regression
- Location: tests\PIM\pim.spec.ts:15:7

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
  13 |   private readonly employeeIDLocator: Locator;
  14 |   private readonly confirmPasswordLocator: Locator;
  15 |   private readonly saveButton: Locator;
  16 |   private readonly personalDetailsHeading: Locator;
  17 | 
  18 |   constructor(page: Page) {
  19 |     super(page);
  20 |     this.pimLocator = page.locator('a:has-text("PIM")');
  21 |     this.pimDetailLocator = page.getByRole("heading", {
  22 |       name: "Employee Information",
  23 |     });
  24 |     this.addEmployeeDetailsLocator = page.locator(
  25 |       'li:has-text("Add Employee")',
  26 |     );
  27 |     this.loginToggle = page.locator(".oxd-switch-wrapper");
  28 |     this.userNameLabel = page.getByText("Username");
  29 |     this.userNameLocator = page.locator(
  30 |       '//label[text()="Username"]/ancestor::div[contains(@class,"oxd-input-group")]//input',
  31 |     );
  32 |     this.passwordLocator = page.locator('[type="password"]').first();
  33 |     this.confirmPasswordLocator = page.locator('[type="password"]').last();
  34 |     this.saveButton = page.getByRole("button", { name: "Save" });
  35 |     this.employeeIDLocator = page.locator(".oxd-input").nth(4);
  36 |     this.personalDetailsHeading = page.getByRole("heading", {
  37 |       name: "Personal Details",
  38 |     });
  39 |   }
  40 | 
  41 |   async goToThePIMPage() {
> 42 |     await this.pimLocator.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |   }
  44 | 
  45 |   async checkIfPIMDetailIsVisible() {
  46 |     await expect(this.pimDetailLocator).toBeVisible();
  47 |   }
  48 | 
  49 |   async addEmployeeDetails(
  50 |     firstName: string,
  51 |     lastName: string,
  52 |     employeeID: number,
  53 |     userName: string,
  54 |     password: string,
  55 |     confirmPassword: string,
  56 |   ) {
  57 |     await expect(this.addEmployeeDetailsLocator).toBeVisible();
  58 |     await this.firstNameLocator().fill(firstName);
  59 |     Logger.info(`added first name to '${firstName}'`);
  60 |     await this.lastNameLocator().fill(lastName);
  61 |     Logger.info(`added last name to '${lastName}'`);
  62 |     await this.employeeIDLocator.fill(employeeID.toString());
  63 |     Logger.info(`added employee id to '${employeeID}'`);
  64 |     await this.loginToggle.click();
  65 |     await expect(this.userNameLabel).toBeVisible();
  66 |     await this.userNameLocator.fill(userName);
  67 |     Logger.info(`added userName name to '${userName}'`);
  68 |     await this.passwordLocator.fill(password);
  69 |     Logger.info(`added password to '${password}'`);
  70 |     await this.confirmPasswordLocator.fill(confirmPassword);
  71 |     Logger.info(`added confirm password to '${confirmPassword}'`);
  72 |     await this.saveButton.click();
  73 |     await this.verifyHeading(this.personalDetailsHeading, "Personal Details");
  74 |   }
  75 | }
  76 | 
```