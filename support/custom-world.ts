import { Browser, BrowserContext, chromium, Page } from 'playwright';

export async function customWorld() {
  const browser: Browser = await chromium.launch();
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  return { browser, context, page };
}