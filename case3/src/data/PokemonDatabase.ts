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

     async createPokemon(pokemon: Pokemon): Promise<void> {
        try {
            await PokemonDatabase.connection
            .insert(pokemon)
             /* .insert({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.type,
                weather: pokemon.weather,
                STAT_TOTAL: pokemon.STAT_TOTAL,
                ATK: pokemon.ATK,
                DEF: pokemon.DEF,
                STA: pokemon.STA
            })  */
          
           .into(PokemonDatabase.TABLE_NAME)
          

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } 

    async selectPokemon(): Promise<Pokemon[]> {
        try {

            const pokemon = await PokemonDatabase.connection(PokemonDatabase.TABLE_NAME)
                .select('*')
            

            return pokemon
        

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }
    


     async selectByPkemonName(name: string): Promise<Pokemon> {
        try {

            const pokemon = await PokemonDatabase.connection
                .select("id","name","type","weather","STAT_TOTAL","ATK","DEF","STA")
                .where({name})
                .into(PokemonDatabase.TABLE_NAME)

            return pokemon[0]

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectPokemonById(id: string): Promise<Pokemon> {
        try {
            const pokemon = await PokemonDatabase.connection
                .select("name" ,"type","weather","STAT_TOTAL","ATK","DEF","STA")
                .where({ id })
                .into(PokemonDatabase.TABLE_NAME)

            return pokemon[0]
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } 

    async deletPokemonById(id: string): Promise<void> {
        try {
             await PokemonDatabase.connection
                .delete()
                .where({id})
                .into(PokemonDatabase.TABLE_NAME)

               

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } 

    async changePokemon(id: string,name:string,type:string,weather:string,STAT_TOTAL:number,ATK:number,DEF:number,STA:number): Promise< void> {
        try {
             await PokemonDatabase.connection

                .update({id,name,type,weather,STAT_TOTAL,ATK,DEF,STA})
                .where({id})
                .into(PokemonDatabase.TABLE_NAME)

             

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.sqlMessage || error.message)
        }
    } 
}
