import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
//import { User, users, USER_TYPE } from "./types";

app.get('/test', (req, res) => {
    res.status(200).send("ok");
});

app.get('/actor/:id', async (req,res) => {
    try {
        const result = await connection("Actor")
            .select('name')
            .where({
                id: req.params.id
            });
        res.send(result);
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
});
// pega todos os atores
app.get('/actor', async (req, res) => {
    try {
        // const result = await connection.raw(`
        //     SELECT * FROM Actor
        // `);
        const result = await connection("Actor").select();
        res.send(result);
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
});

app.post('/actor', async (req: Request, res: Response) => {

    const { birthday, name, salary, gender } = req.body;
    try {
        await connection.raw(`
            INSERT INTO Actor (id, name, birth_date, salary, gender)
            VALUES (
                07,
                "${name}",
                \"${birthday}\",
                ${Number(salary)},
                \"${gender}\"
            )
    `);
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
    res.send("Ok");
});

app.put('/actor/:id', async (req, res) => {
    const id = req.params.id;
    const { birthday, name, salary, gender } = req.body;
    
    try {
        await connection("Actor")
            .update({
                name,
                salary,
                gender,
                birth_date: birthday
            })
            .where({
                id
            });
        res.send("Ok");
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
});

app.delete('/actor/:id', async (req, res) => {
    // const id = req.params.id;
    // const { id } = req.params;

    try {
        await connection("Actor")
            .delete()
            .where({
                id: req.params.id
            });
        res.send("Ok");
        
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
});



