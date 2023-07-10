export class SwagUsers {
  static async getUser() {
    const user = {
      swagUser: "standard_user",
      swagPassword: "secret_sauce",
    };
    return user;
  }
}
