export enum USER_TYPE{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User={
    id: string ,
    name: string,
    email: string,
    type: USER_TYPE,
    age:  number
}

export let users:User[] = [
    {
        id: "1",
        name: "Alice",
        email: "alice@email.com",
        type: USER_TYPE.ADMIN,// sem o enum---- type: "ADMIN",
        age: 12
    },
    {
        id: "2",
        name: "Bob",
        email: "bob@email.com",
        type: USER_TYPE.NORMAL,// sem o enum----- type: "NORMAL"
        age: 36
    },
    {
        id: "3",
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_TYPE.NORMAL,// sem o enum----- type: "NORMAL"
        age: 21
    },
    {
        id: "4",
        name: "Dory",
        email: "dory@email.com",
        type: USER_TYPE.NORMAL,// sem o enum----- type: "NORMAL"
        age: 17
    },
    {
        id: "5",
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_TYPE.ADMIN,// sem o enum---- type: "ADMIN",
        age: 17
    },
    {
        id: "6",
        name: "Fred",
        email: "fred@email.com",
        type: USER_TYPE.ADMIN,// sem o enum---- type: "ADMIN",
        age: 60
    }
]