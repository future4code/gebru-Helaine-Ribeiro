import { CustomError,  MissingFieldsToComplete } from "../error/CustomError";
import {  Pokemon, PokemonDTO } from "../model/types";
import { IdGenerator } from "../services/IdGenerator";

import { PokemonRepository } from "./PokemonRepository";

export class PokemonBusiness {
  constructor(private pokemonDatabase: PokemonRepository) {}

  async pokemonBusiness(pokemons: Pokemon[]) {
    try {

      pokemons.forEach(async(pokemon) => {

        let { id,name,type,weather,STAT_TOTAL,ATK,DEF,STA  } = pokemon;

      if (!id || !name  || !type || !weather || !STAT_TOTAL || !ATK || !DEF || !STA ) {
        throw new MissingFieldsToComplete();
      }

        await this.pokemonDatabase.InsertPokemon(pokemon);
        
      });
    
 
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
  }


  async createPokemonBusiness(input: PokemonDTO) {
    try {

        const { name,type,weather,STAT_TOTAL,ATK,DEF,STA } = input


        if ( !name  || !type || !weather || !STAT_TOTAL || !ATK || !DEF || !STA ) {
          throw new MissingFieldsToComplete();
        }

        const id = new IdGenerator().generateId()
        

        const pokemon: Pokemon = {
            id,
            name,
            type,
            weather,
            STAT_TOTAL,
            ATK,
            DEF,
            STA
        }

        await this.pokemonDatabase.createPokemon(pokemon)


      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }

    async getPokemonByIdBusiness(id: string) {
      try {
        
  
        const pokemons = await this.pokemonDatabase.selectPokemonById(id);
  
        return pokemons;

      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }

  
     async getPokemonByNameBusiness(name: string) {

      try {
      
        const pokemons = await this.pokemonDatabase.selectByPkemonName(name);
  
        return pokemons;

      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }
  
    async deletePokemonByIdBusiness(id: string) {

      try {
      
    await this.pokemonDatabase.deletPokemonById(id);
  
        

      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }
  
    async changePokemonBusiness(id: string,name:string,type:string,weather:string,STAT_TOTAL:number,ATK:number,DEF:number,STA:number) {

      try {
      
    await this.pokemonDatabase.changePokemon(id,name,type,weather,STAT_TOTAL,ATK,DEF,STA);
  
        

      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }

  
  }
