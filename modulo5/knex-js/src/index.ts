import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express"
import connection from "./connection"; 
import app from "./app";

app.get('/test', (req:Request, res:Response)=>{
   res.status(200).send("ok");
});

//-----exercício1------
//a)

//b)
/* const buscarAtor =async (name:string) => {
   const resultado = await connection.raw(`
   SELECT * FROM Actor WHERE name = "${name}"

   `)
   return resultado
} */

//c)
const contarAtores =async (gender:string) => {
   const result = await connection.raw(`
   SELECT COUNT(*) AS quantidade FROM Actor WHERE gender = "${gender}"
   
   `)//GROUP BY pega todos os tipos que tem dentro da coluna
   //SELECT COUNT(nome_da_coluna) AS quantidade FROM nome_da_tabela WHERE nome_da_coluna = 'tipo-da-coluna';
   const quantidade = result[0][0].quantidade;
  return quantidade;
}
//A função COUNT(*) retorna o número de registros (linhas) de uma tabela.
// o "AS quantidade"  foi colocado como apelido para altera o nome da coluna
	

//-----exercício2------
//a)
//b)
//c)

//-----exercício3------
//a)
//b)
//c)

//-----exercício4------
//a)
//b)
//c)



