import { test, expect } from '@playwright/test';
import LoginPage from '../pages/pages/LoginPage';
import jobapplyflowPage from '../pages/pages/JobapplyPage';
test('apply for job', async ({ page }) => {

    const login = new LoginPage(page);
    const jobapply = new JobapplyPage(page);

    await page.setViewportSize({ width: 1536, height: 864 });
    await login.goto();
    await login.login('seeker@zudpck.com', 'test1234');
    await jobapply.goto();





});