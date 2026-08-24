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
}

export default LoginPage;
