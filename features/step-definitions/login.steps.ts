import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SearchPage } from '../../pages/SearchPage';

let loginPage: LoginPage;
let searchPage: SearchPage;

Given('I launch the browser', async function () {
  await this.launchBrowser();
  loginPage = new LoginPage(this.page);
  searchPage = new SearchPage(this.page);
});

When('I login with valid credentials', async function () {
  await loginPage.goto();
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;
  if (!username || !password) {
    throw new Error('Missing TEST_USERNAME or TEST_PASSWORD environment variables');
  }
  await loginPage.login(username, password);
});

When('I search for {string}', async function (product: string) {
  await searchPage.search(product);
});

Then('I should see {string} in results', async function (expected: string) {
  const result = await searchPage.verifySearchResult(expected);
  expect(result).toBeTruthy();
});