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

## Environment Variables (.env)

Sensitive data such as usernames and passwords should not be hardcoded in feature files or committed to version control. This framework uses a `.env` file to securely manage such environment variables.

1. **Create a `.env` file in the project root:**
   ```env
   TEST_USERNAME=your_username_here
   TEST_PASSWORD=your_password_here
   ```
2. **Do not commit `.env` to version control.** The `.env` file should be listed in your `.gitignore`.
3. **How it works:** The framework automatically loads variables from `.env` at runtime using the `dotenv` package. These variables are accessible in your step definitions via `process.env.TEST_USERNAME` and `process.env.TEST_PASSWORD`.

## Docker Deployment

This project supports running tests and serving reports using Docker. There are two main ways to deploy with Docker:

### 1. Using the Root Dockerfile

Build the Docker image:

```bash
docker build -t bdd-playwright-framework .
```

Run the container (this will execute the tests):

```bash
docker run --rm bdd-playwright-framework
```

### 2. Using Docker Compose with Deployment Dockerfile

The `deployment/docker-compose.yml` file defines a service that builds from the `deployment/Dockerfile`. This setup runs tests, sets environment variables, and serves the test report on port 8080.

To build and start the service:

```bash
docker-compose -f deployment/docker-compose.yml up --build --remove-orphans
```

The service exposes port `8080` on the host, which you can access to view the test report.

### Notes

- The deployment Dockerfile uses an entrypoint script (`deployment/entrypoint.sh`) to run tests and serve the report.
- Environment variables for test credentials are set in the `docker-compose.yml` file but can be customized as needed.
- Ensure Docker and Docker Compose are installed on your system before running these commands.

## License
MIT
