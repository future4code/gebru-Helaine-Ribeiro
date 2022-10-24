export interface AuthenticationData {
    id: string
    role: string
}

export interface Pokemon{
  id: string,
    name: string,
    pokedex_number: number,
    type: string,
    weather: string,
    STAT_TOTAL: number,
    ATK: number,
    DEF: number,
    STA: number
 } 
 

 export interface PokemonDTO{
  id: string
   name: string,
   pokedex_number: number,
   type: string,
   weather: string,
   STAT_TOTAL: number,
   ATK: number,
   DEF: number,
   STA: number
 }