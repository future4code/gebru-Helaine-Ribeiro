
import { app } from "./controller/APP"
import { pokemonRouter } from "./router/PokemonRouter"




//app.use('/pokemon',pokemonRouter.post("/insert"))
//app.use('/pokemon',pokemonRouter.post("/create"))
app.use("/pokemon", pokemonRouter)
