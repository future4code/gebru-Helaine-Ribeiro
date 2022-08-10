import { user } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async insertUser(user: user): Promise<void> {
    await UserDatabase.connection
    .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
     })
      .into(UserDatabase.TABLE_NAME);
  }
} 
