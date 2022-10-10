import { Request, Response } from "express";
import { connection } from "../data/connection";
import { CustomError } from "../error/CustomError";


// pega todos os usuarios
export async function getAllProduct(req: Request,res: Response): Promise<void> {
      //let statusCode
    
    try {
        const result = await connection("table_products")
        .select();
        res.send(result);

    } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
};