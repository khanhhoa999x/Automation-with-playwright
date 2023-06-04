import { expect, Locator, Page } from "@playwright/test";

export class loginPage {
    readonly page:Page;
    readonly emailTxtBox;
    readonly passwordTxtBox;
    readonly loginBttn;

    constructor(page: Page) {
        this.page = page;
        this.emailTxtBox = page.getByLabel("*Email Address");
        this.passwordTxtBox = page.getByLabel("*Password");
        this.loginBttn = page.getByRole("button", { name: "Login" });
    }
    
    async Type_email(email) {
        await this.emailTxtBox.click();
        await this.emailTxtBox.fill(email);
    }

    async Type_password(password) {
        await this.passwordTxtBox.click();
        await this.passwordTxtBox.fill(password);
    }

    async Click_login() {
        await this.loginBttn.click();
    }

    async Login_with_valid_user(email, password) {
        await this.Type_email(email);
        await this.Type_password(password);
        await this.Click_login();
    }
}