import { Product } from "../model/types";
import { connection } from "../data/connection";

// Essa função está acessando a tabela "labecommerce_products" para pegar todos os produtos.
export const selectProducts = async(): Promise <Product[]> => {
    
    const products = await connection("table_products")
        .select("table_products.id","table_products.name","table_products.tags"
        )

        return products
}

/* Essa função está acessando a tabela "labecommerce_products" para verificar se 
existe um id de produto.*/
export const getProductById = async(productId: string): Promise <Product> => {

    const product = await connection("table_products")
        .select("table_products.name", "table_products.tags")
        .where({id: productId})
    
        return product[0]
}

/* Essa função está acessando a tabela "labecommerce_products" para verificar se 
o nome de um produto já está cadastrado.*/
export const getProductByName = async(name: string): Promise <string> => {

    const [nameProduct] = await connection("table_products")
        .where({name: name})

        return nameProduct
}