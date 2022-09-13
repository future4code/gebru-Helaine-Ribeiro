import { user } from "../model/types";
import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
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
