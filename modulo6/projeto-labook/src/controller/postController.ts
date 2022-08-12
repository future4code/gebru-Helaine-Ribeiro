 import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";

export class PostController {
  constructor(private postBusiness: PostBusiness){}

 

  public createPost = async (req: Request, res: Response) => {
    try {
        const { photo, description, type,createdAt,authorId} = req.body

        const postId: string = generateId()


      const input: PostInputDTO = {
        id: postId,
        photo ,
        description ,
        type,
        createdAt,
        authorId

       
  
   
    
        
      };
      
      await this.postBusiness.createPost(input);

      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}   