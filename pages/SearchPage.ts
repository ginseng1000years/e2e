import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async search(product: string) {
    await this.page.fill('input[name="search"]', product);
    await this.page.click('button[class*="btn-default"]');
  }

  async verifySearchResult(expected: string): Promise<boolean> {
    return this.page.locator(`//div[contains(@class, "caption")]//h4/a[text()="${expected}"]`).isVisible();
  }
}