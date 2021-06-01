// Exercícios de interpretação de código:

// Exercício 1:

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // será impresso 10
console.log(minhaFuncao(10)) // será impresso 50

minhaFuncao(2) // nada será impresso
minhaFuncao(10) // nada será impresso

// Exercício 2:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) Essa função irá imprimir um booleano comparando se o que foi digitado pelo usuário contém o que foi 
// incluído com o includes() e ignorando a case já que foi usado o toLowerCase().

// b) Eu gosto de cenoura. => True
// CENOURA é bom pra vista. => True
// Cenouras crescem na terra. => True */

// Exercícios de escrita de código:

// Exercício 1: 

function informacoesDoUsuario1 () {
    console.log("Eu sou Luana, tenho 22 anos, moro no Rio de Janeiro e sou estudante.")
}

informacoesDoUsuario1()

function informacoesDoUsuario2 (nome,idade,cidade,profissao) {
nome = String (prompt("Insira o seu nome?"))
idade = Number (prompt("Insira a sua idade"))
cidade = String (prompt("Insira a cidade em que reside."))
profissao = String (prompt("Insira a sua profissão."))
console.log("Eu sou " + nome + " tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".")
}

informacoesDoUsuario2 () 

// Exercício 2:

function realizaSoma (numero1,numero2) {
let soma = (numero1 + numero2)
return soma
}

let respostaDaSoma = realizaSoma(1, 2)
console.log (respostaDaSoma) 

function comparaNumeros (numero1,numero2) {
let comparacao = (numero1 >= numero2)
return comparacao
}

let respostaDaComparacao = comparaNumeros (2, 2)
console.log (respostaDaComparacao)

function numeroPar (numero1) {
let parOuNao = numero1 % 2 == 0
return parOuNao
}

let respostaDoNumeroPar = numeroPar (2)
console.log (respostaDoNumeroPar)

function tamanhoDaMensagem (mensagem){
let mensagemComToUpperCase = mensagem.toUpperCase()
return mensagemComToUpperCase
}

let mensagemInformada = tamanhoDaMensagem ("Meu nome é Luana")
console.log (mensagemInformada, "Comprimento:", mensagemInformada.length)

// Exercício 3:

let numeroUm = Number (prompt("Insira um número"))
let numeroDois = Number (prompt("Insira outro número."))

function somaDeDoisNumeros (numeroUm,numeroDois) {
let somaDosNumeros = numeroUm + numeroDois
return somaDosNumeros
}

function diferencaDeDoisNumeros(numeroUm,numeroDois){
let diferencaDosNumeros = numeroUm - numeroDois
return diferencaDosNumeros
}

function multiplicacaoDeDoisNumeros(numeroUm,numeroDois) {
let multiplicacao = numeroUm * numeroDois
return multiplicacao
}

function divisaoDeDoisNumeros(numeroUm,numeroDois) {
let divisao = numeroUm/numeroDois
return divisao
}

somaDeDoisNumeros(numeroUm,numeroDois)
diferencaDeDoisNumeros (numeroUm,numeroDois)
multiplicacaoDeDoisNumeros (numeroUm,numeroDois)
divisaoDeDoisNumeros (numeroUm,numeroDois)

console.log ("Soma:", somaDeDoisNumeros(numeroUm,numeroDois))
console.log ("Diferença:", diferencaDeDoisNumeros(numeroUm,numeroDois))
console.log ("Multiplicação:", multiplicacaoDeDoisNumeros (numeroUm,numeroDois))
console.log ("Divisão:", divisaoDeDoisNumeros (numeroUm,numeroDois))
