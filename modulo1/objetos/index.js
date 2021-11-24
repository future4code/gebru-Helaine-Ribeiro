//Exercícios de interpretação de código
/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. */
//1. Leia o código abaixo:
//a) O que vai ser impresso no console?
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])//Resposta: "Matheus Nachtergaele", 
console.log(filme.elenco[filme.elenco.length - 1])//Resposta: "Virginia Cavendish", 
console.log(filme.transmissoesHoje[2])//Resposta: {canal: "Globo", horario: "14h"} 

//2. Leia o código abaixo:
//a) O que vai ser impresso no console?
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}//... faz uma copia da variável que pode ser modificada

const tartaruga = {...gato, nome: gato.nome.replaceAll/*(troca as letras)*/("a", "o")}

console.log(cachorro)//{nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato)//{nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga)//{nome: 'Jubo', idade: 3, raca: 'SRD'}


//3. Leia o código abaixo:
//a) O que vai ser impresso no console?
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false
console.log(minhaFuncao(pessoa, "altura"))//undeined pq o elemento altura não foi declarado


//🏅Exercícios de escrita de código
//1. 1. Resolva os passos a seguir: 
    
/*a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que 
sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada 
um objeto e imprime uma mensagem no modelo abaixo**:** */
    
    // Exemplo de entrada
    /*const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
    
    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"*/
    const pessoa = {
        nome: "Helaine",
        apelidos: ["Lêlê", "Naninha", "Ninha"]
    }
    const pessoaApelidos=(pessoa)=> {

       const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`

       console.log(frase)  
    }
    pessoaApelidos(pessoa)

/*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade
 nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior 
 passando como argumento o novo objeto*/
 const novaPessoa = {
   ...pessoa, 
    nome: "Helaine",
    apelidos: ["Lê", "Nani", "Ni"] 
}
pessoaApelidos(novaPessoa)

//2. Resolva os passos a seguir: 
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const dadosPessoa1 = {
    nome: "Helaine",
    idade: 34,
    profissão: "costureira"
}
const dadosPessoa2 = {
    nome: "Eliana",
    idade: 35,
    profissão: "gestora"
}


//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:  
   /* 1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo:
        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }
        
        minhaFuncao(pessoa)
        
        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]*/
        
        const informacao=(dadosPessoa1, dadosPessoa2) =>{
            return  [[dadosPessoa1.nome, dadosPessoa1.nome.length, dadospessoa1.idade, dadospessoa1.profissão, dadosPessoa1.profissão.lenght],[dadosPessoa2.nome, dadosPessoa2.nome.length, dadospessoa2.idade, dadospessoa2.profissão, dadosPessoa2.profissão.lenght]]
        
        }
        
            informacao(dadosPessoa1, dadosPessoa2)
    
//3. Resolva os passos a seguir: 
    
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

    const carrinho = []
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
//nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    const compras1 = {
        nome: "laranja",
        disponibilidade: true
    }

    const compras2 = {
        nome: "morango",
        disponibilidade: true
    }
const compras3 = {
    nome: "banana",
    disponibilidade: true
}
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    const compraFrutas = (fruta)=>{
carrinho.push(fruta)
    }
        
    
//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
compraFrutas(compras1)
compraFrutas(compras2)
compraFrutas(compras3)

