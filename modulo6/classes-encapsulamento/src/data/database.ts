import knex from "knex";
import dotenv from "dotenv";
import {UserAccount} from "./userAccount";
import { AnyCnameRecord } from "dns";

dotenv.config();

export class Database{
    private connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           port: 3306,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_SCHEMA,
           multipleStatements: true
        }
})

 public getCpf =async()=> {
    try {
        const result = await this.connection("cpf")
        .select("*")
        return result
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
    }
   
}
}