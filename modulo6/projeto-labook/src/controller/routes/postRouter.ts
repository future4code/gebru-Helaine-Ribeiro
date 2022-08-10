 /* import express from "express";
import { PostBusiness } from "../../business/postBusiness";
import { PostsDataBase } from "../../data/PostsDataBase";
import { PostController } from "../postController";







export const userRouter = express.Router()

const postDatabase = new PostsDataBase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

userRouter.post('/post', (req, res)=> postController.createPost(req, res)) 
  */