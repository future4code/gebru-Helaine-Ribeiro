import { app } from "./app";
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { getAllUsers,getAllUsersId } from "./cadstroUsuarios/getAllUsers";
import { createUser } from "./cadstroUsuarios/createUser";
import {createProduct} from "./cadstroProdutos/createProduct"
import {getAllProduct} from "./cadstroProdutos/getAllProduct"
import { changeUser } from "./cadstroUsuarios/changeUser";
import { deleteUser } from "./cadstroUsuarios/deleteUser";
import { createRegistro } from "./registroCompras/createRegistro";
import { getAllRegistro } from "./registroCompras/getAllRegistro";

app.get
('/', async(req: Request, res: Response):Promise<void> => {
    res.status(200).send("Deu certo")
})

// pega todos os usuarios
app.get("/users", getAllUsers)

// pega todos os produtos
app.get("/products", getAllProduct)

// historico de  todos as compras
app.get("/users/:user_id/purchases", getAllRegistro)


// pega  usuarios pelo id
app.get("/users/:id", getAllUsersId)

// criar usuarios
app.post('/users', createUser)

//criar produtos
app.post('/products', createProduct)


//criar registro de compras
app.post('/purchases', createRegistro)

// altera o usuario
    app.put('/users/:id', changeUser)
        

//deleta usuario
    app.delete('/users/:id', deleteUser)
        

    
    