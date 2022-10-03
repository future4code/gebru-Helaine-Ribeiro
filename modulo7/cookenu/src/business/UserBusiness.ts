import { UserDatabase } from "../data/UserDatabase"
import { CustomError, InvalidPassword, UserNotFound } from "../error/CustomError"
import { AuthenticationData } from "../model/types"
import { EditUserInput, EditUserInputDTO, LoginUserInputDTO, UserInputDTO, user } from "../model/user"
import Authenticator from "../services/Authenticator"
import HashManager from "../services/HashManager"
import IdGenerator from "../services/IdGenerator"


export class UserBusiness {
    private userDB: UserDatabase
    constructor(){
      this.userDB = new UserDatabase()
    }
    public createUser = async (input :UserInputDTO) => {
      let {name ,  email, password} = input 
  
      if (!name || !email || !password) {
        throw new CustomError(422, "Ausência de parâmetro") 
      }
  
    
      const id = IdGenerator.generateId()
      const hash = await HashManager.generateHash(password)
  
      const user:user = {
        id, 
        name,
        email, 
        password: hash, 
        
      }
  
      await this.userDB.insertUser(user)
      const token = Authenticator.generateToken({id})
  
      return token
    }
  
    public login = async (input:LoginUserInputDTO) => {
      let {email, password} = input 
  
      if(!email || !password) {
        throw new CustomError(400, "Ausência de parâmetros")
      }
  
      const user = await this.userDB.findUserByEmail(email)
      const hashCompare = await HashManager.compareHash(
        password, 
        user.password
      )
  
      if(!hashCompare){ 
        throw new InvalidPassword()
      }
  
      const payload :AuthenticationData = {
        id: user.id, 
      }
  
      const token = Authenticator.generateToken(payload)
  
      return token
    }
  
    public editUser = async (input:EditUserInputDTO, token: string) => {
      let {name , id} = input 
  
      if (!name || !token) {
        throw new CustomError(422, "Ausência de parâmetro") 
      }
  
      const userExist = await this.userDB.getUserById(id)
      if(!userExist){
        throw new UserNotFound()
      }
  
      const tokenData = Authenticator.getTokenData(token)
      console.log(tokenData)
  
  
      const editedUser :EditUserInput = {
        name, 
        id
      }
  
      await this.userDB.editUser(editedUser)
    }
  
    
  }