import { ProductRepository } from "../business/productRepository"
import { CustomError } from "../error/CustomError"
import { Product } from "../model/types"
import { BaseDatabase } from "./baseDatabase"
//import products from "../model/products.json"


export class ProductDatabase extends BaseDatabase implements ProductRepository {

    private static TABLE_NAME = "table_products"

    async createProduct(product: Product): Promise<void> {
        try {
            await ProductDatabase.connection
                .insert({
                id: product.id,
                name:product.name,
                tags:product.tags
        })
                .into(ProductDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectProductById(id: string): Promise<Product> {
        try {
            const product = await ProductDatabase.connection
                .select("name", "tags")
                .where({ id })
                .into(ProductDatabase.TABLE_NAME)


            return product [0]

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }

}