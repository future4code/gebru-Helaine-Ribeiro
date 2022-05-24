/*Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

a) A soma desses números

b) A subtração desses números

c) A multiplicação desses números

d) Qual deles é o maior*/



function operacao(num1:number, num2:number): void {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 + num2)
    console.log(num1 > num2)
}

console.log(operacao(5,6)) 