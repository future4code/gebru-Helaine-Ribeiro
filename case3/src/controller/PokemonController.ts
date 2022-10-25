import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import * as path from "path"
import readXlsxFile from 'read-excel-file/node'
import { Pokemon, PokemonDTO } from "../model/types";
import { CustomError, invalidPokemon } from "../error/CustomError";


  const fileName = path.resolve(__dirname,"PokemonGo.xlsx");

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}

  async insertPokemonController(req: Request, res: Response) {

    try {

const pokemons =  await readXlsxFile(fileName).then((rows:any[])=> rows.map((row:any[]):Pokemon => {
  
  
        return{
          id: row[0],
          name: row[1],
          type: row[3],
          weather: row[4],
          STAT_TOTAL: row[5],
          ATK: row[6],
          DEF: row[7],
          STA: row[8]
        }; 
    }) 
    );
  
    pokemons.shift()
    console.log(pokemons)
       
       await this.pokemonBusiness.pokemonBusiness(pokemons);
      
       console.log(this.pokemonBusiness)

        res.status(201).send("All items stored into database successfully!");

      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }
  
    async createPokemonController(req: Request, res: Response) {
      try {

          const { name,type,weather,STAT_TOTAL,ATK,DEF,STA } = req.body

          const newpokemon: PokemonDTO = {
            name,
            type,
            weather,
            STAT_TOTAL,
            ATK,
            DEF,
            STA
          }

          await this.pokemonBusiness.createPokemonBusiness(newpokemon)

          res.status(201).send({ message: "Pokemon criado com sucesso!" })

        } catch (error: any) {
          throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
      }
  

  async getPokemonByIdController(req: Request, res: Response) {
      try {

          const { id } = req.params

          const pokemon = await this.pokemonBusiness.getPokemonByIdBusiness(id)

          if(!pokemon) {
              throw new invalidPokemon();
          }

          res.status(200).send(pokemon)

        } catch (error: any) {
          throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
      }

async getPokemonByNameController(req: Request, res: Response) {
  try {

    const { name } = req.params

    const pokemon = await this.pokemonBusiness.getPokemonByNameBusiness(name);

    if(!pokemon) {
      throw new invalidPokemon();
  }


    res.status(200).send(pokemon);

  } catch (error: any) {
    throw new CustomError(error.statusCode, error.sqlMessage || error.message);
  }
}

async deletePokemonByIdController(req: Request, res: Response) {
  try {

      const { id } = req.params

     await this.pokemonBusiness.deletePokemonByIdBusiness(id)

      

      res.status(200).send({ message: "Pokemon deletado com sucesso!" })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
  }
 
  async changePokemonController(req: Request, res: Response) {
    try {
  
        const { id } = req.params
        const { name,type,weather,STAT_TOTAL,ATK,DEF,STA } = req.body;
  
       await this.pokemonBusiness.changePokemonBusiness(id,name,type,weather,STAT_TOTAL,ATK,DEF,STA)
  
        
  
        res.status(200).send({ message: "Pokemon alterado com sucesso!" })
  
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }
}











/* / Importando pacotes mysql e csvtojson
// Requer módulo
const  readXlsxFile  =  require ( 'read-excel-file/node' ) 
const mysql = require("mysql");
  
// Credenciais do banco de dados
const hostname = "localhost",
    username = "root",
    password = "root",
    databsename = "csvtomysql"
  
  
// Estabelece conexão com o banco de dados
let con = mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: databsename,
});
  
con.connect((err:any) => {
    if (err) return console.error(
            'error: ' + err.message);
  
    con.query("DROP TABLE Pokemom_Go", 
        (err:any, drop:any) => {
  
        // Consulta para criar a tabela "Pokemom_Go"
        const createStatament = 
        "CREATE TABLE Pokemom_Go(id VARCHAR(64) PRIMARY KEY, " +
        "name VARCHAR(64) NOT NULL, pokedex_number INT, " +
        "type VARCHAR(64) NOT NULL, weather VARCHAR(64) NOT NULL," +
        "STAT_TOTAL VARCHAR(64) NOT NULL,ATK INT,DEF INT,STA INT)"

  
        // Criando tabela "Pokemom_Go"
        con.query(createStatament, (err, drop) => {
            if (err)
                console.log("ERROR: ", err);
        });
    });
});
  
// xlsx nome do arquivo
const fileName = "PokemomGo.xlsx";
  
readXlsxFile().fromFile(fileName).then(source => {
  
    // Buscando os dados de cada linha
    // e inserindo na tabela "Pokemom_Go"
    for (let i = 0; i < source.length; i++) {
        let id = source[i]["id"],
        name = source[i]["name"],
        pokedex_number = source[i]["pokedex_number"],
        type = source[i]["type"],
        weather = source[i]["weather"],
        STAT_TOTAL = source[i]["STAT_TOTAL"],
        ATK = source[i]["ATK"],
        DEF = source[i]["DEF"],
        STAT = source[i]["STAT"]

                
  
        const insertStatement = 
        `INSERT INTO Pokemom_Go values(?, ?, ?, ?)`;
        const items = [id,name,pokedex_number,type,weather,STAT_TOTAL,ATK,DEF,STA];
  
       //Inserindo dados da linha atual
        // no banco de dados
        con.query(insertStatement, items, (err, results, fields) => {
            if (err) {
                console.log(
    "Unable to insert item at row ", i + 1);
                return console.log(err);
            }
        });
    }
    console.log(
"All items stored into database successfully");
}); */


  /* const  readXlsxFile  =  require ( 'read-excel-file/node' ) 

// Caminho do arquivo. 
readXlsxFile ( './PokemonGo.xlsx' ) . then ( ( rows:any )  =>  { 
  console.log(rows);
  console.table(rows); })
  // `rows` é um array de linhas 
  // cada linha sendo um array de células. 
 

  const xlsxFile = require('read-excel-file/node'); 
  //obtendo os dados do arquivo usando forEach Loop
  //o dados parâmetro  contém a entrada da célula da planilha.
  xlsxFile('./PokemonGo.xlsx').then((rows:any) => {

    rows.forEach((col:any)=>{ col.forEach((data:any)=>{ 

      console.log(data); 
      console.log(typeof data); 
  }) }) })
     
    
  
         
   
       */