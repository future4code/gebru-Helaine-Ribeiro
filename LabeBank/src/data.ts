export type ContaUsuario = {
    id: string ,
    name: string,
    cpf: string,
    dataNascimento:string,
    
 } 
 
export type Extrato  = {
    valor: number,
    data: string,
    descrição: string
 }


 export type Info = ContaUsuario[] & Extrato[]

export const users: Info=[{
    id: "1" ,
    name: "marta sol",
    cpf: "111.111",
    dataNascimento:"12/5/1996",
    saldo:0,
    valor: 121,
    data: "9/5/2022",
    descrição: "saldo atual"
}

 ]
    