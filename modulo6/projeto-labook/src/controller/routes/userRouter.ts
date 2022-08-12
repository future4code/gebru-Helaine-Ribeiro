 import express from "express";
import { UserBusiness } from "../../business/userBusiness";
import { UserDatabase } from "../../data/UserDataBase";
import { UserController } from "../userController";




export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post('/users', userController.createUser) 
 