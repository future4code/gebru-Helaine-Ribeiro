import { connection } from "../../data/connection";
import { Request, Response } from "express";
import { user } from "../types";



export async function deleteUser (req:Request, res:Response):Promise<void> {
    // const id = req.params.id;
    // const { id } = req.params;

    try {
        await connection("labecommerce_users")
            .delete()
            .where({
                id: req.params.id
            });
        res.send("usuário deletado com sucesso");
        
    } catch(e) {
        console.error({e});
         res.status(500).send("Algo deu errado.");
         //res.status(statusCode || 500).send(error.message);
    }
};