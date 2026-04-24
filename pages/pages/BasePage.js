class BasePage {
  constructor(page) {
    this.page = page;
  }

  // ===== BASIC ACTIONS =====
  async click(locator) {
    await this.page.locator(locator).click();
  }
  async setViewPort() {
    await this.page.setViewportSize({
      width: 1920,
      height: 1080
    });
  }
  async fill(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).innerText();
  }

  async waitForVisible(locator) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }

  // ===== SCROLL METHODS =====

  async scrollDown() {
    await this.page.evaluate(() => {
      window.scrollBy(0, document.body.scrollHeight);
    });
  }

  async scrollUp() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

  async scrollToElement(locator) {
    await this.page.locator(locator).scrollIntoViewIfNeeded();
  }
}

export default BasePage;