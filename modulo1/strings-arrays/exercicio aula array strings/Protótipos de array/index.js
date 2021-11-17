// Propriedade length: determina o tamanho de um array
const cores = ['amarelo', 'verde', 'azul', 'roxo', 'rosa']

// Propriedade length
const tamanhoDoArray = cores.length
console.log(tamanhoDoArray)
//OU, ao invés de colocar em uma variável, podemos chamar o length direto no console.log
console.log(array.length)

// Propriedade includes
const cores = ['amarelo', 'verde', 'azul', 'roxo', 'rosa']

seriesBoas.includes("rosa") 
seriesBoas.includes("branco")

// Push
const adicionaCor = cores.push("vermelho")
console.log('Adicionando cor vermelho:', adicionaCor)

// Removendo a última posição do array com pop
const removeUltimoElemento = cores.pop()
console.log('Cor vermelho removida', removeUltimoElemento)

// Remove quantidade de indexes estabelecidos
const removeElementos = cores.splice(2, 2)
console.log(removeElementos)
