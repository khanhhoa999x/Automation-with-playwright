import { expect, Locator, Page } from '@playwright/test';

export class homePage {
    readonly page: Page;
    readonly accountMenu;
    readonly loginLink;

    constructor(page: Page){
        this.page = page;
        this.accountMenu = page.locator("xpath=//span[contains(text(),'Account')]//parent::a");
        this.loginLink = page.locator("xpath=//div[@class='links']/ul/li/a[contains(text(),'Log In')]");
    };

    async Navigate_to_home_page() {
        await this.page.goto("http://live.techpanda.org/index.php/");
    }

    async Navigate_to_login_page() {
        await this.accountMenu.click();
        await this.loginLink.click();
    }
}
