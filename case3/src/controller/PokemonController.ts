import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import * as path from "path"
import readXlsxFile from 'read-excel-file/node'
import { Pokemon, PokemonDTO } from "../model/types";
import { CustomError, invalidPokemon } from "../error/CustomError";


  const fileName = path.resolve(__dirname,"PokemonGo.xlsx");

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}

// inserindo o arquivo pokemon.xlsx no banco de dados  
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
  
    // criando um novo pokemon 
    async createPokemonController(req: Request, res: Response) {
      try {

          const { name,type,weather,STAT_TOTAL,ATK,DEF,STA } = req.body;

          const newpokemon: PokemonDTO = {
            name,
            type,
            weather,
            STAT_TOTAL,
            ATK,
            DEF,
            STA
          }

          await this.pokemonBusiness.createPokemonBusiness(newpokemon);

          res.status(201).send({ message: "Pokemon criado com sucesso!" });

        } catch (error: any) {
          throw new CustomError(error.statusCode, error.sqlMessage || error.message);
        }
      }

      // pega todos os pokemons
      /* async getPokemonController(req: Request, res: Response) {
        try {
  
          const { id,name,type,weather,STAT_TOTAL,ATK,DEF,STA } = req.query;

            const pokemon = await this.pokemonBusiness.getPokemonBusiness(id,name,type,weather,STAT_TOTAL,ATK,DEF,STA)

  
            res.status(200).send(pokemon)
  
          } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message);
          }
        } */
  
// pega pokemon pelo id
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

      // pega pokemon pelo nome     
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

//deleta pokemon
async deletePokemonByIdController(req: Request, res: Response) {
  try {

      const { id } = req.params

     await this.pokemonBusiness.deletePokemonByIdBusiness(id)

      

      res.status(200).send({ message: "Pokemon deletado com sucesso!" })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
  }
 
  // altera o pokemon
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











