import { app } from "./app"
//import { createProduct } from "./endipoints/createProduct"
//import { getAllProducts } from "./endipoints/getAllProduct"
import { productRouter } from "./routes/productRouter"




/* //Endpoint que pega todos os produtos
app.get("/product", getAllProducts)

//Endpoint que cria um produto
app.post("/product", createProduct) */

app.use('/product',productRouter.post("/insert"))

app.use("/product", productRouter.post("/products"))
app.use("/product", productRouter.get("/products/:id"))




