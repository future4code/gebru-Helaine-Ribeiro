/*  //import knex from 'knex'
import dotenv from 'dotenv'
import { connection } from '..'

dotenv.config()

export abstract class BaseDatabase {

  protected static connection = connection
    }  */


import Knex from "knex";   
import dotenv from "dotenv";

dotenv.config()

export  class BaseDataBase{

  protected static connection = Knex({
    client: "mysql",
    connection:{
      host: process.env.DB_HOST ,
          port: 3306,
          user: process.env.DB_USER ,
          password: process.env.DB_PASSWORD ,
          database: process.env.DB_SCHEMA  
 
    }
  })
}

 