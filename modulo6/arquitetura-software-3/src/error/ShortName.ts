import { CustomError } from "./CustomError";

export class ShortName extends CustomError {
    constructor(){
        super("nome inválido, precisa ter pelo menos 3 caracteres", 406)
    }
}