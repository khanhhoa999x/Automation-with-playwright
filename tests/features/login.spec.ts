import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage";

const users = require("../data/Users.json");
const validUserArray = users.validUser;

validUserArray.forEach((user) => {
  test("Should login with email `{$user.email}`", async ({ page }) => {
    const HomePage = new homePage(page);
    await HomePage.Navigate_to_home_page();
    await HomePage.Navigate_to_login_page();
    await page.getByLabel("*Email Address").click();
    await page.getByLabel("*Email Address").fill(user.email);
    await page.getByLabel("*Password").click();
    await page.getByLabel("*Password").fill(user.password);
    await page.getByRole("button", { name: "Login" }).click();
  });
});
