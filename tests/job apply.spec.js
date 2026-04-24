import { test, expect } from '@playwright/test';
import LoginPage from '../pages/pages/LoginPage';
test('apply for job', async ({ page }) => {

    const login = new LoginPage(page);
     
    await page.setViewportSize({ width: 1536, height: 864 });
    await login.goto();
    await login.login('seeker@zudpck.com', 'test1234');  


 
//   await page.goto('https://qa.jumprecruiter.com/');
//   await page.getByRole('button', { name: 'x' }).click();
//   await page.getByRole('button', { name: 'Browse All 10,000+ Jobs →' }).click();
//   await page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).click();
//   await page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).fill('qa engineer');
//   await page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).click();
//   await page.getByRole('button', { name: 'Search Jobs' }).click();
//   await page.locator('.border.border-gray-700.rounded-\\[10px\\]').first().click();
//   await page.locator('button').filter({ hasText: /^Apply Now$/ }).click();
  
//  await page.getByRole('button', { name: 'Sign In' }).click();
//    await page.getByRole('textbox', { name: 'you@email.com' }).click();
//    await page.getByRole('textbox', { name: 'you@email.com' }).fill('seeker@zudpck.com');
//    await page.getByRole('textbox', { name: 'Type Password' }).click();
//    await page.getByRole('textbox', { name: 'Type Password' }).fill('test1234');

//    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
//    await page.getByRole('link', { name: 'Jobs', exact: true }).click();
//    await page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).click();
//    await page.getByRole('option', { name: 'Qa Engineer' }).click();
//    await page.getByRole('button', { name: 'Search Jobs' }).click();
//    await page.locator('.border.border-gray-700.rounded-\\[10px\\]').first().click();
//    await page.locator('button').filter({ hasText: /^Apply Now$/ }).click();

//    await page.waitForTimeout(1000);
//    await page.getByText('Jump Recruiter (Resume Profile)Your Profile Strength 100%Edit Profile').click();
//    await page.getByRole('button', { name: 'Next' }).click();
//    await page.getByRole('button', { name: 'Back' }).click();
//    await page.locator('div').filter({ hasText: /^Upload Your ResumeSelect and attach your own updated file\.$/ }).first().click();
//    await page.locator('div').filter({ hasText: /^M Talha Shafiq-QA-Resume-1 \(1\)\.pngUploaded on 12\/19\/25$/ }).first().click();
//    await page.getByRole('button', { name: 'Next' }).click();
//    await page.getByRole('button', { name: 'Back' }).click();
//    await page.getByRole('img').first().click();
  //  await page.getByLabel('Breadcrumb').getByRole('link', { name: 'Jobs' }).click();
  

 });