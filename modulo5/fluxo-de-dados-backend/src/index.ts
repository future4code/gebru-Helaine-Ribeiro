import express from "express"
import cors from "cors"
import {Request, Response} from "express"
import{v4 as generateId} from "uuid"
import{produtos} from "../src/data"


const app = express()
app.use(express.json())
app.use(cors())

const Errors: { [key: string]: { status: number, message: string } } = {
    
    PRODUCT_NOT_FOUND: { status: 404, message: "Produto não encontrada" },
    NAME_EXISTS: { status: 409, message: "Esse produto já existe" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando. Consulte a documentação" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" },
    NAME_DIFERENTE_STRING:{ status: 422, message: "name é uma string. Consulte a documentação" },
   
    PRICE_DIFERENTE_NUMBER:{ status: 422, message: "price é um number. Consulte a documentação" },
    PRICE_DIFERENTE:{ status: 422, message: "price tem que ser igual ou maior que 0. Consulte a documentação" }
    
}

//----exercicio 1-----
// app.get("./test",(request:Request, response:Response)=>{
//     response.status(200).send("API funcional")
// })

//----exercicio 3-----cria um novo produto 

app.post('/produtos/create',(request: Request, response: Response)=>{

     let erros: number
    try{
        
        const { id, name, price}= request.body

        const novoProduto = {
            id: generateId(),
            name, 
            price,
        }
         produtos.push(id, name, price)

         response.status(201).send(novoProduto)

    }catch(error: any){
       response.status(400).end(error.message)
    }
})

//----exercicio 4----- retorna todos os produtos 
app.get('/produtos', (request: Request, response: Response)=>{
    try{
        response.status(200).send(produtos)

    }catch(error:any){
        response.status(400).end(error.message)
    }
    
  })

 //----exercicio 5----- edita o preço de um determinado produto
   app. put("/produtos/:produtosId/price",(request: Request, response: Response)=>{
    try{

        const produtosId = request.params.produtosId
       const { price}= request.body

        if(!produtosId){
            throw new Error("id não encontrado")
        }

         produtos.filter(element=> element.id === produtosId).map(element=> element.price = price)


    

        response.status(200).send(produtos)

    }catch(error:any){
        response.status(400).end(error.message)
    }
    
  }) 

  //----exercicio 6----- deleta um determinado produto
  app.delete("/produtos/:deleteId",(request: Request, response: Response)=>{
      try{
          /* const{name} = request.body
          const deleteArquivo = produtos.findIndex((p)=>{
              if(name === p.name){
                  return p
              }
          })
          produtos.splice(deleteArquivo, 1)
          response.send(produtos) */

 const deleteId = request.params.deleteId

 

 for (let i = 0; i < produtos.length; i++){
     if(produtos[i].id ===deleteId){
produtos.splice(i,1)
     }
 }
 response.send(produtos)
 

      }catch(error:any){
        response.status(400).end(error.message)
      }
  })
  
//----exercicio 7----- fluxos de validação dos dados recebidos (name e price)
/* app.post('/produtos/create',(request: Request, response: Response)=>{
    try{
        
        let { id, name, price}= request.body
        if (!name) {
            throw new Error(Errors.NAME_DIFERENTE_STRING.message)
        }

        if(!price){
            throw new Error(Errors.PRICE_DIFERENTE_NUMBER.message)
        }

        const novoProduto = {
            id: generateId(),
            name, 
            price,
        }
         produtos.push(novoProduto)

         response.status(201).send(novoProduto)

    }catch(error: any){
       switch(error.message){
        //erro caso um ou nenhum deles forem recebidos
        case Errors. MISSING_PARAMETERS.message:
            response.status(Errors. MISSING_PARAMETERS.status).send(Errors. MISSING_PARAMETERS.message)
            break;

         //erro caso `name` seja diferente de `string`
        case Errors.NAME_DIFERENTE_STRING.message:
            response.status(Errors.NAME_DIFERENTE_STRING.status).send(Errors.NAME_DIFERENTE_STRING.message)
            break;  
        //erro caso `price` seja diferente de `number`          
        case Errors. PRICE_DIFERENTE_NUMBER.message:
            response.status(Errors. PRICE_DIFERENTE_NUMBER.status).send(Errors. PRICE_DIFERENTE_NUMBER.message)
            break;
        //erro caso `price` seja igual ou menor que `0`
        case Errors. PRICE_DIFERENTE.message:
            response.status(Errors. PRICE_DIFERENTE.status).send(Errors. PRICE_DIFERENTE.message)
            break;

         //erro caso algo inesperado aconteça    
        default:
            response.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message)
    }
}


}) */


app.listen(30003,()=>{
    console.log("Server is running in http://localhost:30003")
})