//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)// undefined

array = null
console.log('b. ', array)// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) // array(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

//2. Leia o código abaixo com atenção
/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?*/
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//🏅  Desafios
/*1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, 
ignorando os espaços*/


/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que
 acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array*/
