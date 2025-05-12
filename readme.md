# SauceDemo Automation Testing

[SauceDemo Website URL](https://www.saucedemo.com)

## Tools Needs

- [WebdriverIO](https://webdriver.io/)
- Mocha test framework
- Allure for reporting

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ferdues/saucedemo_automation_testing.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can run various test suites using the predefined npm scripts.

### Run all specs in one tab:
```bash
npm run AllSpecsOneTab
```

### Run all specs in separate browsers:
```bash
npm run AllSpecsSeparateBrowser
```

### Specific Suites:

1. Locked user tests:
  ```bash
  npm run LockUser
  ```

2. No filter product tests:
  ```bash
  npm run NoFilterProduct
  ```

3. Filter product tests:
  ```bash
  npm run FilterProduct
  ```

## Generating and Viewing the Report

After test execution:

```bash
npm run getReport
```

This will generate the Allure report and open it in your default browser.

## Configuration

All test and browser configurations are in `wdio.conf.js`.