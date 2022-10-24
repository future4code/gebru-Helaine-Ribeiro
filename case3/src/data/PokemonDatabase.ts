
import { PokemonRepository } from "../business/PokemonRepository";
import { CustomError } from "../error/CustomError";
import { Pokemon } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";


export class PokemonDatabase extends BaseDatabase implements PokemonRepository{

    private static TABLE_NAME = "Pokemon_Go"
 
    async InsertPokemon(pokemon: Pokemon): Promise<void> {
        try {
            await PokemonDatabase.connection
                .insert(pokemon)
                .into(PokemonDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    /* async createPokemon(pokemon: Pokemon): Promise<void> {
        try {
            await PokemonDatabase.connection
            .insert({
                id: pokemon.id,
                name: pokemon.name,
                pokedex_number : pokemon.pokedex_number,
                type: pokemon.type,
                weather: pokemon.weather,
                STAT_TOTAL: pokemon.STAT_TOTAL,
                ATK: pokemon.ATK,
                DEF: pokemon.DEF,
                STA: pokemon.STA
            })

           .into(PokemonDatabase.TABLE_NAME)


        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } */

   /*  async selectByPkemon(name: string): Promise<Pokemon> {
        try {

            const user = await PokemonDatabase.connection
                .select("id","name","pokedex_number" ,"type","weather","STAT_TOTAL","ATK","DEF","STA")
                .where({name})
                .into(PokemonDatabase.TABLE_NAME)

            return user[0]
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectPokemonById(id: string): Promise<Pokemon> {
        try {
            const user = await PokemonDatabase.connection
                .select("name","pokedex_number" ,"type","weather","STAT_TOTAL","ATK","DEF","STA")
                .where({ id })
                .into(PokemonDatabase.TABLE_NAME)

            return user[0]
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } */
}
