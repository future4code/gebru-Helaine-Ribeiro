import { Product } from "../model/types"

export interface ProductRepository {
    createProduct(product: Product): Promise<void>
    selectProductById(id: string): Promise<Product>
   
}