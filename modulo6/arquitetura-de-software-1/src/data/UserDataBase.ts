 import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

 export class UserDatabase extends BaseDatabase{
   
createUser = async (user: user):Promise<void> => { 

   try {
      await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      })

      .into('User_Arq');//nome da tabela
      
   } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
   }
   
} 
 } 
 
