// Exercícios de interpretação:

// 1) Será impresso no console: 
// 10 -> referente ao console.log(b).
// 10 5 -> referente ao console.log(a, b).

// 2) Será impresso no console: 
// 10 10 10 -> referente ao console.log(a, b, c).

// 3) let p poderia se chamar horasDeTrabalhoPorDia e let t poderia se chamar ganhoPorDia.

// Exercícios de escrita de código:

// 1)

let nome 
let idade 

console.log (typeof nome) // undefined
console.log (typeof idade) // undefined

// O resultado foi este para as duas variáveis pois não foi atribuido nenhum valor para elas. 
// Ps.: O null também representa a falta de valor de uma variável, mas a diferença é que precisa estar associado à mesma. 

nome = prompt ("Qual é o seu nome?")
idade = prompt ("Qual é a sua idade?") 

console.log (typeof nome) // string
console.log (typeof idade) // string

// Ocorreu a mudança de valor das variáreis de undefined para string, provavelmente porque foi atribuido o valor de uma pergunta para elas, ou seja, algo escrito entre aspas.

console.log ("Olá", nome, ",você tem", idade, "anos.")

// 2)

let perguntas

perguntas = prompt("Você é aluno da turma Johnson da Labenu?")
perguntas = prompt("Você já trabalhou com TI antes?")
perguntas = prompt("Você está gostando do curso?")

let resposta1 = ("Sim")
let resposta2 = ("Não")
let resposta3 = ("Sim")

console.log ("Você é aluno da turma Johnson da Labenu?", resposta1)
console.log ("Você já trabalhou com TI antes?", resposta2)
console.log ("Você está gostando do curso?", resposta3)

// 3)

let a = 10
let b = 25
let c = a
a = b
b = c

console.log (a)
console.log (b)
