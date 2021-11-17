// Peça para o usuário escrever uma frase e imprima no console a frase alterada
const frase = prompt("Escreva uma frase")

// Todas as letras maiúsculas
const letrasMaiusculas = frase.toUpperCase()
console.log("Frase em caixa alta: ",letrasMaiusculas)

// Na língua do i (substituindo todas as vogais por i)
const semVogalO = frase.replaceAll("o", "i")
console.log("Sem vogal O: ", semVogalO)

const semVogalMaiusc = frase.toLowerCase().replaceAll("o", "i")
console.log("Sem vogal O maiúscula: ", semVogalMaiusc)

// Retorne também o tamanho da frase.
const tamanhoDaFrase = (`A frase contém ${frase.length} caracteres.`)
console.log(tamanhoDaFrase)


