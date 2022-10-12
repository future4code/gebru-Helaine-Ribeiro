
import { CustomError, invalidAuthenticatorData, invalidProduct, invalidToken, MissingFieldsToComplete } from "../error/CustomError";
import { InsertProductInputDTO, Product, ProductInputDTO } from "../model/types";
import { Authenticator } from "../services/Authentication";
import { IdGenerator } from "../services/IdGenerator";





import { ProductRepository } from "./productRepository";


export class ProductBusiness {
    constructor(private productDatabase: ProductRepository) { }

    async createProductBusiness(input:ProductInputDTO) {
        try {

            const { name, tags ,token} = input


            if (!name || tags ) {
                throw new MissingFieldsToComplete()
            }

          

            const authenticatorData = new Authenticator().getTokenData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticatorData()
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

    async productByIdBusiness(id: string, token: string) {
        try {

            if (!token) {
                throw new invalidToken()
            }

            const authenticatorData = new Authenticator().getTokenData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticatorData()
            }

            const product = await this.productDatabase.selectProductById(id)

            if (!product) {
                throw new invalidProduct()
            }

            return product

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async insertProductBusiness() {
        try {
          
          await this.productDatabase.insertProduct();
     
          
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
      }
}