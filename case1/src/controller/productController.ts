import { Request, Response } from "express";
import { ProductBusiness } from "../business/productBusiness";
import { CustomError, invalidProduct } from "../error/CustomError";
import { InsertProductInputDTO, ProductInputDTO } from "../model/types";


export class ProductController {
    constructor(private productBusiness: ProductBusiness) { }

    async createProductController(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const { name, tags } = req.body

            const product: ProductInputDTO = {
                name,
                tags,
                token
            }

             await this.productBusiness.createProductBusiness(product);
           

            res.status(201).send({ message: "Produto criada com sucesso!" })

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }
      
   
    async productByIdController(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const { id } = req.params

            const product = await this.productBusiness.productByIdBusiness(id, token)

            if(!product) {
                throw new invalidProduct();
            }

            res.status(200).send(product)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async insertProductController(req: Request, res: Response) {
        try {
         
 await this.productBusiness.insertProductBusiness();
    
          res.status(201).send({ message: "produto inserido!"});

        } catch (error: any) {
          res.status(error.statusCode).send(error.message);
        }
      }
} 