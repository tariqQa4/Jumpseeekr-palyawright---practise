import BasePage from './BasePage.js';

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);

    this.myProfileBtn = page.getByRole('button', { name: /my profile/i });
  }

  // 1️⃣ click profile
  async myProfile() {
    await this.myProfileBtn.click();
  }

  // 2️⃣ scroll actions (CREATE THIS — missing in your code)
  async scrollProfileSection() {
    await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
  }

  async overviewtab() {
    await this.page.click('button:has-text("Overview")');
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
    await this.page.waitForTimeout(1000);
  }


  async applicationTab() {
    await this.page.click('button:has-text("Applications")');
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
    await this.page.waitForTimeout(1000);

    // Add assertions here to verify the Applications tab cclick on Applied job listing

    await this.page.click('text=Applied');
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
     await this.page.waitForTimeout(1000);    
  }

  async savedJobsTab() {
    await this.page.click('button:has-text("Saved Jobs")');
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    // await this.scrollUp();
    await this.page.waitForTimeout(1000);
    // await page.getByRole('button', { name: 'Apply Now' }).first().click();
    // await page.locator('button').filter({ hasText: /^Apply Now$/ }).click();
    // await page.locator('div').filter({ hasText: /^Upload Your ResumeSelect and attach your own updated file\.$/ }).first().click();
    // await page.getByRole('button', { name: 'Next' }).click();
    // await page.getByRole('button', { name: 'Back' }).click();
    // await page.getByRole('img').first().click();
    // await page.getByRole('link', { name: 'My Dashboard' }).click();
  }

 async JobAlertsTab() {
    await this.page.click('button:has-text("Job Alerts")');
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
    await this.page.waitForTimeout(1000);

    // create job alert
    await this.page.click('button:has-text("Create New Alert")');

   await this.page.getByPlaceholder('Select designation')
    .fill('QA Engineer');

  // await this.page.getByPlaceholder('Select location')
  //   .fill('New York');

  await this.page.getByRole('radio', { name: /daily/i }).click();

  await this.page.getByRole('button', { name: /set job alert/i }).click();

  await this.scrollDown();
  await this.page.waitForTimeout(1000);
  await this.scrollUp();
    // await this.cancelBtn.getByRole('button', { name: /cancel/i });
  }

  async settingstab() {
    await this.page.getByRole('button', { name: /settings/i }).click();
     await this.scrollDown();
    await this.page.waitForTimeout(1000);
    await this.scrollUp();
    // await this.page.waitForTimeout(1000);
    
  }
}


export default DashboardPage;