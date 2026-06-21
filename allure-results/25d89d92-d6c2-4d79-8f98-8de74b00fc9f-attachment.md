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
    - waiting for" https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/253" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/253"

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
              - paragraph [ref=e127]: robert12345 Rohan
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
    - generic [ref=e148]:
      - generic [ref=e149]:
        - generic [ref=e150]:
          - heading "Louise Lesch" [level=6] [ref=e152]
          - img "profile picture" [ref=e155] [cursor=pointer]
        - tablist [ref=e156]:
          - tab "Personal Details" [ref=e157]:
            - link "Personal Details" [ref=e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/253
          - tab "Contact Details" [ref=e159]:
            - link "Contact Details" [ref=e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/253
          - tab "Emergency Contacts" [ref=e161]:
            - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/253
          - tab "Dependents" [ref=e163]:
            - link "Dependents" [ref=e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/253
          - tab "Immigration" [ref=e165]:
            - link "Immigration" [ref=e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/253
          - tab "Job" [ref=e167]:
            - link "Job" [ref=e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/253
          - tab "Salary" [ref=e169]:
            - link "Salary" [ref=e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/253
          - tab "Report-to" [ref=e171]:
            - link "Report-to" [ref=e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/253
          - tab "Qualifications" [ref=e173]:
            - link "Qualifications" [ref=e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/253
          - tab "Memberships" [ref=e175]:
            - link "Memberships" [ref=e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/253
      - generic [ref=e177]:
        - generic [ref=e178]:
          - heading "Personal Details" [level=6] [ref=e179]
          - separator [ref=e180]
          - generic [ref=e181]:
            - generic [ref=e188]:
              - generic [ref=e190]: Employee Full Name*
              - generic [ref=e191]:
                - textbox "First Name" [ref=e194]: Louise
                - textbox "Middle Name" [ref=e197]
                - textbox "Last Name" [ref=e200]: Lesch
            - separator [ref=e201]
            - generic [ref=e202]:
              - generic [ref=e203]:
                - generic [ref=e205]:
                  - generic [ref=e207]: Employee Id
                  - textbox [ref=e209]: "9670"
                - generic [ref=e211]:
                  - generic [ref=e213]: Other Id
                  - textbox [ref=e215]
              - generic [ref=e216]:
                - generic [ref=e218]:
                  - generic [ref=e220]: Driver's License Number
                  - textbox [ref=e222]
                - generic [ref=e224]:
                  - generic [ref=e226]: License Expiry Date
                  - generic [ref=e229]:
                    - textbox "yyyy-dd-mm" [ref=e230]
                    - generic [ref=e231] [cursor=pointer]: 
            - separator [ref=e232]
            - generic [ref=e233]:
              - generic [ref=e234]:
                - generic [ref=e236]:
                  - generic [ref=e238]: Nationality
                  - generic [ref=e241] [cursor=pointer]:
                    - generic [ref=e242]: "-- Select --"
                    - generic [ref=e244]: 
                - generic [ref=e246]:
                  - generic [ref=e248]: Marital Status
                  - generic [ref=e251] [cursor=pointer]:
                    - generic [ref=e252]: "-- Select --"
                    - generic [ref=e254]: 
              - generic [ref=e255]:
                - generic [ref=e257]:
                  - generic [ref=e259]: Date of Birth
                  - generic [ref=e262]:
                    - textbox "yyyy-dd-mm" [ref=e263]
                    - generic [ref=e264] [cursor=pointer]: 
                - generic [ref=e266]:
                  - generic [ref=e268]: Gender
                  - generic [ref=e269]:
                    - generic [ref=e273] [cursor=pointer]:
                      - radio "Male" [ref=e274]
                      - text: Male
                    - generic [ref=e279] [cursor=pointer]:
                      - radio "Female" [ref=e280]
                      - text: Female
            - separator [ref=e282]
            - generic [ref=e283]:
              - paragraph [ref=e284]: "* Required"
              - button "Save" [ref=e285] [cursor=pointer]
        - generic [ref=e286]:
          - separator [ref=e287]
          - generic [ref=e288]:
            - heading "Custom Fields" [level=6] [ref=e289]
            - separator [ref=e290]
            - generic [ref=e291]:
              - generic [ref=e293]:
                - generic [ref=e295]:
                  - generic [ref=e297]: Blood Type
                  - generic [ref=e300] [cursor=pointer]:
                    - generic [ref=e301]: "-- Select --"
                    - generic [ref=e303]: 
                - generic [ref=e305]:
                  - generic [ref=e307]: Test_Field
                  - textbox [ref=e309]
              - separator [ref=e310]
              - button "Save" [ref=e312] [cursor=pointer]
        - generic [ref=e313]:
          - separator [ref=e314]
          - generic [ref=e316]:
            - heading "Attachments" [level=6] [ref=e317]
            - button " Add" [ref=e318] [cursor=pointer]:
              - generic [ref=e319]: 
              - text: Add
          - generic [ref=e320]:
            - separator [ref=e321]
            - generic [ref=e323]: No Records Found
          - table [ref=e325]:
            - rowgroup [ref=e326]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e327]:
                - columnheader "" [ref=e328]:
                  - generic [ref=e330] [cursor=pointer]:
                    - checkbox "" [ref=e331]
                    - generic [ref=e333]: 
                - columnheader "File Name" [ref=e334]
                - columnheader "Description" [ref=e335]
                - columnheader "Size" [ref=e336]
                - columnheader "Type" [ref=e337]
                - columnheader "Date Added" [ref=e338]
                - columnheader "Added By" [ref=e339]
                - columnheader "Actions" [ref=e340]
            - rowgroup
    - generic [ref=e341]:
      - paragraph [ref=e342]: OrangeHRM OS 5.8
      - paragraph [ref=e343]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e344] [cursor=pointer]:
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