import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { user } from "../types";

// pega todos os usuarios
export async function getAllProduct(req: Request,res: Response): Promise<void> {
      //let statusCode
    
    try {
        const result = await connection("labecommerce_products")
        .select();
        res.send(result);

    } catch(e:any) {
        console.error({e});
       res.status(500).send("Algo deu errado.");
       //res.status(statusCode || 400).send(error.message);
    }
};

