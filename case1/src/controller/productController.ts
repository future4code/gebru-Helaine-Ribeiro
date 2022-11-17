import { Request, Response } from "express";
import { ProductBusiness } from "../business/productBusiness";
import { CustomError, invalidProduct } from "../error/CustomError";
import { ProductInputDTO } from "../model/types";


export class ProductController {
    constructor(private productBusiness: ProductBusiness) { }

    async createProductController(req: Request, res: Response) {
        try {

            const { name, tags } = req.body

            const product: ProductInputDTO = {
                name,
                tags
            }

              await this.productBusiness.createProductBusiness(product);
           

            res.status(201).send({ message: "Produto criado com sucesso!"})

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }
      
   
    async productByIdController(req: Request, res: Response) {
        try {

            const { id } = req.params

            const product = await this.productBusiness.productByIdBusiness(id)

            if(!product) {
                throw new invalidProduct();
            }

            res.status(200).send(product)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    
} 