/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartas = []

console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
    //Comprando quatro cartas
for (let index = 0; index < 52; index++) {
    cartas[index] = comprarCarta()  
}    

// somando o valor das cartas
const usuario = (cartas[0].valor + cartas[1].valor)
const computador = (cartas[2].valor + cartas[3].valor)

// imprimindo a pontuação de cada jogador
console.log("Usuário - cartas", cartas[0].texto, cartas[1].texto, " - pontuação - ", usuario)
console.log("Computador - cartas", cartas[2].texto, cartas[3].texto, " - pontuação - ", computador)

//verificando quem venceu o jogo
if (usuario === computador) {
    console.log("Empate!")
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

// verificando se as cartas sorteadas são A 

if (cartas[0].texto === "A" && cartas[1].texto === "A") {
   cartas.push(comprarCarta())  }
else if (cartas[2].texto === "A" && cartas[3].texto === "A"){
   cartas.push(comprarCarta())
}

// verificando se quer continuar 

let continuarOJogo = confirm("Suas cartas são " +  cartas[0].texto  +  cartas[1].texto + ". A carta revelada do computador é " +  cartas[2].texto + "\n" + "Deseja comprar mais uma carta?")

// parei no 9

