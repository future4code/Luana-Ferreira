// Exercícios de interpretação de código

// 1)

// a) O código testa se o número digitado pelo usuário é múltiplo de 2 já que realiza a operação do resto, ou seja, divide
// o número digitado por 2 e entrega o valor do resto, se for igual a zero o teste retorna que o mesmo passou, se não for 
// 0 retorna que não passou no teste.

// b) Retorna que passou para os números pares.

// c) Retorna que não passou para os números ímpares.

// 2)

// a) Serve para o usuário ser informado sobre o preço da fruta que digitou.

// b) O console.log retorna: "O preço da fruta maçã é R$2,25"

// c) O que será impresso no console ao retirar o break é a fruta com o último preço informado.
// "O preço da fruta pêra é R$5" ao invés de 5,5.

// 3)

// a) A primeira linha está solicitando que o usuário digite um número.

// b) Se o usuário digitar 10 o console retorna que o mesmo passou no teste, se digitar -10 o console não retorna nada
// pois não um "else" na condição.

// c) Sim, ocorre um erro pois a variável "mensagem" foi definida em um escopo do qual o console.log não tem acesso caso 
// seja escrito fora do mesmo.


// Exercícios de escrita de código

// 1)

const idadeUsuario = Number(prompt("Qual a sua idade?"))

if (idadeUsuario >= 18) {
console.log("Você pode dirigir")
} else {
console.log("Você não pode dirigir")
}

// 2)

let turnoDoAluno = prompt("Em que turno você estuda?Digite M para matutino, V para vespertino ou N para noturno.").toLowerCase()

if (turnoDoAluno === "M"){
    console.log("Bom dia!")
} else if (turnoDoAluno ==="V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!") 
} 

// 3)

switch (turnoDoAluno){
case "M":
console.log("Bom dia!")
break
case "V":
console.log("Boa tarde!")
break
case "N":
console.log("Boa noite!")
break
}

// 4)

let generoDoFilme = prompt("Qual gênero de filme você e seu amigo(a) vão assistir no cinema?").toLowerCase()
let precoDoIngresso =Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
    console.log("Bom filme!") 
} else { console.log("Escolha outro filme :(")
}