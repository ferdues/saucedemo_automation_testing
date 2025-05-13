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

Use it to generate the Allure report and open it in your browser.

## Project Structure

saucedemo_automation_testing/
│
├── allure-report/         			# Contains generated Allure test reports (HTML format) for visualizing test results
│
├── allure-results/        			# Stores raw Allure report data generated during test execution
│
├── specs/                 			# Test specification files (written in JavaScript with WebdriverIO)
│   ├── filterproduct.spec.js       # Tests login with valid user for product filtering functionality and varifiying products name and total price
│   ├── lockeduserlogin.spec.js     # Tests for locked user login scenarios and varifiying the error message
│   └── purchase.spec.js            # Tests login with valid user for product purchase workflow and varifiying products name and totoal price
│
├── test/                  			# Contains test implementation files (Page Objects and Actions)
│   ├── filterProductPurchase/      # Filtering and purchase test components
│   │   ├── filterObjects.js        # Page objects/elements for product filtering and purchase
│   │   └── filterActions.js        # Action methods for product filtering and purchase
│   │
│   ├── login/                      # Login test components
│   │   ├── loginActions.js         # Methods for login actions (e.g., enter credentials)
│   │   └── loginObjects.js         # Page objects for login page elements
│   │
│   ├── purchase/                   # Purchase test components
│   │   ├── purchaseActions.js      # Methods for purchase actions (checkout, etc.)
│   │   └── purchaseObjects.js      # Page objects for purchase flow elements
│   │
│   └── reset_app_state/            # Reset app state components
│       ├── rasActions.js           # Methods to reset application state
│       └── rasObjects.js           # Page objects for reset functionality
│
├── .gitignore             		    # Specifies files/directories to exclude from version control (e.g., node_modules/, package-lock.json)
├── package.json           		    # Defines project metadata, dependencies, and scripts (npm configuration)
├── README.md              		    # Project documentation (setup instructions, usage, etc.)
└── wdio.conf.js           		    # WebdriverIO configuration file (test runner settings, capabilities, suites etc.)

## Configuration

All test and browser configurations are in `wdio.conf.js`.