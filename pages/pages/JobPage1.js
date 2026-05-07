import path from 'path';

class JobPage1 {
  constructor(page) {
    this.page = page;
    this.acceptBtn = 'button:has-text("Accept")';
  }

  async openJob(jobId) {
    await this.page.goto(`https://qa.jumprecruiter.com/job-detail/${jobId}`);
  }

  async applyJob() {
    // await this.page.getByRole('button', { name: 'Accept' }).click();
    await this.page.getByRole('button', { name: 'Apply Now' }).first().click();

    await this.page.waitForTimeout(1000);

    // =========================
    // Resume Upload Flow
    // =========================


   await this.page.locator('div').filter({ hasText: /^Upload Your ResumeSelect and attach your own updated file\.$/ }).first().click();
   await this.page.waitForTimeout(1000);

    // Click upload button (opens file input internally)
    await this.page.getByRole('button', { name: 'Upload Resume' }).click();

    // =========================
    // ✅ FILE PATH FIXED (utils/files)
    // =========================
    const filePath = path.resolve(
      process.cwd(),
      'C:\\Users\\tariq\\Downloads\\Jumpseeekr palyawright   practise\\utils\\MUHAMMADTalha.docx'
    );

    // Upload file
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
    await this.page.waitForTimeout(4000);
    // Next button
    await this.page.getByRole('button', { name: 'Next' }).click();
    // await this.page.waitForTimeout(1000);

     await this.page.getByRole('button', { name: 'Next' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Submit' }).click();
      await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Back to job Search' }).click();
    // =========================a
    // Screening question (safe handling)
    // =========================
    // const textarea = this.page.locator('textarea');

    // if (await textarea.count() > 0) {
    //   if (await textarea.first().isVisible()) {
    //     await textarea.first().fill('Test answer');
    //   }
    // }
  }
}

export default JobPage1;