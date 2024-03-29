import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { user } from "../model/types";
import {UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/generateId";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
  constructor(private userDatabase:UserRepository){}
 
  public createUser = async (input: UserInputDTO) => {
    try {
      const { name,  email, password } = input;

      if (!name  || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = generateId();

      const user: user = {
        id,
        name,
        email,
        password,
      };
    
      await this.userDatabase.insertUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
} 
