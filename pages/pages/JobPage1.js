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

    await this.page.getByRole('button', { name: 'Apply Now' }).first().click();

    await this.page.waitForTimeout(1000);

    // =========================
    // Resume Upload Flow
    // =========================
const acceptBtn = this.page.getByRole('button', { name: /accept/i });

if (await acceptBtn.count() > 0 && await acceptBtn.isVisible()) {
  await acceptBtn.click();
}
await this.page.waitForTimeout(40000);
 await this.page
    .locator('input[value="apply-with-jump-recruiter-resume"]').click();
   await this.page.waitForTimeout(1000);

    // Click upload button (opens file input internally)
    await this.page.getByRole('button', { name: 'Upload Resume' }).click();

    // =========================
    // ✅ FILE PATH FIXED (utils/files)
    // =========================
    const filePath = path.resolve(
      process.cwd(),
      'utils/files/MUHAMMAD-TALHA-SHAFIQ-QA.docx'
    );

    // Upload file
    await this.page.locator('input[type="file"]').setInputFiles(filePath);

    // Next button
    await this.page.getByRole('button', { name: 'Next' }).click();

    // =========================
    // Screening question (safe handling)
    // =========================
    const textarea = this.page.locator('textarea');

    if (await textarea.count() > 0) {
      if (await textarea.first().isVisible()) {
        await textarea.first().fill('Test answer');
      }
    }
  }
}

export default JobPage1;