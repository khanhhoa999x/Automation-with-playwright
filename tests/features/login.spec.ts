import { test, expect } from "@playwright/test";
import homePage from "../pages/homePage"

const users = require("../data/Users.json");
const validUserArray = users.validUser;
validUserArray.forEach((user) => {
  test("Should login with email `{$user.email}`", async ({ page }) => {
    await page.goto("http://live.techpanda.org/");
    await page.getByRole("link", { name: "Account", exact: true }).click();
    await page.getByRole("link", { name: "Log In" }).click();
    await page.getByLabel("*Email Address").click();
    await page.getByLabel("*Email Address").fill(user.email);
    await page.getByLabel("*Password").click();
    await page.getByLabel("*Password").fill(user.password);
    await page.getByRole("button", { name: "Login" }).click();
  });
});
