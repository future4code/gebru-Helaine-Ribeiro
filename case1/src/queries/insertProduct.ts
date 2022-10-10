import { Product } from "../model/types";
import { connection } from "../data/connection";

// Essa função está inserindo um produto na tabela "labecommerce_products"
export const insertProduct = async (product: Product): Promise<void> => {
  await connection("table_products").insert({
    id: product.id,
    name: product.name,
    tags: product.tags,
    
  });
};