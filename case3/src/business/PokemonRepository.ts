import { Pokemon } from "../model/types"


export interface PokemonRepository {
    InsertPokemon(pokemon: Pokemon): Promise<void>
    createPokemon(pokemon: Pokemon): Promise<void>
    selectPokemon(): Promise<Pokemon[]>
    selectByPkemonName(name: string): Promise<Pokemon>
    selectPokemonById(id: string): Promise<Pokemon>
    deletPokemonById(id: string): Promise<void>
    changePokemon(id:string,name:string,type:string,weather:string,STAT_TOTAL:number,ATK:number,DEF:number,STA:number): Promise< void>;
}