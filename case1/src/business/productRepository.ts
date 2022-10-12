import { Product } from "../model/types"
import products from "../model/products.json"

export interface ProductRepository {
    createProduct(product: Product): Promise<void>
    selectProductById(id: string): Promise<Product>
    insertProduct(): Promise<void>
}