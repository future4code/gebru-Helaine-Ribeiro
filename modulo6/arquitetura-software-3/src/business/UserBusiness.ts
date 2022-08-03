import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError";
//import { v4 as generateId } from 'uuid'
import { generateId } from "../services/generateId";
import { User } from "../model/User"
import { UserInputDTO } from "../model/userDTO"

export class UserBusiness {
 create = async(input: UserInputDTO)=> {
  try {

    const {email,name,password} = input
    
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()

    const user = new User(id,name,email,password)

    await userDatabase.create(user)
    
  } catch (error:any) {
    throw new CustomError(error.message || error.sqlMessage, error.statusCode);
  }
    
  }

}


