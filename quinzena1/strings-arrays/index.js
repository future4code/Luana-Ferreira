// Exercícios de interpretação de código:

// Exercício 1:

// let array
// console.log('a. ', array) => undefined, pois não declarou nenhum valor para a variável.

// array = null
// console.log('b. ', array) => null, pois o valor dado foi este.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) => 11, pois é este o comprimento do array.

// let i = 0
// console.log('d. ', array[i]) => 3, pois é esta a posição 0 no array.

// array[i+1] = 19
// console.log('e. ', array) => a lista inteira pois não há essa quantidade de elementos.

// const valor = array[i+6]
// console.log('f. ', valor) => 9, pois é este o número correspondente pra essa posição.

// Exercício 2:

// O resultado será: "SUBI NUM ÔNIBUS EM MARROCOS" com letras maiúsculas, seguido do número representando a quantidade de caracteres.

// Exercícios de escrita de código:

// Exercício 1:

const nomeDoUsuario = prompt("Informe o seu nome.")
const emailDoUsuario = prompt("Informe o seu e-mail.")

console.log ("O e-mail " +emailDoUsuario+ " foi cadastrado com sucesso. Seja bem vinda(o)," +nomeDoUsuario+ "!")

// Exercício 2:

let comidas1 = ["estrogonofe", "lasanha", "fricassé", "empadão", "escondidinho"]
console.log (comidas1)

console.log ("Essas são as minhas comidas preferidas:")
console.log (comidas1 [0])
console.log (comidas1 [1])
console.log (comidas1 [2])
console.log (comidas1 [3])
console.log (comidas1 [4])

let comidaDoUsuario = String (prompt("Informe uma comida preferida."))
comidas1 [1] = comidaDoUsuario
console.log (comidas1)

// Exercício 3:

let listaDeTarefas = []
let pergunta1 = prompt("Informe uma tarefa que precisa realizar hoje.")
let pergunta2 = prompt("Informe outra tarefa.")
let pergunta3 = prompt("E mais outra.")
listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)
console.log (listaDeTarefas)

let indice = prompt("Digite: 0, 1 ou 2, referente à tarefa que já realizou.")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)


