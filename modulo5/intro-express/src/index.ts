/* import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; */

import express from 'express'
import cors from 'cors'
import {Request, Response} from 'express'
import { usuarios, posts } from "./data";


const app= express()

app.use(express.json())

app.use(cors())



//endpoint
app.get('/', (req: Request, res: Response)=>{
  res.status(200).send('Deu certo')
})

app.get('/usuarios', (req: Request, res: Response) => {

  try {

      res.status(200).send(usuarios)

  }
  catch (error) {
      res.status(400).end("Usuários não encontrados")
  }
})


app.get('/post/:id', (req: Request, res: Response) => {

  try {
  const id= Number(req.params.id)

   const usuarioFiltrado= posts.filter(user=> user.userId === id)
    

      res.status(200).send(usuarioFiltrado)

  }
  catch (error) {
      res.status(400).end("Usuários não encontrados")
  }
})






app.listen(30003,()=>{
    console.log("Server is running in http://localhost:30003")
})

