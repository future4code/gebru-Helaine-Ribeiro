import { PostsDataBase } from "../data/PostsDataBase";
import { CustomError } from "../error/customError";
import { PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";
import { post } from "../model/types"

export class PostBusiness {
    constructor(private postsDataBase:PostsDataBase){}
        
    createPost =async (input:PostInputDTO) => {
       try {

        const{photo, description, type, authorId } = input

        if (!photo || !description || !type || !authorId) {
      
            throw new Error("Dados inválidos (photo, description, type, authorId)")
    
        }

        const id= generateId()
        
        const createdAt = Date.now() 

const posts:post = {id,photo, description, type, createdAt, authorId}
await this.postsDataBase.createPosts(posts)

       } catch (error:any) {
        throw new CustomError(error.message || error.sqlMessage, error.statusCode);
  }
       }
    
        
    
}