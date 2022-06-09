import express from "express"
import cors from "cors"
import {Request, Response} from "express"
import {v4 as generateId} from "uuid"
import { AddressInfo } from "net";
import { User, users, USER_TYPE } from "./data";


const app= express()
app.use(express.json())
app.use(cors())
//-------exercicio 1 --------
//endpoint que busque todos os usuários de uma lista
app.get('/user',(req:Request, res: Response)=>{ 

  try {

      res.status(200).send(users)

  }
  catch (error) {
      res.status(400).end("Usuários não encontrados")
  }
})
//-------exercicio 2 --------
app.get("/user/type",(req:Request, res: Response)=>{
    let errorCode = 500
    try{
        const type = req.query.type as string
        // verifica se o parâmetro está sendo passado
        if(!type){
            throw new Error("Falta passar o parâmetro de busca!")
        }
        const user = users.filter(u => u.type.toLowerCase() === type.toLowerCase())

        // percorre o array verifica se o valor passado existe
        if(!user.length){
            errorCode=404
            throw new Error("Usuário não encontrado")

        }
        res.status(200).send(user)


    }catch(error:any){
        res.status(errorCode).send(error.message)

    }
})
//-------exercicio 3 --------
app.get('/user/name',(req:Request, res:Response)=>{
    let errorCode = 500
    try {
        const name = req.query.name as string

        if(!name){
            throw new Error("Falta passar o parâmetro de busca!")
        }
        const user = users.filter(u=>u.name.toLowerCase() === name.toLowerCase())

        if(!user.length){

            errorCode=404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(user)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})
//-------exercicio 4 --------
app.post('/user',(req: Request, res:Response)=>{
    let errorCode=500

    try {
        const{name,email,type,age} = req.body

        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Faltam parâmetros a serem paddos no body");
        }

        if(type != USER_TYPE.ADMIN && type != USER_TYPE.NORMAL){
            errorCode = 422
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
        }

        const newUser: User ={
            id: generateId(),
            name,
            email,
            type,
            age
        }
 // verificação para saber se email, já existe

        users.push(newUser)
        res.status(201).send(users)
        
    } catch (error:any){
        res.status(errorCode).send(error.message)
        
    }

})

app.put('/user',(req: Request, res:Response)=>{
    let errorCode=500

    try {
        const{name,email,type,age} = req.body

        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Faltam parâmetros a serem paddos no body");
        }

        if(type !== USER_TYPE.ADMIN && type !== USER_TYPE.NORMAL){
            errorCode = 422
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
        }

        const newUser: User ={
            id: generateId(),
            name,
            email,
            type,
            age
        }
 // verificação para saber se email, já existe
 
        users.push(newUser)
        res.status(201).send(users)
        
    } catch (error:any){
        res.status(errorCode).send(error.message)
        
    }

})
//------exercicio 5-----
app.put('/user/:id',(req: Request, res:Response)=>{
    let errorCode=500

    try {
        const id = (req.params.id)
        const newName = req.body.name

        if(!newName){
            errorCode = 422
            throw new Error("Faltam parâmetros a serem passados no body");
        }
        const user = users.filter(u=> u.id === id )

        if( !user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        for (let i = 0; i < users.length; i++) {
            if (id === users[i].id) {
              users[i].name = newName
            }
          }
 
       
        res.status(201).send(user)
        
    } catch (error:any){
        res.status(errorCode).send(error.message)
        
    }

})
//-------exercicio6------
app.patch('/user/:id',(req: Request, res:Response)=>{
    let errorCode=500

    try {
        const id = (req.params.id)
        const newName = req.body.name

        if(!newName){
            errorCode = 422
            throw new Error("Faltam parâmetros a serem passados no body");
        }
        //verificando se o usuario exite
        const user = users.filter(u=> u.id ===id)

        if( !user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
//altera o elemento dentro do array de objetos
        for (let i = 0; i < users.length; i++) {
            if (id === users[i].id) {
              users[i].name = newName
            }
          }
 
       
        res.status(201).send(user)
        
    } catch (error:any){
        res.status(errorCode).send(error.message)
        
    }

})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;
  