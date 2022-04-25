
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    
    return ` No comparador de igualdade ${a} === ${b} é ${ a === b}`
    
}
 console.log(checarIgualdade(2,3))

// c-)Faça uma função chamada "verificaSeEMaior"
const verificaSeEMaior=(a,b)=>{
    return a>b
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=true
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsario, anoDeNascimento,senhaDoUsuario,nacionalidade) => {
    
    const usuario = []
    
    const idade= 2022-anoDeNascimento


    if (idade > 18 && nacionalidade == "brasileira" && senhaDoUsuario.length > 6  && nomeDoUsario.length >3){
        usuario = "usuário cadastrado"
        
    }else  {
        console.log("usuário não pode se cadastrar")
    }
    

  
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"

    if(login === "labenu"){
        console.log("Usuário Logado")
    }else{
        console.log("Senha Inválida")
    }
        

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = ()=> {
  const coronavac = 28
  const astrazenica = 90 
  const pfizer = 90

  const usuario =[
      {
          nome: "Pool",
          vacina: "astrazenica",
          data: "01/08/2021" 
      }
  ]

  
  const now = new Date(); // Data de hoje
  const past = new Date(data); // Outra data no passado
 //O método javascript de abs() retorna um valor absoluto de um determinado número.
  let data = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
  //a função ceil() arredonda um número para cima e retorna um valor inteiro.
  let tempo = Math.ceil(data / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos 
  //correspondentes a 1 dia. (1000 milisegundos = 1 segundo).Mostra a diferença em dias

   if(vacina == coronavac){
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
   
}else if(vacina == astrazenica){
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
   
}else if(vacina == pfizer){
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
   }
   
    
    
}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }

    ]
    usuarios.forEach(item=>{
        item.imunizacao = "concluida"
    }) 
      

    
      


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro1 = () => {
    //  Sua lógica aqui
}
console.log(cadastro1());

const login1 = () => {
    //  Sua lógica aqui
}
console.log(login1());

const primeiraDose1 = () => {
//  Sua lógica aqui
}
console.log(primeiraDose1())
const segundaDose1 = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose1("ALGUM NOME AQUI"));

const avisoAosAtrasados1 = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados1());