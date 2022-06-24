/* Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 
Crie um `type` para os usuários

- **Dica 2**
    
    Use os métodos `filter` e `map`
- **Entradas/Saídas**
    
    ```tsx
    input: type[]
    output: string[]
    ``` */

    type User = {
        name:string
        email: string
        role: string
    }

   const usuarios: User[]=
        [
            {name: "Rogério", email: "roger@email.com", role: "user"},
            {name: "Ademir", email: "ademir@email.com", role: "admin"},
            {name: "Aline", email: "aline@email.com", role: "user"},
            {name: "Jéssica", email: "jessica@email.com", role: "user"},  
            {name: "Adilson", email: "adilson@email.com", role: "user"},  
            {name: "Carina", email: "carina@email.com", role: "admin"}      
        ] 
    
        const pegarUsuario= usuarios.filter(users=> users.role =="admin")
        pegarUsuario.forEach(users=>{
            console.log(users)
        })

 