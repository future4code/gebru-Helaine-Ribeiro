import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: User): Promise<void> {
    await UserDatabase.connection
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getName(),
        password: user.getPassword(),
      })
      .into(UserDatabase.TABLE_NAME);
  }
}
