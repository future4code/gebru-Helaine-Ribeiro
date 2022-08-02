import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
//import { User } from "./types";

app.get('/test', (req, res) => {
    res.status(200).send("ok");
});


//1. Criar usuário 
app.post("/user", async (req: Request, res: Response)=>{

    const{name,nickname,email} = req.body;
    const id = uuidv4()
   
    if(!name || !nickname || !email){
     
        res.status(422).send("faltam parâmetros a serem passados no body");
        
    }
    
    try{
        await connection.raw(`
        INSERT INTO User(id,name,nickname,email)
        VALUES(
            
            "${id}",
            "${name}",
            "${nickname}",
            "${email}"
        )
        `
        )
        res.status(201).send("usuário cadastrado com sucesso!")
        
    } catch(error:any) {
res.status(400).send(error.message)
    }
}); 
  
//2. Pegar usuário pelo id
app.get('/user/:id', async (req,res) => {
   
    try {
        
        const result = await connection("User")
            .select("id",'nickname')
            .where({
                id: req.params.id
            });
            
        res.status(200).send(result);
    } catch(error:any) {
        res.status(400).send(error.message)
    }
});

//3. Editar usuário
app.put('/user/edit/:id', async (req, res) => {
    const id = req.params.id;
    const {  name, nickname} = req.body;

    if(!name || !nickname ){
     
        res.status(422).send("faltam parâmetros a serem passados no body");
        
    }
    
    try {
        await connection("User")
            .update({
                name,
                nickname
            })
            .where({
                id
            });
        res.send("usuário alterado com sucesso!");
    } catch(error:any) {
        res.status(400).send(error.message)
    }
});

//4. Criar tarefa
app.post("/task", async (req: Request, res: Response)=>{

    const{title,description,limitDate} = req.body;
    const id = uuidv4()
    const creatorUserId =uuidv4()
   
    
   
    if(!title || !description || !limitDate || !creatorUserId){
     
        res.status(422).send("faltam parâmetros a serem passados no body");
        
    }
    
    try{
        await connection.raw(`
        INSERT INTO Task2(id,title,description,limitDate,creatorUserId)
        VALUES(
            
            
            "${id}",
            "${title}",
            "${description}",
            "${limitDate}",
            "${creatorUserId}"
        )
  
        `
        )
        res.status(201).send("tarefa criada com sucesso!")
        
    } catch(error:any) {
res.status(400).send(error.message)
    }
}); 

//5. Pegar tarefa pelo id
app.get('/task/:id', async (req,res) => {
    try {
        const result = await connection("Task2")
            .select("title","description","limitDate","creatorUserId")
            .where({
                id: req.params.id
            });
        res.send(result);
    }catch(error:any) {
        res.status(400).send(error.message)
    }
});
 
//6. Pegar todos os usuários 
app.get('/user', async (req, res) => {
    try {
        // const result = await connection.raw(`
        //     SELECT * FROM User
        // `);
        const result = await connection("User").select();
        res.send(result);
    } catch(error:any) {
        res.status(400).send(error.message)
    }
});




//20. Deletar usuário
app.delete('/user/:id', async (req, res) => {
    // const id = req.params.id;
    // const { id } = req.params;

    try {
        await connection("User")
            .delete()
            .where({
                id: req.params.id
            });
        res.send("Ok");
        
    } catch(error:any) {
        res.status(400).send(error.message)
    }
}); 



