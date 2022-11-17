export class Products {
    constructor(
        private id: string,
        private name:string,
        private tags: [string],
    ){}

    public getId () {
        return this.id
    }
    public getName () {
        return this.name
    }
    public getTags () {
        return this.tags
    }
}
export type Product = {
    id: string,
    name: string,
    tags: string
}

 export type AuthenticationData = {
    id: string
 } 
 
 export interface ProductInputDTO{
    name: string,
    tags: string
 } 

 
   
