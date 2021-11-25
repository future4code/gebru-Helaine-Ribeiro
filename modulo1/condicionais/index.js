//Exercícios de interpretação de código

/*Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
pode rodar no seu computador para analisar e pensar sobre o resultado.*/
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//compara se  o numero que o usuario der é for 0 ou de 2 em dois
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//numeros par
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//numeros impares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado:
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/
/*a) Para que serve o código acima?
para motrar o preço da fruta escolhida pelo usuario
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
"O preço da fruta Maçã  é R$ 2.25
c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console 
se retirássemos o break que está logo acima do default 
(o break indicado pelo comentário "BREAK PARA O ITEM c.")?*/
//sera impresso 5 

//3. Leia o codigo abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*a) O que a primeira linha está fazendo?
está pedindo que o usuário digite um numero
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
dará erro
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.*/
//sim , porque no escopo tem uma variavel declarada após o console,log

//💡Exercícios de escrita de código

/*1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
se ele/ela pode dirigir (apenas maiores de idade).*/
   
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    let idade = Number(prompt("Qual sua idade?"))
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
//caso contrário, imprima `"Você não pode dirigir."`
if(idade >=18){
    console.log("Você pode dirigir")
}

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    let turnoAula = prompt("Em qual turno você estuda? M/V/N").toUpperCase()

    if(turnoAula === "M"){
            console.log("Bom dia!")

    }else if(turnoAula === "V"){
        console.log("Boa tarde!")
        
    }else if(turnoAula === "N"){
            console.log("Boa noite!")
             
                    
    }


//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turnoAula = prompt("Em qual turno você estuda? M/V/N").toLocaleLowerCase()

    switch(turnoAula){
        case "M":
            console.log("Bom dia!")
            break
            case "V":
                console.log("Boa tarde!")
                break
                case "N":
                    console.log("Boa noite!") 
                    break
                    
    }
    
/*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá 
a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("*/

const generoFilmeColega = prompt("qual o gênero de filme que vão assistir?").toLocaleLowerCase() === "fantasia"
const preçoIngresso = Number(prompt("qual o preço do ingresso?")) <= "15"

const assistirFilme = (generoFilmeColega, preçoIngresso)=>{
    if(generoFilmeColega && assistirFilme){
console.log("Bom filme!")
    }else {
console.log("Escolha outro filme")
    }
}
assistirFilme(generoFilmeColega, preçoIngresso)



