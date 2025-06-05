import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SearchPage } from '../../pages/SearchPage';
import { customWorld } from '../../support/custom-world';

let loginPage: LoginPage;
let searchPage: SearchPage;

Given('I launch the browser', async function () {
  const { browser, context, page } = await customWorld();
  this.browser = browser;
  this.context = context;
  this.page = page;
  loginPage = new LoginPage(page);
  searchPage = new SearchPage(page);
});

When('I login with username {string} and password {string}', async function (username, password) {
  await loginPage.goto();
  await loginPage.login(username, password);
});

When('I search for {string}', async function (product: string) {
  await searchPage.search(product);
});

Then('I should see {string} in results', async function (expected: string) {
  const result = await searchPage.verifySearchResult(expected);
  expect(result).toBeTruthy();
});