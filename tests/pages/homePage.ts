import { test, expect } from "@playwright/test";
import { Page } from "@playwright/test";

class homePage {
    private page: Page;
    private accountMenu;
    private login;

    constructor(page){
        this.page = page;
        this.accountMenu = page.locator("xpath=//span[contains(text(),'Account')]//parent::a");
        this.login = page.locator("xpath=//div[@class='links']/ul/li/a[contains(text(),'Log In')]");
    };

    async Navigate_to_home_page() {
        this.page.goto("http://live.techpanda.org/index.php/");
    }

    async Navigate_to_login_page() {
        this.accountMenu.click();
        this.login.click();
    }
}

export default homePage;