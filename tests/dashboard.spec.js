import { test } from '@playwright/test';

import LoginPage from '../pages/pages/LoginPage.js';
import DashboardPage from '../pages/pages/DashboardPage.js';  

test('dashboard test with login + profile scroll', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
await page.setViewportSize({ width: 1536, height: 864 });
  // 1️⃣ Go to login page
  await page.goto('https://qa.jumprecruiter.com');

  // 2️⃣ Login
  await login.login('seeker@zudpck.com', 'test1234');

  // 3️⃣ Wait for dashboard
  await page.waitForURL(/dashboard/);

  // 4️⃣ Click My Profile
  await dashboard.myProfile();
  await dashboard.scrollProfileSection();
  // 5️⃣ Scroll down + up
  await dashboard.scrollProfileSection();

  // 6️⃣ Click Overview tab + scroll
  await dashboard.overviewtab();

  // 7️⃣ Click Applications tab + scroll
  await dashboard.applicationTab(); 

  // 8️⃣ Click Saved Jobs tab + scroll
  await dashboard.savedJobsTab();

  // 9️⃣ Click Job Alerts tab + scroll
  await dashboard.JobAlertsTab(); 

  // 1 click on settings tab and scroll
   await dashboard.settingstab();



});
