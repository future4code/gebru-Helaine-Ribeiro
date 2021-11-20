//Exercícios de interpretação de código
//1. Leia o codigo:
/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

//a) O que vai ser impresso no console?
//10, 50
//b) O que aconteceria se retirasse os dois `console.log` e simplesmente 
//invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//50

//2. Leia o código abaixo:
/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//a. Explique o que essa função faz e qual é sua utilidade
/*toLowerCase()retorna o valor da string original convertido para minúsculo
includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente*/

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     true
     ii.  `CENOURA é bom pra vista`
    true
     iii. `Cenouras crescem na terra`*/

//Exercícios de escrita de código
// 1. Escreva as funções explicadas abaixo:
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
function imprimeInformacoesUsuario(){

console.log ("Eu sou Helaine, tenho 34 anos, moro em Mozarlândia e sou estudante") 
}    

imprimeInformacoesUsuario()



//b)  Agora  que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
 function meusDados(nome, idade, cidade, profissão){
console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e sou ${profissão} .`)
 }
 meusDados("Helaine", "40", "Mozarlândia", "estudante")
/* 2. Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function somar(num1, num2){
     console.log(num1 + num2)
}
somar(40 + 50)

function somar (num1, num2){
     return((num1 + num2)
}
console.log(num1 + num2)
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
const comparar = (num1 + num2) =>{
     console.log(num1 >= num2)
}
comparar(6 , 8)
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function numeroPar(numero){
     const par = (numero % 2 === 0)
     console.log(par)
}
numeroPar(3)
d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */
//Lembre-se de converter a entrada do usuário para número antes de fazer os cálculos :)
/*function soma() {
     const numUsuario1 = Number (prompt ("Digite um numero"))
     const numUsuario2 = Number (prompt (" Diga outro numero"))
     const resultado1 = numUsuario1 + numUsuario2
     return resultado1
   }  
    console.log (soma(resultado1))*/