import { app } from "./app"
import { productRouter } from "./routes/productRouter"




//Endpoint que cria um novo produto
app.use("/product", productRouter)




