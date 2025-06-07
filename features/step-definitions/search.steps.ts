import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';

let searchPage: SearchPage;

When('I search for {string}', async function (product: string) {
  searchPage = new SearchPage(this.page);
  await searchPage.search(product);
});

Then('I should see {string} in results', async function (expected: string) {
  const result = await searchPage.verifySearchResult(expected);
  expect(result).toBeTruthy();
});
