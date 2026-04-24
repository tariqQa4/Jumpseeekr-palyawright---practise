import HomePage from "../pages/pages/HomePage";
import { test } from "@playwright/test";
import LoginPage from "../pages/pages/LoginPage";

test('home page test', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.setViewportSize({ width: 1536, height: 864 });
    await homePage.goto();
    await homePage.homepagescroll();
    
});