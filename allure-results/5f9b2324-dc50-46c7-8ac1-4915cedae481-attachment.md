# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify add employee details @regression
- Location: tests\PIM\pim.spec.ts:15:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Employee List' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Employee List' })
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/258" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/258"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: robert12345 Rohan
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Brooks Toy" [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/258
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/258
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/258
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/258
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/258
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/258
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/258
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/258
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/258
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/258
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name": Brooks
- textbox "Middle Name"
- textbox "Last Name": Toy
- separator
- text: Employee Id
- textbox: "4248"
- text: Other Id
- textbox
- text: Driver's License Number
- textbox
- text: License Expiry Date
- textbox "yyyy-dd-mm"
- text: 
- separator
- text: Nationality -- Select --  Marital Status -- Select --  Date of Birth
- textbox "yyyy-dd-mm"
- text:  Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- separator
- paragraph: "* Required"
- button "Save"
- separator
- heading "Custom Fields" [level=6]
- separator
- text: Blood Type -- Select --  Test_Field
- textbox
- separator
- button "Save"
- separator
- heading "Attachments" [level=6]
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " File Name Description Size Type Date Added Added By Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "File Name"
      - columnheader "Description"
      - columnheader "Size"
      - columnheader "Type"
      - columnheader "Date Added"
      - columnheader "Added By"
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  16 | 
  17 |   constructor(page: Page) {
  18 |     super(page);
  19 |     this.pimLocator = page.locator('a:has-text("PIM")');
  20 |     this.pimDetailLocator = page.getByRole("heading", {
  21 |       name: "Employee Information",
  22 |     });
  23 |     this.addEmployeeDetailsLocator = page.locator(
  24 |       'li:has-text("Add Employee")',
  25 |     );
  26 |     this.loginToggle = page.locator(".oxd-switch-wrapper");
  27 |     this.userNameLabel = page.getByText("Username");
  28 |     this.userNameLocator = page.locator(
  29 |       '//label[text()="Username"]/ancestor::div[contains(@class,"oxd-input-group")]//input',
  30 |     );
  31 |     this.passwordLocator = page.locator('[type="password"]').first();
  32 |     this.confirmPasswordLocator = page.locator('[type="password"]').last();
  33 |     this.saveButton = page.getByRole("button", { name: "Save" });
  34 |     this.employeeIDLocator = page.locator(".oxd-input").nth(4);
  35 |   }
  36 | 
  37 |   async goToThePIMPage() {
  38 |     await this.pimLocator.click();
  39 |   }
  40 | 
  41 |   async checkIfPIMDetailIsVisible() {
  42 |     await expect(this.pimDetailLocator).toBeVisible();
  43 |   }
  44 | 
  45 |   async addEmployeeDetails(
  46 |     firstName: string,
  47 |     lastName: string,
  48 |     employeeID: number,
  49 |     userName: string,
  50 |     password: string,
  51 |     confirmPassword: string,
  52 |   ) {
  53 |     await expect(this.addEmployeeDetailsLocator).toBeVisible();
  54 |     await this.firstNameLocator().fill(firstName);
  55 |     Logger.info(`added first name to '${firstName}'`);
  56 |     await this.lastNameLocator().fill(lastName);
  57 |     Logger.info(`added last name to '${lastName}'`);
  58 |     await this.employeeIDLocator.fill(employeeID.toString());
  59 |     Logger.info(`added employee id to '${employeeID}'`);
  60 |     await this.loginToggle.click();
  61 |     await expect(this.userNameLabel).toBeVisible();
  62 |     await this.userNameLocator.fill(userName);
  63 |     Logger.info(`added userName name to '${userName}'`);
  64 |     await this.passwordLocator.fill(password);
  65 |     Logger.info(`added password to '${password}'`);
  66 |     await this.confirmPasswordLocator.fill(confirmPassword);
  67 |     Logger.info(`added confirm password to '${confirmPassword}'`);
  68 |     await this.saveButton.click();
  69 |     await expect(this.page.getByText("Successfully saved")).toBeVisible();
  70 |     await expect(
  71 |       this.page.getByRole("heading", {
  72 |         name: "Employee List",
  73 |       }),
> 74 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  75 |   }
  76 | }
  77 | 
```