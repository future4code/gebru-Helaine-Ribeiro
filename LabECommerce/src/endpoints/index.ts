import { app } from "./app";
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { getAllUsers,getAllUsersId } from "./cadstroUsuarios/getAllUsers";
import { createUser } from "./cadstroUsuarios/createUser";
import {createProduct} from "./cadstroProdutos/createProduct"
import {getAllProduct} from "./cadstroProdutos/getAllProduct"

app.get
('/', async(req: Request, res: Response):Promise<void> => {
    res.status(200).send("Deu certo")
})

// pega todos os usuarios
app.get("/users", getAllUsers)

app.get("/products", getAllProduct)
//teste

// pega  usuarios pelo id
app.get("/users/:id", getAllUsersId)

// criar usuarios
app.post('/users', createUser)

//criar produtos
app.post('/products', createProduct)

// altera o usuario
    app.put('/users/:id', async (req, res):Promise<void> => {
        const id = req.params.id;
        const { name, email, password } = req.body;
        
        try {
            await connection("labecommerce_users")
                .update({id,name, email, password})
                .where({id});

            res.send("alteração feita com sucesso");
        } catch(e) {
            console.error({e});
           res.status(500).send("Algo deu errado.");
           //res.status(statusCode || 500).send(error.message);
        }
    });

//deleta usuario
    app.delete('/users/:id', async (req, res):Promise<void> => {
        // const id = req.params.id;
        // const { id } = req.params;
    
        try {
            await connection("labecommerce_users")
                .delete()
                .where({
                    id: req.params.id
                });
            res.send("usuário deletado com sucesso");
            
        } catch(e) {
            console.error({e});
             res.status(500).send("Algo deu errado.");
             //res.status(statusCode || 500).send(error.message);
        }
    });
    

    /* CREATE TABLE labecommerce_purchases(
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id VARCHAR(255),
        FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
product_id VARCHAR(255),
        FOREIGN KEY(product_id) REFERENCES labecommerce_products(id),
quantity INT,
total_price INT
    ) */
    