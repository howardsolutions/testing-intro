import { test, expect } from '@playwright/test';

beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('it has a counter', async ({ page }) => {
  const count = await page.getByTestId('counter-count');
  const incrementBtn = await page.getByRole('button', { name: /increment/i });
  await incrementBtn.click();
});
