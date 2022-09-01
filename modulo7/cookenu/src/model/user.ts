export type user ={
    id: string
    name: string
    email: string,
    password: string
}

export interface UserInputDTO {
    name:string
    email: string,
    password: string

 }

 export type Post = {
    id: string,
    title:string
    description: string ,
    cratedAt:Date
}

export interface PostInputDTO {
    title:string
    description: string,
    cratedAt:Date
}

 export interface LoginUserInputDTO {
    email: string,
    password: string
 }
 
 export interface EditUserInputDTO {
    name: string,
    id: string
 }
 
 export interface EditUserInput {
    name: string,
    id: string
 }