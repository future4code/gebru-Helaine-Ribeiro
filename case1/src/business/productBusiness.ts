
import { CustomError,  invalidProduct,  MissingFieldsToComplete } from "../error/CustomError";
import {  Product, ProductInputDTO } from "../model/types";
import { IdGenerator } from "../services/IdGenerator";
import { ProductRepository } from "./productRepository";


export class ProductBusiness {
    constructor(private productDatabase: ProductRepository) { }

    async createProductBusiness(input:ProductInputDTO) {
        try {

            const { name, tags } = input

            
            if (!name || !tags ) {
                throw new MissingFieldsToComplete()
            }

            const id = new IdGenerator().generateId()
           
            const product: Product = {
                id,
                name,
                tags
            }

            await this.productDatabase.createProduct(product) 

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async productByIdBusiness(id: string) {
        try {

            const product = await this.productDatabase.selectProductById(id)

            if (!product) {
                throw new invalidProduct()
            }

            return product

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }

   
}