
import BasePage from "./BasePage";
class JobPage  extends BasePage {
    constructor(page) {
      super(page);
      this.acceptBtn = 'button:has-text("Accept")';
       
    }

    async goto() {
      await this.page.goto('https://stagging.jumprecruiter.us/');
    await this.page.getByRole('link', { name: 'Jobs', exact: true }).click();
      await this.page.waitForTimeout(1000);
      this.scrollDown();
      await this.page.waitForTimeout(1000);
      this.scrollUp();
      await this.page.waitForTimeout(1000);


}

async jobsearch() {

        await this.page.getByPlaceholder('Search by Job, Keyword, or Company').fill('Software Engineer');
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Search Jobs' }).click(); 
        // add assertion to verify search results
        await this.page.waitForTimeout(3000);   

        // click on first job listing


}

async jobapply() {

   await page.locator('div.cursor-pointer').first().click();
     await this.page.waitForTimeout(1000);
   await this.scrollDown();
  
   await this.scrollUp();
 
await this.page.evaluate(() => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

await this.page.evaluate(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
  // click on apply now button
  await this.page.getByRole('button', { name: /apply now/i }).click();
  await this.page.waitForTimeout(1000); 



}

}

export default JobPage;