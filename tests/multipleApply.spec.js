import { test, expect } from '@playwright/test';
import SignupPage from '../pages/pages/SignupPage';
import JobPage1 from '../pages/pages/JobPage1';
import { generateRandomEmail } from '../utils/dataHelper';

test('Multiple users signup and apply job', async ({ browser }) => {

  const USERS_COUNT = 1;
  const PASSWORD = 'test1234';

  for (let i = 0; i < USERS_COUNT; i++) {

    const context = await browser.newContext();
    const page = await context.newPage();

    const signupPage = new SignupPage(page);
    const jobPage = new JobPage1(page);

    const email = generateRandomEmail();
    console.log(`User ${i + 1}: ${email}`);

    await page.setViewportSize({ width: 1536, height: 864 });

  
    let jobId = '899'; // fallback job id

    try {
      const response = await page.request.get(
        'https://qa.jumprecruiter.com/api/jobs'
      );

      console.log('API STATUS:', response.status());

      if (response.ok()) {
        const data = await response.json();

        const jobs = data?.data?.jobs;

        if (jobs && jobs.length > 0) {
          jobId = jobs[0].id;
          console.log('Job ID from API:', jobId);
        } else {
          console.log('No jobs found in API, using fallback');
        }
      } else {
        const text = await response.text();
        console.log('API FAILED RESPONSE:', text);
      }

    } catch (error) {
      console.log('API ERROR, using fallback jobId:', error.message);
    }

    // =========================
    // ✅ STEP 2: Signup
    // =========================
    await signupPage.goto();
    await signupPage.signup(email, PASSWORD);

    // =========================
    // ✅ STEP 3: Open Job + Apply
    // =========================
    await jobPage.openJob(jobId);
    await jobPage.applyJob();

    // await context.close();
  }
});