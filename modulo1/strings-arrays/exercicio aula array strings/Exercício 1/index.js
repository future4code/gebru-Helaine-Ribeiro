// Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e imprima a mensagem: 
// "A cor favorita de FULANO é COR"

// Faça o exercício duas vezes, utilizando template strings e concatenação


const nome = prompt("Informe seu nome:")
const cor = prompt("Informe sua cor favorita:")

const fraseConcatenada = "A cor favorita de " + nome + " é " + cor
console.log(fraseConcatenada)

const templateString = `A cor favorita de ${nome} é ${cor}`
console.log(templateString)


