import { connection } from "../../data/connection";
import { Request, Response } from "express";


export async function changeUser( req:Request, res:Response):Promise<void> {
    const id = req.params.id;
    const { name, email, password } = req.body;
    
    try {
        await connection("labecommerce_users")
            .update({id,name, email, password})
            .where({id});

        res.send("alteração feita com sucesso");
    } catch(e) {
        console.error({e});
       res.status(500).send("Algo deu errado.");
       //res.status(statusCode || 500).send(error.message);
    }
};