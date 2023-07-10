import { Page } from "@playwright/test";
import { LoginPage } from "./Login.page";

export class OpenPages {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get LoginPage(){
    return new this.LoginPage(this.page);
  }


}
