import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright';

class CustomWorld extends CucumberWorld {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page: Page | undefined;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launchBrowser() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }
}

setWorldConstructor(CustomWorld);