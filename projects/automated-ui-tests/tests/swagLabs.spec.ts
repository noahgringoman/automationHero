import { test, expect, defineConfig } from "@playwright/test";
import { OpenPages } from "../src/pages/Open.page";
import { SwagUsers } from "../src/utilities/users";
test.describe("Swag UI Test- Project Organization, Locators, Methods, actions, implementation", () => {
  test("Unacceptable coded login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click(); // dbClick
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
  test("Login", async ({ page }) => {
    const openPages: OpenPages = new OpenPages(page);
    const user = await SwagUsers.getUser();
    await page.goto("/");

    // Login

    await openPages.LoginPage.swagLabsLogin(user);
    await expect(page).toHaveURL("/inventory.html");
  });
  // test("");
});
