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
    await this.page.click('a:has-text("Job Alerts")');

    // click on profile
    await this.page.click('a:has-text("Profile")');

    // click on  saved jobs
    await this.page.click('a:has-text("Saved Jobs")');

    // click on  applications
    await this.page.click('a:has-text("Applications")');
    
    // click on  overview
    await this.page.click('a:has-text("Overview")');

    // click on  settings
    await this.page.click('a:has-text("Settings")');  


    // click on homepage /logo 
    await this.page.click('a:has-text("JumpRecruiter")');
    
  } 

}

export default LoginPage;
