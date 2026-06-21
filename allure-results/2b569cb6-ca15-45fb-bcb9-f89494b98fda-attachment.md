# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify add employee details @regression
- Location: tests\PIM\pim.spec.ts:15:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: "Personal Details"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })

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
      - paragraph: mandaa user
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
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Phillip
- textbox "Middle Name"
- textbox "Last Name": Thiel
- text: Employee Id
- textbox: "4908"
- separator
- paragraph: Create Login Details
- checkbox [checked]
- text: Username*
- textbox: phillipthiel
- text: Status
- radio "Enabled" [checked]
- text: Enabled
- radio "Disabled"
- text: Disabled Strongest Password*
- textbox: b2dHng4VMBv5
- paragraph: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
- text: Confirm Password*
- textbox: b2dHng4VMBv5
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- text: 
- paragraph: Success
- paragraph: Successfully Saved
- button "×"
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
  23 |     await expect(this.page.getByText("Successfully Updated")).toBeVisible();
  24 |   }
  25 | 
  26 |   async verifyHeading(locator: Locator, expectedText: string) {
> 27 |     await expect(locator).toHaveText(expectedText);
     |                           ^ Error: expect(locator).toHaveText(expected) failed
  28 |   }
  29 | 
  30 | }
  31 | 
```