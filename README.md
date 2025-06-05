# BDD Playwright Framework

A boilerplate framework for end-to-end (E2E) testing using [Playwright](https://playwright.dev/) and [Cucumber.js](https://github.com/cucumber/cucumber-js) with TypeScript. This project enables Behavior-Driven Development (BDD) for web applications, supporting feature files, step definitions, and page object models.

## Features
- **Playwright** for fast, reliable browser automation
- **Cucumber.js** for BDD-style feature files and step definitions
- **TypeScript** for type safety and modern JavaScript features
- **Page Object Model** for maintainable test code
- **Custom World & Hooks** for browser/context/page management
- **Headless/Headed execution**
- **Test timing utility**

## Project Structure
```
├── features/
│   ├── login.feature           # Example feature file
│   └── step-definitions/      # Step definitions for features
├── pages/                     # Page Object Model classes
│   ├── LoginPage.ts
│   └── SearchPage.ts
├── support/                   # Custom world and hooks
│   ├── custom-world.ts
│   └── hooks.ts
├── timed-test.ts              # Utility to time test runs
├── cucumber.js                # Cucumber configuration
├── cucumber.config.ts         # Cucumber timeout config
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project metadata and scripts
```

## Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Project requirements:**
   - Node.js >= 14
   - npm >= 6

## Usage
- **Run tests (headless):**
  ```bash
  npm test
  ```
- **Run tests (headed):**
  ```bash
  npm run test:headed
  ```
- **Run tests with timing:**
  ```bash
  npm run test:timed
  ```

## Example Feature
```
Feature: Login and Search
  Scenario: Login and search MacBook
    Given I launch the browser
    When I login with username "septbatch2024@open.com" and password "Selenium@12345"
    And I search for "Macbook"
    Then I should see "MacBook Pro" in results
```

## Writing Tests
- Add `.feature` files in the `features/` directory.
- Implement step definitions in `features/step-definitions/`.
- Add or update page objects in `pages/`.
- Use hooks and custom world in `support/` for setup/teardown.

## Scripts
- `npm test` - Run all tests (headless)
- `npm run test:headed` - Run tests in headed mode
- `npm run test:timed` - Run tests and print total execution time

## License
MIT 