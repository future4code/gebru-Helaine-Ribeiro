
//exercicio 1
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    const salariofixo = 2000
    const comisao = 100 
    const salarioFinal = salariofixo  + (comisao *qtdeCarrosVendidos) + (valorTotalVendas * 0.05);
  
   return salarioFinal
    
  }

  //exercicio 2
  function calculaPrecoTotal(quantidade) {
 
  
    if(quantidade < 12) {
        
      }else {
        
      }
        
    
      
      }

  //exercicio 3
        
  function calculaNota(ex, p1, p2) {
    const media = ((ex * 1) + (p1 * 2) + (p2 * 3))  / (1 + 2 + 3 )
    
    if (media >= 9){
      return "A"
    }else if (media < 9 && media >= 7.5){
    return "B"
  }else if (media < 7.5 && media >= 6){
    return "C"
  }else if (media < 6) {
    return "D"
  }
}

//exercicio 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const numbers = []
  arrayDeNumeros.forEach((number)=>{
    number === numeroEscolhido ? numbers.push(numeroEscolhido) : null
  })
  return numbers.lenght > 0 ?  (`O número ${numeroEscolhido} aparece ${numbers.lenght} x `) : ("Número não encontrado ")


}

//exercicio 5
function criarArrayNomesAnimais() {
  const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]

const nomesDosAnimais = animais.map((animals)=>{
return animals.nome
})
return nomesDosAnimais
}

//exercicio 6

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

const filtraTarefasTerminadas = tarefas.filter((tarefa)=>{
  return tarefa. status === "done"
})

const tarefasTerminadas = filtraTarefasTerminadas.map((tarefa)=>{
  return tarefa.titulo
})
return tarefasTerminadas
}





