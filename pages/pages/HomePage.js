import BasePage from "./BasePage";
class HomePage  extends BasePage {
  constructor(page) {
    super(page);
    this.acceptBtn = 'button:has-text("Accept")';
  }

  async goto() {
    await this.page.goto('https://stagging.jumprecruiter.us/');
    await this.page.waitForTimeout(1000);
    await this.page.mouse.wheel(0, 2500);


    // ✅ scroll bottom
    await this.page.evaluate(() => {
      
      window.scrollTo(0, document.body.scrollHeight);
    });

    await this.page.waitForTimeout(1000);

    // ✅ scroll top
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    await this.page.click(this.acceptBtn);
  }

  async homepagescroll() {
    await this.page.mouse.wheel(0, 1000);
    // ✅ scroll bottom
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }); 
        await this.page.waitForTimeout(1000);   
    // ✅ scroll top
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);l
    });
        await this.page.waitForTimeout(1000);   
  }
}

export default HomePage;