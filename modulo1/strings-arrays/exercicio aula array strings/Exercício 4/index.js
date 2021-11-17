// Comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
const array = [1,2,3,4,5,6]

// Determine o tamanho do array
const tamandoDoArray = array.length
console.log('O tamanho do array é:', tamandoDoArray)

// Adicione o número 7
const adicionarNumero = array.push(7)
console.log(adicionarNumero)

// Remova os números 4 e 5
const removeDoisNumeros = array.splice(3,2)
console.log("Números 4 e 5 removidos:", removeDoisNumeros)
console.log("Números 4 e 5 removidos:", array)

// Determine o novo tamanho do array
const novoTamanhoArray = ("O novo tamanho do array é:", array.length)
console.log(novoTamanhoArray)
