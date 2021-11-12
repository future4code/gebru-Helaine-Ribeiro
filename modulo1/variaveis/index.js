// exercicio 1
//1. Analise o programa abaixo e diga o que será impresso no console
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
//codigo imprimido 10 10 e 5

let a = 10
let b = 20
c = a
b = c
a = b
//codigo imprimido 10 10 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
// declarando novo nome para variavel
let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasPorDia/salarioDia} por hora`)

//Exercícios de escrita de código
//a) Declare uma variável para armazenar um nome, sem atribuir um valor.
const nome
//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade
//c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
typeof nome //string
typeof idade //number
//e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual sua idade?")
//f) imprima na tela o tipo dessas variáveis. 
console.log = prompt(nome)
console.log = prompt(idade)
//g) imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
const nome = "Helaine"
const idade = 34
console.log("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos")
