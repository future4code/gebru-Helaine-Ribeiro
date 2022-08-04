import express from 'express'
import { MovieBusiness } from '../business/MovieBusiness'
import { MovieController } from '../controller/MovieController'
import { MovieDatabase } from '../data/MovieDatabase'

export const movieRouter = express.Router()

const movieDatabase = new MovieDatabase()
const movieBusiness = new MovieBusiness(movieDatabase)
const movieController = new MovieController(movieBusiness)

movieRouter.post("/createMovie",(req,res)=> movieController.createMovie(req,res))

//const movieController = new MovieController()

//movieRouter.post("/createMovie", movieController.createMovie)