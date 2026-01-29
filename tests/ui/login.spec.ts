
import { test, expect } from '@playwright/test';

test('sample login page open', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Reqres/);
});
