import { app } from "./app";
import {  getAllUsers, getAllUsers2} from "./getAllUser";

app.get("/users", getAllUsers)

app.get("/users/:type", getAllUsers2)
