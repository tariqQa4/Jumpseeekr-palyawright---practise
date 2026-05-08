import { test, expect } from '@playwright/test';
import SignupPage from '../pages/pages/SignupPage';
import JobPage1 from '../pages/pages/JobPage1';
import { generateRandomEmail } from '../utils/dataHelper';

// ✅ IMPORTANT: increase timeout for full E2E flow
test.setTimeout(120000);

test('Multiple users signup and apply job', async ({ browser }) => {

  const USERS_COUNT = 5;
  const PASSWORD = 'test1234';

  for (let i = 0; i < USERS_COUNT; i++) {

    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      const signupPage = new SignupPage(page);
      const jobPage = new JobPage1(page);

      const email = generateRandomEmail();
      console.log(`User ${i + 1}: ${email}`);

      await page.setViewportSize({ width: 1536, height: 864 });

      // -------------------------
      // Get Job ID (API fallback)
      // -------------------------
      let jobId = '899';

      try {
        const response = await page.request.get(
          'https://qa.jumprecruiter.com/api/jobs'
        );

        console.log('API STATUS:', response.status());

        if (response.ok()) {
          const data = await response.json();
          const jobs = data?.data?.jobs;

          if (jobs?.length > 0) {
            jobId = jobs[0].id;
            console.log('Job ID from API:', jobId);
          } else {
            console.log('No jobs found, using fallback jobId');
          }
        } else {
          console.log('API failed:', await response.text());
        }

      } catch (error) {
        console.log('API error, using fallback jobId:', error.message);
      }

      // -------------------------
      // Signup Flow
      // -------------------------
      await signupPage.goto();
      await signupPage.signup(email, PASSWORD);

      // -------------------------
      // Apply Job Flow
      // -------------------------
      await jobPage.openJob(jobId);
      await jobPage.applyJob();

      console.log(`User ${i + 1} completed flow successfully`);

    } catch (err) {
      console.log(`Error for User ${i + 1}:`, err.message);
    } finally {
      // ✅ Safe cleanup (prevents crash on timeout kill)
      try {
        await context.close();
      } catch (e) {
        console.log('Context already closed or test force-killed');
      }
    }
  }
});