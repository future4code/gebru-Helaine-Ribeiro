import express from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonController } from "../controller/PokemonController";
import { PokemonDatabase } from "../data/PokemonDatabase";


export const pokemonRouter = express.Router()


const pokemonDataBase = new PokemonDatabase()
const pokemonBusiness = new PokemonBusiness(pokemonDataBase)
const pokemonController = new PokemonController(pokemonBusiness)

pokemonRouter.post("/insert", (req, res) => pokemonController.insertPokemonController(req, res))
//userRouter.post("/login", (req, res) => pokemonController.loginController(req, res))
//userRouter.get("/user", (req, res) => pokemonController.findUserController(req, res))
//userRouter.get("/user/:id", (req, res) => pokemonController.getUserByIdController(req, res))