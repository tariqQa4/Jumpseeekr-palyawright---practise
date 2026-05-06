class SignupPage {
  constructor(page) {
    this.page = page;
    this.acceptBtn = 'button:has-text("Accept")';
  }

  async goto() {
    await this.page.goto('https://qa.jumprecruiter.com/');
  }

  async signup(email, password) {
    await this.page.getByRole('button', { name: 'Register' }).click();
    await this.page.locator('.MuiInputBase-root').first().click();
    await this.page.getByRole('textbox', { name: 'Type email address' }).click();
    await this.page.locator('.MuiInputBase-root').first().click();
    await this.page.getByRole('textbox', { name: 'Type email address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Your full name' }).click();
    await this.page.getByRole('textbox', { name: 'Your full name' }).fill('test');
    await this.page.getByRole('textbox', { name: 'Create a secure password' }).click();
    await this.page.getByRole('textbox', { name: 'Create a secure password' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Re-enter password' }).click();
    await this. page.getByRole('textbox', { name: 'Re-enter password' }).fill(password);
  
    await this.page.getByRole('checkbox', { name: 'I agree to the Terms of Use' }).check();
    await this.page.getByRole('button', { name: 'Create account' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('link', { name: 'Jump Recruiter Logo' }).click();
    await this.page.waitForTimeout(1000);
    // await this.page.getByRole('link', { name: 'Jobs', exact: true }).click();

      await this.page.waitForTimeout(1000);
  }
}

export default SignupPage;