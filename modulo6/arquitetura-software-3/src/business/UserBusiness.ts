import { UserDatabase } from "../data/UserDatabase"
import { CustomError, InvalidName } from "../error/CustomError";
//import { v4 as generateId } from 'uuid'
import { generateId } from "../services/generateId";
import { User } from "../model/User"
import { UserInputDTO } from "../model/userDTO"
import { UserRepository } from "./UserRepository";
import { InvalidEmail } from "../error/InvalidEmail";

export class UserBusiness {
 constructor(private UserDatabase:UserRepository){}

 create = async(input: UserInputDTO)=> {
  try {

    const {email,name,password} = input
    
    if (!email || !name || !password) {
      throw new CustomError(400,"Dados inválidos (email, name, password)")
    }

    if (name.length < 4) {
      throw new InvalidName();
    }

    if (!email.includes("@")) {
      throw new InvalidEmail();
    }

    const id = generateId()



    //const userDatabase = new UserDatabase()

    const user = new User(id,name,email,password)

    await this.UserDatabase.create(user)
    
  } catch (error:any) {
    throw new CustomError(error.message || error.sqlMessage, error.statusCode);
  }
    
  }

}


