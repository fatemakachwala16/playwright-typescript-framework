# 🚀 Enterprise Playwright TypeScript Automation Framework

An enterprise-grade test automation framework built using **Playwright** and **TypeScript**, following industry best practices such as the **Page Object Model (POM)**, **custom fixtures**, **storage state authentication**, **Allure reporting**, and **GitHub Actions CI/CD**.

---

# 📌 Features

- ✅ Playwright with TypeScript
- ✅ Page Object Model (POM)
- ✅ Reusable Base Page and Page Objects
- ✅ Custom Fixtures
- ✅ Storage State Authentication
- ✅ Dynamic Test Data using Faker
- ✅ Allure Reporting
- ✅ Screenshots, Videos & Traces on Failure
- ✅ GitHub Actions CI/CD Integration
- ✅ Reusable Utility Classes (Logger, FileUtils, DateUtils, etc.)
- ✅ Enterprise-Ready Framework Design

---

# 🏁 Getting Started

Follow the steps below to set up and run the framework on your local machine.

## 📋 Prerequisites

Ensure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- Git
- Visual Studio Code (recommended)

Verify the installations:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation

## 1. Clone the repository

```bash
git clone https://github.com/fatemakachwala16/playwright-typescript-framework.git
```

## 2. Navigate to the project directory

```bash
cd playwright-typescript-framework
```

## 3. Install dependencies

```bash
npm install
```

## 4. Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running the Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run tests in Playwright UI mode

```bash
npm run test:ui
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Run tests on Chromium

```bash
npm run test:chromium
```

### Run a specific test file

```bash
npx playwright test tests/myInfo/myInfo.spec.ts
```

---

# 📊 Reporting

### Open Playwright HTML Report

```bash
npm run report
```

### Generate Allure Report

```bash
npm run allure:generate
```

### Open Allure Report

```bash
npm run allure:open
```

### Generate and Serve Allure Report

```bash
npm run allure:serve
```

---

# 🧪 High-Level Test Scenarios

### Authentication
- Login with valid credentials
- Login with invalid credentials
- Required field validation
- Logout functionality

### My Info
- Update employee personal details
- Verify gender selection
- Verify marital status update
- Update date of birth
- Upload attachments
- Verify success notifications
- Verify data persistence after updates

### Framework Capabilities
- Storage State Authentication
- Dynamic Test Data Generation
- Reusable Fixtures and Utilities
- Screenshot, Video, and Trace Capture
- Cross-browser execution support
- CI/CD execution using GitHub Actions

---

# 🚀 Continuous Integration

The framework is integrated with **GitHub Actions** to automatically execute Playwright tests as part of the CI/CD pipeline.

---

# 👩‍💻 Author

**Fatema Kachwala**

## Disclaimer
This repository demonstrates a Playwright + TypeScript automation framework using the publicly available OrangeHRM demo application for educational and portfolio purposes.
