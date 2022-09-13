export type authenticationData = {
    id: string
 }
 
 export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }
 
 export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 

 export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Number,
    authorId: string
 }
 
/*  export class User {
   constructor(
     private id: string,
     private name: string,
     private email: string,
     private password: string
   ) { }
   
   getId() {
     return this.id
   }
 
   getName() {
     return this.name
   }
 
   getEmail() {
     return this.email
   }
 
   getPassword() {
     return this.password
   } */
 