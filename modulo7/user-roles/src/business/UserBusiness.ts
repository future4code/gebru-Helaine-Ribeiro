import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { EditUserInput, LoginUserInputDTO, UserInputDTO } from "../model/user";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { user } from "../model/user";
import Authenticator from "../services/Authenticator";
import {InvalidPassword,UnathorizedUser, UserNotFound} from "../error/CustomError"
import { AuthenticationData } from "../model/types";

export class UserBusiness {
    private userDatabase : UserDatabase
    constructor(){
        this.userDatabase = new UserDatabase
    }

    public createUser =async (input:UserInputDTO) => {
        let {name,nickname,email,password,role}=input

        if(!name || !nickname || !email || !password || !role)
        throw new CustomError(422,"Ausência de parâmetro" )

        if (role !== "NORMAL" && role !== "ADMIN"){
            role = "NORMAL"
          }

          const id = IdGenerator.generateId()
          const hash = await HashManager.generateHash(password)

          const user: user = {
            id,
            email,
            password: hash,
            name,
            nickname,
            role
          }

          await this.userDatabase.insertUser(user)
          const token = Authenticator.generateToken({id, role})

          return token
    }

    public login =async (input:LoginUserInputDTO) => {
        let{email,password}= input

        if(!email || !password) {
            throw new CustomError(400, "Ausência de parâmetros")
          }

          if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }

          const user = await this.userDatabase.findUserByEmail(email)
          const hashCompare = await HashManager.compareHash(password,user.password)

          if(!hashCompare){ 
            throw new InvalidPassword()
          }

          const payload : AuthenticationData={
            id: user.id,
            role: user.role
          }

          const token = Authenticator.generateToken(payload)

          return token 
    }

    public editUser =async (input:EditUserInput, token:string) => {
        let{name,nickname,id}=input
        
        if (!name || !nickname || !token) {
            throw new CustomError(422, "Ausência de parâmetro") 
          }

          const userExist = await this.userDatabase.getUserById(id)
          if(!userExist){
            throw new UserNotFound()
          }
      
          const tokenData = Authenticator.getTokenData(token)
          console.log(tokenData)
      
          if(tokenData.role !== "ADMIN") {
            throw new UnathorizedUser()
          }
      
          const editedUser :EditUserInput = {
            name, 
            nickname, 
            id
          }
      
          await this.userDatabase.editUser(editedUser)
        }

         public getUserBusiness =async (id:string, token:string) => {
        
          const authenticationData = Authenticator.getTokenData(token)
          console.log(authenticationData)

          const userExist = await this.userDatabase.getUserById(id)

          if(!userExist){
            throw new UserNotFound()
          }

          if (authenticationData.role !== "normal") {
            throw new Error("Only a normal user can access this funcionality");
          }
    
          /* const payload : AuthenticationData={
            id,
            role: authenticationData.role
          } */

      
          await this.userDatabase.getUserById(id)
        }
         
          } 
      
    
