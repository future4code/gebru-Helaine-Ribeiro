
// A propriedade length nos diz qual é o tamanho de uma string, incluindo espaços
const hobbie = "Aos domingos gosto de ir ao parque, geralmente vou ao parque com meu cachorro"
console.log('A frase tem ' + hobbie.length + " caracteres.")

// Propriedade toLowerCase transforma todas as letras em minúsculas
const falandoBaixo = "Olá, Tudo bem? :D"
console.log(falandoBaixo.toLowerCase())

// Propriedade toUpperCase transforma todas as letras em maiúsculas
const gritando = "Olá, Tudo bem? :D"
console.log(gritando.toUpperCase())

// Propriedade trim tira todos os espaços extras da string
const email = "     luana@gmail.com        "
console.log("Sem trim:", email)
console.log("Com trim:", email.trim())

// Propriedade includes pesquisa determinada string dentro da frase, retorna true
const frase = "Aos domingos gosto de ir ao parque, geralmente vou ao parque com meu cachorro"

const pesquisa = frase.includes("parque")
console.log(`O resultado é: ${pesquisa}`)

// Propriedade replaceAll substitui palavras da string
const novaFrase = frase.replaceAll('parque', 'jogo de futebol')
console.log('Frase antiga:', frase)
console.log(novaFrase)