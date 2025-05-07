import { test, expect } from '@playwright/test';

const STORYBOOK_URL = 'http://localhost:6006';

// test.describe('Visual Regression for All Stories', () => {
//   let storyIds: string[] = [];
//
//   // @ts-ignore
//   test.beforeAll(async () => {
//     const res = await fetch(`${STORYBOOK_URL}/index.json`);
//     const data = await res.json();
//     storyIds = Object.keys(data.entries);
//   });
//
//   for (const id of storyIds) {
//     // @ts-ignore
//     test(async ({ page }) => {
//       await page.goto(`${STORYBOOK_URL}/iframe.html?id=${id}`);
//       await expect(page).toHaveScreenshot(`${id}.png`);
//     });
//   }
// });


test('Visual Regression for All Stories', async ({ page }) => {

  const res = await fetch(`${STORYBOOK_URL}/index.json`);
  const data = await res.json();
  const storyIds = Object.keys(data.entries);

  for (const id of storyIds) {
      await page.goto(`${STORYBOOK_URL}/iframe.html?id=${id}`);
      await expect(page).toHaveScreenshot(`${id}.png`);
  }
});