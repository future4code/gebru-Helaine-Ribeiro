
import { CustomError } from "../error/CustomError";
import {  PokemonDTO } from "../model/types";
import { PokemonRepository } from "./PokemonRepository";

export class PokemonBusiness {
  constructor(private pokemonDatabase: PokemonRepository) {}

  async pokemonBusiness(pokemons: PokemonDTO[]) {
    try {

      pokemons.forEach(async(pokemon) => {
        await this.pokemonDatabase.InsertPokemon(pokemon);
        
      });
     

 
    } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}

 /* let { id,name,pokedex_number,type,weather,STAT_TOTAL,ATK,DEF,STA  } = pokemon;

      if (!id || !name || !pokedex_number || !type || !weather || !STAT_TOTAL || !ATK || !DEF || !STA ) {
        throw new MissingFieldsToComplete();
      }

      await this.pokemonDatabase.InsertPokemon(pokemon); */
    
  
    /* async findUserBusiness(token: string) {
      try {
        if (!token) {
          throw new invalidToken();
        }
  
        const authenticatorData = new Authenticator().getTokenData(token);
  
        if (!authenticatorData.id) {
          throw new invalidAuthenticatorData();
        }
  
        const user = await this.pokemonDatabase.selectByUser(authenticatorData.id);
  
  
        return user;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }
  
    async getPokemonByIdBusiness(id: string, token: string) {
      try {
        if (!token) {
          throw new invalidToken();
        }
  
        const authenticatorData = new Authenticator().getTokenData(token);
  
        if (!authenticatorData.id) {
          throw new invalidAuthenticatorData();
        }
  
        const user = await this.pokemonDatabase.selectUserById(id);
  
        return user;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.sqlMessage || error.message);
      }
    }}
 */