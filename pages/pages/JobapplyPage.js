class JobapplyPage{
    constructor(page) {
        this.page = page;
    }

    async applyJob() {
        await this.page.goto('https://qa.jumprecruiter.com/');
        // await this.page.getByRole('button', { name: 'x' }).click();
        await this.page.getByRole('link', { name: 'Jobs', exact: true }).click();
            await this.page.waitForTimeout(1000);

            await this.page.getByRole('button', { name: 'Sign In' }).click();
            await this.page.getByRole('textbox', { name: 'you@email.com' }).click();
            await this.page.getByRole('textbox', { name: 'you@email.com' }).fill('seeker@zudpck.com');
            await this.page.locator('.MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiFilledInput-adornedEnd').click();
            await this.page.getByRole('textbox', { name: 'Type Password' }).fill('test1234');
            await this.page.locator('form').getByRole('button', { name: 'Sign In' }).click();
            await this.page.getByRole('link', { name: 'Jobs', exact: true }).click();
            await this.page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).click();
            await this.page.getByRole('combobox', { name: 'Search by Job, Keyword, or' }).fill('qa engineer');
            await this.page.getByRole('button', { name: 'Search Jobs' }).click();
            await this.page.locator('.border.border-gray-700.rounded-md').first().click();
            await this.page.getByRole('button', { name: 'Apply Now' }).first().click();
            await this.page.locator('div').filter({ hasText: /^Upload Your ResumeSelect and attach your own updated file\.$/ }).first().click();
            await this.page.getByRole('button', { name: 'Next' }).click();
            await this.page.getByRole('button', { name: 'Back' }).click();
            await this.page.locator('.cursor-pointer > path').first().click();
            await this.page.waitForTimeout(1000);
            await this.page.getByRole('link', { name: 'My Dashboard' }).click();
      

       

        await this.page.waitForTimeout(1000);
        // await this.page.getByText('Jump Recruiter (Resume Profile)Your Profile Strength 100%Edit Profile').click();
        // await this.page.getByRole('button', { name: 'Next' }).click();
        // await this.page.getByRole('button', { name: 'Back' }).click();
        // await this.page.locator('div').filter({ hasText: /^Upload Your ResumeSelect and attach your own updated file\.$/ }).first().click();
        // await this.page.locator('div').filter({ hasText: /^M Talha Shafiq-QA-Resume-1 \(1\)\.pngUploaded on 12\/19\/25$/ }).first().click();
        // await this.page.getByRole('button', { name: 'Next' }).click();
        // await this.page.getByRole('button', { name: 'Back' }).click();
        // await this.page.getByRole('img').first().click();
    }

}

export default JobapplyPage;