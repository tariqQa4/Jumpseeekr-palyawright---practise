import LoginPage from "../pages/pages/LoginPage";
import JobPage from "../pages/pages/JobPage";
import { test } from "@playwright/test";

test('job page test', async ({ page }) => {
    
    const login = new LoginPage(page);
    const jobpage = new JobPage(page);  
    await page.setViewportSize({ width: 1536, height: 864 });
    await login.goto();
    await login.login('seeker1@mailinator.com', 'Test@1234');  
    await jobpage.goto();
    await jobpage.jobsearch();






});
