/* Exercícios de interpretação de código

1)

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) // será impresso: 10, pois a cada "passada" pelo loop (que roda 5 vezes) é acrescentado 2 no total
sendo este valor originado do incremento vindo do i++ (+1) e do += (+1).

2)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O resultado do console.log vão ser todos os números do array maiores que 18.
b) Sim, os índices podem ser acessados com a função indexOf() associado ao for...of.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
      console.log(lista.indexOf(numero))
		
	}
}

3)
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} // O resultado ao digitar 4 será na primeira linha *,na segunda linha: **, na terceira linha: ***, e na quarta linha:
 ****.*/

// Exercícios de escrita de código

// 1)

let numeroDeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let arrayNomes = []
let nomeDoPet

if (numeroDeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for(i = 0; i < numeroDeBichinhos; i++){
        nomeDoPet = prompt("Que legal! Insira o nome dele.")
        arrayNomes.push(nomeDoPet)
    }
    console.log("Seus pets são:", arrayNomes)
}

// 2)

// a)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numero

function imprimirArray(){
    for(numero of arrayOriginal){
        console.log(numero)
    } 
    return (numero)
}

imprimirArray(numero)
console.log(numero)

// b)

function dividirPor10(){
    for (numero of arrayOriginal){
    console.log(numero = numero/10)
    }
    return (numero)
}

dividirPor10(numero)
console.log(numero)

// c)

novoArray = []

function criarNovoArray(){
    for(numero of arrayOriginal){
    if (numero % 2 === 0){
        novoArray.push(numero)
    }
    }
    return (numero)
}

criarNovoArray(novoArray)
console.log(novoArray)

// d)

let novoArray2 =[]

function criarArrayDeStrings(){
    for(numero of arrayOriginal){
        novoArray2.push("O elemento do index " +  arrayOriginal.indexOf(numero) + " é:" +  numero)
    }
    return (novoArray2)
    }

criarArrayDeStrings(novoArray2)
console.log(novoArray2)

// e)

let valorMaximo = 130
let valorMinimo = 21

function verificaMaiorOuMenor(){
    for(numero of arrayOriginal){
        if (numero === valorMaximo){
            valorMaximo = numero
        } else if (numero === valorMinimo){
                   valorMinimo = numero
        }
    } return ("O maior número é " + valorMaximo + " e o menor é "  + valorMinimo)
}

verificaMaiorOuMenor()
console.log(verificaMaiorOuMenor())
