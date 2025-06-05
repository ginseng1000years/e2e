import { After, Before } from '@cucumber/cucumber';

Before(async function () {
  // Can add context init here if needed
});

After(async function () {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});