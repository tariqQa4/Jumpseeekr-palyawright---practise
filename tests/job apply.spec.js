import { test, expect } from '@playwright/test';
import LoginPage from '../pages/pages/LoginPage';
test('apply for job', async ({ page }) => {

    const login = new LoginPage(page);
     
    await page.setViewportSize({ width: 1536, height: 864 });
    await login.goto();
    await login.login('seeker@zudpck.com', 'test1234');  


  

 });