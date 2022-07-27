import { UserDatabase } from "../data/UserDataBase"

export class UserBusiness {
    createUser = async ( input:any ):Promise<void> => {
        try {
            const {name, email, password} = input
           if (!name || !email || !password) {
              throw new Error('Preencha os campos "name", "email" e "password"')
           }
           
           const id: string = Date.now().toString()

           const useDatabase = new UserDatabase()
           await useDatabase.createUser({
            id,
            name,
            email ,
            password 
           })
                
        } catch (error:any) {
         throw new Error( error.message || "Error creating user. Please check your system administrator.");
     }



}}