import { connection } from "../../data/connection";
import { Request, Response } from "express";
import { user } from "../types";


// criar usuarios
export async function createRegistro(req: Request,res: Response): Promise<void> {
    //let statusCode

   

const total_price= req.params.price
    const { user_id, product_id, quantity} = req.body;

    try {
         await connection("labecommerce_purchases")
         .select
         ()
       
        .insert ({user_id, product_id, quantity,total_price})
        
        res.status(200).send("Registro de compras criado com sucesso.");
                
    
    } catch(e:any) {
        console.error({e});
        res.status(500).send("Algo deu errado.");
        //res.status(statusCode || 400).send(error.message);
    }
    
};