import { Given, When } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';

let loginPage: LoginPage;

Given('I launch the browser', async function () {
  await this.launchBrowser();
  loginPage = new LoginPage(this.page);
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
