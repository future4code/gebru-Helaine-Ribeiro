// Crie um array com pelo menos 5 raças de cachorro
const listaDeCachorros = ["poodle", "pastor alemão", "beagle", "caramelo", "vira-lata"]

// Peça para o usuário inserir um número de 1 a 5
const respostaUsuario = Number(prompt("Sorteio de raças: escolha um número 1 a 5"))

// Imprima no console a raça correspondente à posição escolhida pelo usuário
const resultado = `A raça escolhida foi ${listaDeCachorros[respostaUsuario -1]}`
console.log(resultado)






