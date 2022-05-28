/* Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. 
Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Exemplo:

 type User = {
        cliente:string
        saldoTotal: number
        debitos: number[]
    }

    const valores: User[]=
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const calculaValores = valores.reduce((soma, atual) => soma + atual.valor, 0);
  

console.log(calculaValores);

Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. 
Dessa forma, a sua tarefa é criar uma função que receba este `array` como parâmetro, atualize o saldo total descontando todos
 os débitos e retorne apenas os clientes com saldo negativo. */





/* var valores = [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}, {valor: 1000}];

var resultado = valores.reduce(function (soma, atual) {
  return { valor: soma.valor + atual.valor };
})

console.log(resultado);
//{
  //  "valor": 1015
  //} */
  type User1 = {
    cliente: string,
    saldoTotal: number
    debitos: number[]
}

const valores: User1[]=
[
{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const calculaValores = valores[0].debitos.reduce((soma, atual) => soma + atual, 0);


console.log(calculaValores);