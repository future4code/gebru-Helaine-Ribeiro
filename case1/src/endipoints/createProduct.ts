import { connection } from "../data/connection";
import { Request, Response } from "express";
import { CustomError } from "../error/CustomError";



// criar produtos
export async function createProduct(req: Request,res: Response): Promise<void> {
    //let statusCode
    const id = req.params.id;
   

    const { name, tags } = req.body;
    try {
         await connection("table_products")
        .insert ({id,name, tags})
        
        res.status(200).send("produto criado com sucesso.");
                
    
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
    }
