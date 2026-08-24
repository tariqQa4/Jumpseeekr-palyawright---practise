class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = 'input[type="email"]';
    this.password = 'input[type="password"]';
    this.signInBtn = '.login-submit-btn';
  }

  async goto() {
    await this.page.goto('https://stagging.jumprecruiter.us/');
    this.acceptBtn = 'button:has-text("Accept")';
    await this.page.click(this.acceptBtn);

  }

  async login(email, password) {

    await this.page.click('button:has-text("Sign in")');
   
  // Fill email
  await this.page.locator('input[name="email"]').fill(email);

  // Fill password
  await this.page.locator('input[name="password"]').fill(password);

  // Click Sign In
  await this.page.locator('.login-submit-btn').click();
  
  }

  // dashboard page
  async dashboard() {
    await this.page.goto('https://stagging.jumprecruiter.us/dashboard?tab=my-profile');

    // click on job alerts
    await this.page.getByRole('button', { name: 'Job Alerts' }).click();
await this.page.waitForTimeout(1000);
   

    // click on  saved jobs
  await this.page.getByRole('button', { name: 'Saved Jobs' }).click();

await this.page.waitForTimeout(1000);

    // click on  applications
    await this.page.getByRole('button', { name: 'Applications' }).click();
    await this.page.waitForTimeout(1000);
    // click on  overview
   await this.page.getByRole('button', { name: 'Overview' }).click();
await this.page.waitForTimeout(1000);
    // click on  settings
    await this.page.getByRole('button', { name: 'Settings' }).click();
await this.page.waitForTimeout(1000);
    // click on homepage /logo 
   await this.page.getByAltText('Jump Recruiter Logo').click();

  } 

}

export default LoginPage;
