import { After, Before, AfterStep } from '@cucumber/cucumber';
import dotenv from 'dotenv';

dotenv.config();

Before(async function () {
  // Can add context init here if needed
});

AfterStep(async function ({ result }) {
  const screenshotAllSteps = process.env.SCREENSHOT_ALL_STEPS === 'true';
  const isFailed = result?.status === 'FAILED';
  if (this.page && (screenshotAllSteps || isFailed)) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
});

After(async function () {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});