export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}


export class invalidAuthenticatorData extends CustomError {
    constructor() {
        super(400, "Unauthorized user")
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

export class Unauthorized extends CustomError { 
    constructor(){
        super(401, 'Unauthorized user')
    }
}

export class UnathorizedUser extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }
}

export class invalidProduct extends CustomError {
        constructor() {
            super(404, "Has no products")
        }
    }
