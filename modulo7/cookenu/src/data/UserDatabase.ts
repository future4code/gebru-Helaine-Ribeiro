import { CustomError } from "../error/CustomError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public insertUser = async (user: user) => {
      try {
        await UserDatabase.connection
          .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            
          })
          .into("cookenu_users");
      } catch (error: any) {
        throw new CustomError(400, error.sqlMessage);
      }
    };
  
    public editUser = async (user: EditUserInput) => {
      try {
        await UserDatabase.connection
          .update({ name: user.name})
          .where({ id: user.id })
          .into("cookenu_users");
      } catch (error: any) {
        throw new CustomError(400, error.sqlMessage);
      }
    };
  
    public findUserByEmail = async (email: string) => {
      try {
        const result = await UserDatabase.connection("cookenu_users")
          .select()
          .where({email});
        return result[0];
      } catch (error: any) {
        throw new CustomError(400, error.sqlMessage);
      }
    };
    
    public getUserById = async (id: string) => {
      try {
        const result = await UserDatabase.connection("cookenu_users")
          .select()
          .where({id});
        return result[0];
      } catch (error: any) {
        throw new CustomError(400, error.sqlMessage);
      }
    };

    public selectUser = async (id: string) => {
        try {
            const result = await UserDatabase.connection("cookenu_users")
            .select()
            .where({id});
           
            } catch (error: any) {
                throw new CustomError(400, error.sqlMessage);
              }
    }
  
  
  }
  
      
       

function into(arg0: string) {
    throw new Error("Function not implemented.");
}
    