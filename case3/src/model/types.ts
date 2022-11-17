export interface AuthenticationData {
    id: string
    role: string
}

export interface Pokemon{
  id: string,
    name: string,
    type: string,
    weather: string,
    STAT_TOTAL: number,
    ATK: number,
    DEF: number,
    STA: number
 } 
 

 export interface PokemonDTO{
   name: string,
   type: string,
   weather: string,
   STAT_TOTAL: number,
   ATK: number,
   DEF: number,
   STA: number
 }