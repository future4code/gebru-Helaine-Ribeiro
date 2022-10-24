import { Pokemon } from "../model/types"


export interface PokemonRepository {
    InsertPokemon(pokemon: Pokemon): Promise<void>
    //createPokemon(pokemon: Pokemon): Promise<void>
    //selectByPkemon(name: string): Promise<Pokemon>
   // selectPokemonById(id: string): Promise<Pokemon>
}