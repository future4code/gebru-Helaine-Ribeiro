export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class invalidPokemon extends CustomError {
    constructor() {
        super(404, "Has no pokemons")
    }
}

export class MissingFieldsToComplete extends CustomError {
    constructor() {
        super(401, "Missing fields to complet")
    }
} 
