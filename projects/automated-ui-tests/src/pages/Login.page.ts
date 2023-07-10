import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Get Elmenets


  // Id

  swagUsernameId() {
    return this.page.locator("#user-name");
  }

  // data-test

  swagUsername() {
    return this.page.getByTestId("username");
  }

  // label

  swagUsernameLabel() {
    return this.page.getByLabel("username");
  }

  // role

  swagUsernameRole() {
    return this.page.getByRole("textbox", { name: "text" });
  }

  swagPassword(){
    return this.page.getByTestId('password')

  }

  


}
