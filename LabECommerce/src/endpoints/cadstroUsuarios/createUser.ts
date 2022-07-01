import { connection } from "../../data/connection";
import { Request, Response } from "express";
import { user } from "../types";


// criar usuarios
export async function createUser(req: Request,res: Response): Promise<void> {
    //let statusCode
    const id = req.params.id;

    const { name, email, password } = req.body;
    try {
         await connection("labecommerce_users")
        .insert ({id,name, email, password})
        
        res.status(200).send("usuario criado com sucesso.");
                
    
    } catch(e:any) {
        console.error({e});
        res.status(500).send("Algo deu errado.");
        //res.status(statusCode || 400).send(error.message);
    }
    
};
