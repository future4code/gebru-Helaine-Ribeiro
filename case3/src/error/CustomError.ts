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

export class invalidToken extends CustomError {
    constructor() {
        super(400, "Tokem needs to be passed in headers")
    }
}

export class MissingFieldsToComplete extends CustomError {
    constructor() {
        super(401, "Missing fields to complet")
    }
} 
