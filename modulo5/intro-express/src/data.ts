type User={
    id: number
    name: string
    phone: string
    email: string
    website: string
    }
    
    export const usuarios: User[]=[{
        id: 1,
        name: "juju",
        phone: "1111",
        email: "juju@gmail",
        website: "juju.info",
        },
        {
          id: 2,
        name: "vivi",
        phone: "222",
        email: "vivi@gmail",
        website: "vivi.info",
        },
        {
          id: 3,
        name: "bil",
        phone: "333",
        email: "bil@gmail",
        website: "bil.info",
        }
        ]
        
 type Posts={
            id:number,
            title:string,
            body:string,
            userId:number
          }
          
 export const posts: Posts[]=[{
            id: 11,
            title:"português",
            body:"matéria",
            userId:22
            },
            {
              id: 12,
              title:"matematica",
              body:"matéria",
              userId:32
            },
            {
              id: 13,
              title:"inglês",
              body:"matéria",
              userId:42
            }
            ]