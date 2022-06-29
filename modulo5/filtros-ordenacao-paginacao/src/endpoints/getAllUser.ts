import { Request, Response } from "express";
import { connection } from "../data/connection";
//import { recipe } from "./types";
import selectAllUsers from "../data/migrations";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  let statusCode
  
   try {
    
    let name = req.query.name as string
    let sort = req.query.sort as string
    let order = req.query.order as string
    let size = Number(req.query.size)
    let page = Number(req.query.page)
  
     

     if(!name){
      name = "%"
    }


     if(sort !== "title" && sort !== "createdAt" ){
      sort = "title"
    } 

    if(sort=== "createdAt"){
      sort = "created_at"
    }
    
    if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
      order = "ASC"
    }

    if(isNaN(size) || size < 1){
      size = 10
    }

    if(isNaN(page) || page <1){
      page = 1
    }

    let offset = size*(page-1)

    const result = await connection("aula48_exercicio")
    .where("name", "like", `%${name}%`)
    .orderBy(sort, order)
    .limit(size)
    .offset(offset)

    console.log("tamanho da página:", result.length )
    if(result.length < 1){
      statusCode = 404
      throw new Error("Nenhuma receita encontrada")
    }

    const users = result.map(selectAllUsers);

    

     res.status(200).send(users)
     
  } catch (error:any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

export const getAllUsers2 = async(req: Request,res: Response): Promise<void> =>{
  let statusCode
  
  try {
    const type= req.params.type
    const users = await selectAllUsers()

    if(!users.length){
       res.statusCode = 404
       throw new Error("No recipes found")
    }

     res.status(200).send(users)
     
  } catch (error:any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}



/*export async function getAllUser(req: Request,res: Response): Promise<void> {
  let statusCode
  
   try {
    let title = req.query.title as string
    let sort = req.query.sort as string
    let order = req.query.order as string
    let size = Number(req.query.size)
    let page = Number(req.query.page)

    // verifica se o title é undefined
    if(!title){
      title = "%"
    }
// verifica
    if(sort !== "title" && sort !== "createdAt" ){
      sort = "title"
    } 

    if(sort=== "createdAt"){
      sort = "created_at"
    }
    
    if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
      order = "ASC"
    }

    if(isNaN(size) || size < 1){
      size = 10
    }

    if(isNaN(page) || page <1){
      page = 1
    }

    let offset = size*(page-1)

    const result = await connection("aula49_recipes")
    .where("title", "like", `%${title}%`)
    .orderBy(sort, order)
    .limit(size)
    .offset(offset)

    console.log("tamanho da página:", result.length )
    if(result.length < 1){
      statusCode = 404
      throw new Error("Nenhuma receita encontrada")
    }

    const recipes = result.map(toRecipe);

    res.status(200).send(recipes);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}

const toRecipe = (input: any): recipe => {
  return {
    id: input.id,
    title: input.title,
    description: input.description,
    userId: input.user_id,
    createdAt: input.created_at,
  };
}; */
