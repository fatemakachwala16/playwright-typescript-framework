# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim.spec.ts >> My PIM Page Tests >> Verify add employee details @regression
- Location: tests\PIM\pim.spec.ts:15:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button') resolved to 4 elements:
    1) <input type="file" data-v-1b0f05a0="" class="oxd-file-input"/> aka getByRole('button', { name: 'Choose File' })
    2) <button role="none" type="button" data-v-f5c763eb="" data-v-91a700da="" class="oxd-icon-button oxd-icon-button--solid-main employee-image-action">…</button> aka getByRole('button').nth(4)
    3) <button type="button" data-v-10d463b7="" data-v-304890b0="" class="oxd-button oxd-button--medium oxd-button--ghost">…</button> aka getByRole('button', { name: 'Cancel' })
    4) <button type="submit" data-v-10d463b7="" data-v-304890b0="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button> aka getByRole('button', { name: 'Save' })

Call log:
  - waiting for locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: robert12345 user12345
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e147]:
      - heading "Add Employee" [level=6] [ref=e148]
      - separator [ref=e149]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]:
            - generic [ref=e154]:
              - button "Choose File"
              - generic [ref=e155]:
                - img "profile picture" [ref=e157]
                - button "" [ref=e158] [cursor=pointer]:
                  - generic [ref=e159]: 
            - paragraph [ref=e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e165]:
                - generic [ref=e167]: Employee Full Name*
                - generic [ref=e168]:
                  - textbox "First Name" [ref=e171]: Tricia
                  - textbox "Middle Name" [ref=e174]
                  - textbox "Last Name" [ref=e177]: Fritsch
              - generic [ref=e180]:
                - generic [ref=e182]: Employee Id
                - textbox [ref=e184]: "0423"
            - separator [ref=e185]
            - generic [ref=e186]:
              - paragraph [ref=e187]: Create Login Details
              - checkbox [checked] [ref=e190]
            - generic [ref=e193]:
              - generic [ref=e195]:
                - generic [ref=e197]: Username*
                - textbox [ref=e199]: triciafritsch
              - generic [ref=e201]:
                - generic [ref=e203]: Status
                - generic [ref=e204]:
                  - generic [ref=e208] [cursor=pointer]:
                    - radio "Enabled" [checked] [ref=e209]
                    - text: Enabled
                  - generic [ref=e214] [cursor=pointer]:
                    - radio "Disabled" [ref=e215]
                    - text: Disabled
            - generic [ref=e218]:
              - generic [ref=e219]:
                - generic [ref=e220]: Strongest
                - generic [ref=e221]:
                  - generic [ref=e223]: Password*
                  - textbox [ref=e225]: 253kfFPf0Mwn
                - paragraph [ref=e226]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=e228]:
                - generic [ref=e230]: Confirm Password*
                - textbox [active] [ref=e232]: 253kfFPf0Mwn
        - separator [ref=e233]
        - generic [ref=e234]:
          - paragraph [ref=e235]: "* Required"
          - button "Cancel" [ref=e236] [cursor=pointer]
          - button "Save" [ref=e237] [cursor=pointer]
    - generic [ref=e238]:
      - paragraph [ref=e239]: OrangeHRM OS 5.8
      - paragraph [ref=e240]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e241] [cursor=pointer]:
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
  23 |     await expect(this.page.getByText("Successfully Updated")).toBeVisible();
  24 |   }
  25 | 
  26 |   async clickOnSaveButton() {
  27 |     await this.waitForPageLoad()
  28 |     await this.page
  29 |       .locator("form")
  30 |       .filter({ hasText: "Employee Full NameEmployee" })
  31 |       .getByRole("button")
> 32 |       .click();
     |        ^ Error: locator.click: Error: strict mode violation: locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button') resolved to 4 elements:
  33 |   }
  34 | }
  35 | 
```