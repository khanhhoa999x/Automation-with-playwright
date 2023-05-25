import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";

const users = require("../data/Users.json");
const validUserArray = users.validUser;

validUserArray.forEach((user) => {
  test("Should login with email `{$user.email}`", async ({ page }) => {
    const HomePage = new homePage(page);
    const LoginPage = new loginPage(page);
    await HomePage.Navigate_to_home_page();
    await HomePage.Navigate_to_login_page();
    await LoginPage.Type_email(user.email);
    await LoginPage.Type_password(user.password);
    await LoginPage.Click_login();
  });
});
