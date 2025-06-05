import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#input-email', username);
    await this.page.fill('#input-password', password);
    await this.page.click('input[value="Login"]');
  }
}