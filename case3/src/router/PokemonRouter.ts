import express from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonController } from "../controller/PokemonController";
import { PokemonDatabase } from "../data/PokemonDatabase";


export const pokemonRouter = express.Router()


const pokemonDataBase = new PokemonDatabase()
const pokemonBusiness = new PokemonBusiness(pokemonDataBase)
const pokemonController = new PokemonController(pokemonBusiness)

// insere o arquivo pokemon.xlsx no banco de dados  
pokemonRouter.post("/insert", (req, res) => pokemonController.insertPokemonController(req, res))
// cria um novo pokemon 
pokemonRouter.post("/create", (req, res) => pokemonController.createPokemonController(req, res))

// pega pokemons

pokemonRouter.get("/get", (req, res) => pokemonController.getPokemonController(req, res))

// pega pokemon pelo nome
pokemonRouter.get("/get/:name", (req, res) => pokemonController.getPokemonByNameController(req, res))
// pega pokemon pelo id
pokemonRouter.get("/get/:id", (req, res) => pokemonController.getPokemonByIdController(req, res))
//deleta
pokemonRouter.delete("/delete/:id", (req, res) => pokemonController.deletePokemonByIdController(req, res))
// altera o pokemon
pokemonRouter.put("/change/:id", (req, res) => pokemonController.changePokemonController(req, res))

