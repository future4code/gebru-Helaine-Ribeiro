import { connection } from "../../data/connection";
import { Request, Response } from "express";
import { user } from "../types";


export async function getAllRegistro(req: Request,res: Response): Promise<void> {
        //let statusCode
      
      try {
          const result = await connection("labecommerce_purchases")
          .select()
          .where({
            user_id: req.params.user_id
        });
          res.send(result);
  
      } catch(e:any) {
          console.error({e});
         res.status(500).send("Algo deu errado.");
         //res.status(statusCode || 400).send(error.message);
      }
  };
 
    

