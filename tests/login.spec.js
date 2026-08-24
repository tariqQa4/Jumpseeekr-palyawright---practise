import { test, expect } from '@playwright/test';
import LoginPage from '../pages/pages/LoginPage.js';

test('login test', async ({ page }) => {
  const login = new LoginPage(page);
await page.setViewportSize({ width: 1536, height: 864 });
  await login.goto();
  await login.login('seeker1@mailinator.com', 'Test@1234');

  await expect(page).toHaveURL('https://stagging.jumprecruiter.us/dashboard?tab=my-profile');
    await page.waitForTimeout(1000);
  await login.dashboard();
});
