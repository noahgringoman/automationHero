import { test, expect, defineConfig } from "@playwright/test";
import { OpenPages } from "../src/pages/Open.page";
import { SwagUsers } from "../src/utilities/users";
test.describe("Swag UI Test", () => {
  test("this", async ({ page }) => {
    const openPages: OpenPages = new OpenPages(page);
    const user = await SwagUsers.getUser()
    await page.goto("/");

    // Login

    // we this because the open pages will allow us to call the page, and method with its locators. Then we can pass the user into the method, where we have already defined which user we would want to use

    await openPages.LoginPage.swagLabsLogin(user)
  });
});
