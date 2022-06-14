import express from 'express'
import cors from 'cors'
import {Request, Response} from "express"
//import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import { request } from 'http';

const app= express()
app.use(express.json())
app.use(cors())

/* const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; */

// exercicio 1 endpoint
app.get('/ping', (req, res)=>{
  res.status(200).send("Pong!")
})

//exercicio 2
type Afazer={
  userId: number,
    id: string,
    title: string,
    completed: boolean
  }

  //exercicio 3
  
 const afazeres: Afazer[]=[
  {
    userId: 1,
    id: "2",
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: "3",
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: "4",
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 2,
    id: "22",
    title: "distinctio vitae autem nihil ut molestias quo",
    completed: true
  },
  {
    userId: 2,
    id: "23",
    title: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false
  },
  {
    userId: 2,
    id: "24",
    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false
  }
      ]

//exercício 4

      app.get('/afazeres/:completed',(request:Request, res:Response)=>{
        try{
          const completedAfazeres = request.params.completed

           let listaAfazeres :boolean

           //forma curta
           //completedAfazeres === "true"? listaAfazeres = true : listaAfazeres:false
          
          if(completedAfazeres === "true"){

           listaAfazeres = true

            }else{
              listaAfazeres = false
            }
          
          const afazeresFiltrados = afazeres.filter(lista=> lista.completed === listaAfazeres)
         
          res.status(200).send(afazeresFiltrados)
        }
        catch (error){
          res.status(400).end('Afazeres não encontrados')
        }
      })

  //exercício 5
app.post('/afazeres/create',(request:Request,res:Response)=>{
  try{

    const createAfazeres = request.body.nova

   let novoId ={
     id: generateId(),
    nova:createAfazeres
   }

   afazeres.push(createAfazeres )

    res.status(201).send(novoId)
  }
  catch(erros){
res.status(400).end('Não foi possível criar o id')
  }
})

//exercicio 6
app.post('/afazeres/idAfazeres',(req:Request, res:Response)=>{
  try{
  
    const{userId,id, title,completed } = req.body
    // const id = req.body.generateId()
    // const userId = req.body.userId
    // const title = req.body.title
    // const completed = req.body.completed



    const novoAfazer = {
      id,
      userId, 
      title,
      completed
    }

    afazeres.push(novoAfazer)

res.status(201).send(novoAfazer)
  }
  catch(error){
    res.status(400).end('não foi posssível criar uma nova lista de afazeres')
  }
})
     
      
app.listen(30003,()=>{
  console.log("Server is running in http://localhost:30003")
})














