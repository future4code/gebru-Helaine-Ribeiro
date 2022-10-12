
export type Product = {
    id: string,
    name: string,
    tags: []
}

export type AuthenticationData = {
    id: string
 }
 
 export interface ProductInputDTO{
    name: string,
    tags: []
    token:string
 } 

 export interface InsertProductInputDTO {
    name: string,
    tags: []
   
}