import  { Request, Response } from "express";
import  express  from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { users,ContaUsuario,Extrato,Info} from "./data";
import{v4 as generateId} from "uuid"

const app = express();
app.use(express.json());
app.use(cors())

app.post('/users', (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const { name,cpf,dataNascimento } = req.body

      if(dataNascimento >= 18){
        errorCode = 400
        throw new Error("usuario menor de 18");
      }
  
      if (!name || !cpf || !dataNascimento ) {
        errorCode = 422
        throw new Error("Faltam parâmetros a serem paddos no body");
      }

      const newUser: ContaUsuario = {
        id: generateId(),
        name,
        cpf,
        dataNascimento
      }
  
      users.push(newUser)
      res.status(201).send(users)
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })

  
  app.get('/users', (req: Request, res: Response) => {
  
    try {
  
        res.status(200).send(users)
  
    }
    catch (error) {
        res.status(400).end("Usuários não encontrados")
    }
  })
  

  const server = app.listen(process.env.PORT || 30003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;
  
  