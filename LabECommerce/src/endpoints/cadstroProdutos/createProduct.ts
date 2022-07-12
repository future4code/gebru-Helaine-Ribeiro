import { connection } from "../../data/connection";
import { Request, Response } from "express";



// criar produtos
export async function createProduct(req: Request,res: Response): Promise<void> {
    //let statusCode
    const id = req.params.id;
   

    const { name, price, image_url } = req.body;
    try {
         await connection("labecommerce_products")
        .insert ({id,name, price, image_url})
        
        res.status(200).send("produto criado com sucesso.");
                
    
    } catch(e:any) {
        console.error({e});
        res.status(500).send("Algo deu errado.");
        //res.status(statusCode || 400).send(error.message);
    }
};