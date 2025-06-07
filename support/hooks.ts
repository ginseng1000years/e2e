import { After, BeforeAll, AfterStep } from '@cucumber/cucumber';
import dotenv from 'dotenv';

dotenv.config();

BeforeAll(async function () {
  // Validate required environment variables
  const requiredEnvVars = ['TEST_USERNAME', 'TEST_PASSWORD'];
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
  // Additional context initialization can be added here
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
