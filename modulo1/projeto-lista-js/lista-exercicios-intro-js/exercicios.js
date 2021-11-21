// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Qual é a altura do retângulo?"))
  let largura = Number(prompt("Qual é a largura do retângulo?"))
  let calculaAreaRetangulo = altura * largura
  console.log(calculaAreaRetangulo)

}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("qual o ano atual?"))
let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
const imprimeIdade = anoAtual - anoDeNascimento
console.log(imprimeIdade)

}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
  /*let pesoKg = Number(prompt("qual é o seu peso?"))
  let alturaMetros = Number(prompt("qual é a altura?"))
  let imc = pesoKg / (alturaMetros * alturaMetros)
  console.log("seu imc é", imc)*/
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const NOME = prompt("Qual é o seu nome?")
  const IDADE =prompt("Qual é a sua idade?")
  const EMAIL = prompt("Qual é o seu email?")
  
  console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL} .`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Quais são suas cores favoritas?")
  const cor2 = prompt("Quais são suas cores favoritas?")
  const cor3 = prompt("Quais são suas cores favoritas?")

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
/*const StringEmMaiuscula = "oi"
StringEmMaiuscula.toUpperCase()*/
//toLowerCase:usado para transformar em minuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return  custo / valorIngresso
  /*const custoEspetaculoTeatro = "3000"
  const valorCadaIngresso = "100"
  console.log(custoEspetaculoTeatro / valorCadaIngresso)*/
  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 
  let firstStringsMesmoTamanho = string1.lenght
  let secondStringsMesmoTamanho = string2.lenght
  return firstStringsMesmoTamanho === secondStringsMesmoTamanho

  
}
console.log(StringsMesmoTamanho("string1", "string2")) || retorna true
console.log(StringsMesmoTamanho("string1", "string2")) || retorna false

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array1 = [array]

  const primeiroElemento = array1.shift()
  
  console.log(array1)

  const retornaPrimeiroElemento = [array]

console.log(retornaPrimeiroElemento.length)
const primeiro = retornaPrimeiroElemento[0]


const ultimo = retornaPrimeiroElemento[retornaPrimeiroElemento.length - 1]

}
  console.log(primeiroElemento)


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array = array.replace(array[0], array[array.length -1])
return array
}
array.push(array.splice(a,1)[0]);
console.log (array)
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual é o ano atual?"))
const anoDeNascimento = Number(prompt("Em que ano você naceu?"))
const anoCarteiraEmitida = Number(prompt("Qual ano sua carteira foi emitida?"))

const idade = anoAtual - anoDeNascimento
const checarValidadeEmitida =  anoAtual - anoCarteiraEmitida
const checaRenovacaoRG = idade - checarValidadeEmitida
return checaRenovacaoRG()
}
console.log
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}