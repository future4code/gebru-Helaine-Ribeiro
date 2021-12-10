// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 
    return array.sort((a, b) => {
      return a - b
    })
    
    }



// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = array.filter(N => N % 2 ===0)
 return numerosPares
  
  }
  
   
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
//A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.

let numerosPares = array.filter(pares => (pares%2) === 0).map(pares => (pares**2))
return numerosPares
     
  }

//return Math.pow(array, 2); //retorna o item original elevado ao quadrado


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  //A função apply é usada para chamar outra função, com um determinado contexto e argumentos, 
  //fornecidos como uma matriz.
//Math.max-numero maior Math.min-numero menor
  return Math.max.apply(Math, array);

}
  




// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1,num2)
  const menorNumero = Math.min(num1, num2)
  const objeto = {
    maiorNumero : maiorNumero,
    maiorDivisivelPorMenor :maiorNumero % menorNumero === 0,
diferenca : maiorNumero - menorNumero,
  }
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numerosPares = []
  for(let num = 0; numerosPares.length < n; num ++){
    if(num %2 ===0){
      numerosPares.push(num)
      console.log(num)
    }
  } 
  return numerosPares
}




// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  
  if(ladoA <(ladoB+ladoC) && ladoB < (ladoA+ladoC) && ladoC <(ladoA+ladoB) ){

  if(ladoA == ladoB && ladoA == ladoC){
    return "Equilátero";

  }else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
    return "Isósceles";

  }else {
    return "Escaleno"
  }
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
let novoArray = array.sort()//sort ordena a lista do menor para o maior
 
let tamanho = novoArray.length//retorna o tamanho do array original

let segundoMenor = novoArray[1]//pega a segunda posição do array,que após ordenado irá conter o segundo menor

let segundoMaior = novoArray[tamanho-2]//calcula calcula a penultima posição do array através do seu tamanho

return segundoMenor, segundoMaior

  }
  
  

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

console.log(filme(`Venha assistir ao filme ${nome}, de 2006, dirigido ${diretor}`))



// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}