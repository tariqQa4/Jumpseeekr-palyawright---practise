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
    await this.page.getByRole('textbox', { name: 'Your full name' }).fill('test Test');
    await this.page.getByRole('textbox', { name: 'Create a secure password' }).click();
    await this.page.getByRole('textbox', { name: 'Create a secure password' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Re-enter password' }).click();
    await this. page.getByRole('textbox', { name: 'Re-enter password' }).fill(password);
  
    await this.page.getByRole('checkbox', { name: 'I agree to the Terms of Use' }).check();
    await this.page.getByRole('button', { name: 'Create account' }).click();
    await this.page.waitForTimeout(2000);
     await this.page.getByRole('button', { name: 'Accept' }).click();
    await this.page.getByRole('button', { name: '👤 My Profile' }).click();

await this.page.getByPlaceholder('Select your designation').fill('Senior Associate');
await this.page.getByText('Senior Associate').click();
  
    await this.page.getByRole('textbox', { name: '1 (702) 123-' }).click();
   
    await this.page.getByRole('textbox', { name: '1 (702) 123-' }).fill('+1 702 123 4567');
    await this.page.getByRole('combobox', { name: 'Type your country' }).click();
    await this.page.getByRole('combobox', { name: 'Type your country' }).fill('pakistan');
    await this.page.getByRole('combobox', { name: 'Type your country' }).press('Enter');
    await this.page.getByText('Pakistan').click();
    await this.page.getByRole('combobox', { name: 'Type city, state, zip code' }).click();
    await this.page.getByText('Akutan, AK,').click();
    await this.page.locator('#basic-information').getByRole('button', { name: 'Save Changes' }).click();

    await this.page.waitForTimeout(2000);
    await this.page.getByRole('link', { name: 'Jump Recruiter Logo' }).click();
    await this.page.waitForTimeout(1000);
    // await this.page.getByRole('link', { name: 'Jobs', exact: true }).click();

      await this.page.waitForTimeout(1000);
  }
}

export default SignupPage;