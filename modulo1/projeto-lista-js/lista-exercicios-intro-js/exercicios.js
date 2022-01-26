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

  const altura = prompt("Qual é a altura do retângulo?")
  const largura = prompt("Qual é a largura do retângulo?")
  
  console.log(altura * largura)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = prompt("qual o ano atual?")
  let anoDeNascimento = prompt("Qual seu ano de nascimento?")
  
  console.log(anoAtual - anoDeNascimento)
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
  /*let pesoKg = prompt("qual é o seu peso?")
  let alturaMetros = prompt("qual é a altura?")
  let imc = pesoKg / (alturaMetros * alturaMetros)
  console.log("seu imc é", imc)*/

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const NOME = prompt("Qual é o seu nome?")
  const IDADE = prompt("Qual é a sua idade?")
  const EMAIL = prompt("Qual é o seu email?")
  
  console.log('Meu nome é' + NOME, + 'tenho' + IDADE + 'anos', + 'e o meu email é' + EMAIL, + '.')

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

  const string1 = "ola"
  const string2 = "abc"
  var status = (idade >= 18) ? "adulto" : "menor de idade";
  console.log()

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}