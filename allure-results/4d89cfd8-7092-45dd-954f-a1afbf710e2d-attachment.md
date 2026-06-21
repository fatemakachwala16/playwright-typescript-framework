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

Locator: getByText('Successfully Updated')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Successfully Updated')

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
- heading "Noah Rogahn" [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/255
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/255
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/255
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/255
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/255
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/255
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/255
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/255
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/255
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/255
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name": Noah
- textbox "Middle Name"
- textbox "Last Name": Rogahn
- separator
- text: Employee Id
- textbox: "9087"
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
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class BasePage {
  4  |   constructor(protected readonly page: Page) {}
  5  | 
  6  |   async waitForPageLoad() {
  7  |     await this.page.waitForLoadState("networkidle");
  8  |   }
  9  | 
  10 |   async clickAddButton() {
  11 |     await this.page.getByRole("button", { name: "Add" }).click();
  12 |   }
  13 | 
  14 |   firstNameLocator(): Locator {
  15 |     return this.page.locator('input[placeholder="First Name"]');
  16 |   }
  17 | 
  18 |   lastNameLocator(): Locator {
  19 |     return this.page.locator('input[placeholder="Last Name"]');
  20 |   }
  21 | 
  22 |   async verifySuccessToastIsDisplayed() {
> 23 |     await expect(this.page.getByText("Successfully Updated")).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  24 |   }
  25 | 
  26 | }
  27 | 
```