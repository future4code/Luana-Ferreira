//Exercícios de interpretação de código:

// Exercício 1:
// console.log("a. ", resultado) => o resultado será: false.
// console.log("b. ", resultado) => o resultado será: false.
// console.log("c. ", resultado) => o resultado será: true.
// console.log("d. ", typeof resultado) => o resultado será: boolean. 

// Exercício 2:
// O problema é que ele não usou a conversão para Number, mantendo assim as entradas como strings, e ao usar o símbolo
// da soma realizou uma concatenção entre as strings (que é a prioridade de leitura da máquina). Portanto, o que será 
// impresso no console são os dois números que o usuário informar e não a soma entre eles. Ex: primeiroNumero = 22 e 
// segundoNumero = 23, o console.log seria: 2223.

// Exercício 3:
/*let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = (primeiroNumero + segundoNumero)

console.log(soma) => A solução é o que já foi mencionado na questão anterior, converter a string que será digitada 
para number */

// Exercícios de escrita de código:

// Exercício 4:
 let idadeDoUsuário = Number (prompt("Digite a sua idade."))
 let idadeDoMelhorAmigo = Number (prompt("Digite a idade do seu/sua melhor amigo/a ."))

 console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuário > idadeDoMelhorAmigo)
 console.log (idadeDoUsuário - idadeDoMelhorAmigo)

 // Exercício 5:
 let numeroPar = Number (prompt("Digite um número par."))
 console.log (numeroPar % 2)

 // c) O padrão é de que todos os restos foram e sempre vão ser zero neste caso de divisão por 2.
 // d) Se o usuário inserir um número ímpar o resto será sempre 1, pois a máquina divide duas partes iguais restando
 // sempre 1 como resto.

 // Exercício 6:
 let idade = Number (prompt("Informe a sua idade em anos."))
 console.log ("Idade em meses:", idade * 12)
 console.log ("Idade em dias:", idade * 365)
 console.log ("Idade em horas:", idade * 8760)

 // Exercício 7:
 let numero1 = Number (prompt("Digite um número."))
 let numero2 = Number (prompt("Digite outro número."))
 console.log ("O primeiro número é maior do que o segundo?", numero1 > numero2)
 console.log ("O primeiro número é igual ao segundo?", numero1 === numero2)
 console.log ("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
 console.log ("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0) 