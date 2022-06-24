export enum USER_TYPE{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number, 
    name: string, 
    email: string, 
    type: USER_TYPE,
    age: number
}


export let users :User[] = [
 {
        id: 5,
        name: "Marta",
        email: "marta@email.com",
        type: USER_TYPE.ADMIN,
        age: 17,
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_TYPE.NORMAL,
        age: 60,
    }
]
