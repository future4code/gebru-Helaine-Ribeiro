import { connection } from "./connection"

import products from "../model/products.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

// Construindo as tabelas para seram automaticamente criadas no mysql workbench.
const createTables = () => connection
   .raw(`
     

      CREATE TABLE IF NOT EXISTS table_products (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price float NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );

   
`)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)



// Inserindo produtos que estão no arquivo products.json na tabela 
const insertProducts = () => connection("table_products")
   .insert(products)
   .then(() => { console.log("Produtos criados") })
   .catch(printError)

// Parando o script
const closeConnection = () => { connection.destroy() }

/* Invocando a função createTables para criar as tabelas e inserir os jsons
 e parar o script migrations */
createTables()
 
   .then(insertProducts)
   .finally(closeConnection) 