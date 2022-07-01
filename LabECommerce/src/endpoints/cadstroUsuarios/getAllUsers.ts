import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { user } from "../types";

// pega todos os usuarios
export async function getAllUsers(req: Request,res: Response): Promise<void> {
      //let statusCode
    
    try {
        const result = await connection("labecommerce_users")
        .select();
        res.send(result);

    } catch(e:any) {
        console.error({e});
       res.status(500).send("Algo deu errado.");
       //res.status(statusCode || 400).send(error.message);
    }
};

//pegar usuario por id
export async function getAllUsersId(req: Request,res: Response): Promise<void> {
    //let statusCode
    try {
        //await connection("labecommerce_users")
        const result = await connection("labecommerce_users")
            .select('name','email')
            .where({
                id: req.params.id
            });
        res.send(result);
        //res.send("usuario criado com sucesso");

    } catch(e) {
        console.error({e});
        res.status(500).send("Algo deu errado.");
        //res.status(statusCode || 400).send(error.message);
    }
};

