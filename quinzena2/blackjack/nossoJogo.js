/* Sem a aula de loops:
console.log("Bem vindo ao jogo de Blackjack!")

let carta1 = comprarCarta() // carta do usuário
let carta2 = comprarCarta() // carta do usuário
let carta3 = comprarCarta() // carta do pc
let carta4 = comprarCarta() // carta do pc

let inicioDoJogo = confirm("Quer iniciar uma nova rodada?")

if (inicioDoJogo === true) {
   console.log("Usuário-cartas:" + carta1.texto, carta2.texto + " pontuação:" + (carta1.valor + carta2.valor))
   console.log("Computador-cartas:" + carta3.texto, carta4.texto + " pontuação:" + (carta3.valor + carta4.valor))
} else {
   console.log("O jogo acabou.")
}

let somaCartasUsuario = carta1.valor + carta2.valor
let somaCartasComputador = carta3.valor + carta4.valor

if (somaCartasUsuario === somaCartasComputador && inicioDoJogo === true) {
   console.log("Empate!")
} else if (somaCartasUsuario > somaCartasComputador && inicioDoJogo === true) {
   console.log("O usuário ganhou!")
} else if (somaCartasComputador > somaCartasUsuario && inicioDoJogo === true){
   console.log("O computador ganhou!")
}*/

// Após a aula de loops

const cartas = []

console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
    //Comprando quatro cartas
for (let index = 0; index < 4; index++) {
    cartas[index] = comprarCarta()  
}    

// somando o valor das cartas
const usuario = (cartas[0].valor + cartas[1].valor)
const computador = (cartas[2].valor + cartas[3].valor)

// imprimindo a pontuação de cada jogador
console.log("Usuário - cartas", cartas[0].texto, cartas[1].texto, " - pontuação - ", usuario)
console.log("Computador - cartas", cartas[1].texto, cartas[2].texto, " - pontuação - ", computador)

//verificando quem venceu o jogo
if (usuario === computador) {
    console.log('Empate!')
} else {
    if (usuario > computador) {
        console.log("O usuário ganhou!")
    } else {
        console.log("O computador ganhou!" )
    }
}
} else {
    console.log("O jogo acabou.")
}