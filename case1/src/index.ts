import { app } from "./endipoints/app"
import { createProduct } from "./endipoints/createProduct"
import { getAllProduct } from "./endipoints/getAllProduct"




//Endpoint que pega todos os produtos
app.get("/product", getAllProduct)

//Endpoint que cria um produto
app.post("/product", createProduct)

